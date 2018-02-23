
export const getOne = (model) => (req, res, next) => {
  req.params.id ? res.json({getOneWithParams: req.params.id}) : res.json({getOne: 123});
}

export const getAll = (model) => (req, res, next) => {
  res.json({ getAll: 123 });
}

export const createOne = (model) => (req, res, next) => {
  res.json({ createOne: 123 });
}

export const deleteOne = (model) => (req, res, next) => {
  res.json({ deleteOne: 123 });
}

export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    getOne: getOne(model),
    getAll: getAll(model),
    createOne: createOne(model),
    deleteOne: deleteOne(model)
  };
  return {...defaults, ...overrides};
}