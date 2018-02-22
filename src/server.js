const express = require('express');
const restRouter = require('./apis/rest-router');

const app = express();


app.use('/rest', restRouter);

app.get('/', (req, res) => {
  res.json({ok: true});
})

module.exports = app