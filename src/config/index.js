import * as _ from 'lodash';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const env = process.env.NODE_ENV;

const baseConfig = {
  db: {
    url: 'mongodb://localhost/dope'
  },
  expireTime: "30d",
  secrets: {
    JWT_SECRET: "test123"
  },
  port: '3000'
}

let devConfig;

switch(env) {
  case 'prod':
  case 'production':
    devConfig = require('./production.js');
    break;
  default:
    devConfig = require("./development.js");
}

export default _.merge(baseConfig, devConfig);
