export const controllers = {
  async createOne(model, body) {
    return await model.create(body);
  },

  updateOne(docToUpdate, update) {
  },

  deleteOne(docToDelete) {
  },

  getOne(docToGet) {
    return Promise.resolve(docToGet);
  },

  async getAll(model) {
    return await model.find({});
  },

  async findByParam(model, id) {
    return await model.findById(id)
  }
}

export const getOne = (model) => async (req, res, next) => {
  let doc = await controllers.getOne(req.docFromId)
  res.status(201).send(doc);
}

export const getAll = (model) => async (req, res, next) => {
  let allDocs = await controllers.getAll(model)
  res.status(201).send(allDocs);
}

export const createOne = (model) => async (req, res, next) => {
  try {
    res.status(201).json(await controllers.createOne(model, req.body));
  } catch (error) {
    next(error);
  }
}

export const deleteOne = (model) => (req, res, next) => {
  res.json({ deleteOne: 123 });
}

export const findByParam = (model) => async (req, res, next, id) => {
  try {
    req.docFromId = await controllers.findByParam(model, id);
    next()
  } catch (error) {
    next(error);
  }
}

export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    getOne: getOne(model),
    getAll: getAll(model),
    createOne: createOne(model),
    deleteOne: deleteOne(model),
    findByParam: findByParam(model)
  };
  return {...defaults, ...overrides};
}



// //model level stuff
// const song = await Song.findById(id) //returns a mongo query object with promise on it .exec means executes the query
// const songName = await Song.findOne({name: 'thisname'}).exec();
// song.create({}) //or
// const newSong = new Song({});

// Song.findOneAndUpdate({name: 'thisname'}, {name: 'othername'}, {new: true}) //returns the newest updated with new: true

// //once you have a document
// song.save()  //saves to the document