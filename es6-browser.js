'use strict';

var _ = require('lodash');

module.exports = _.merge(
  {
    env: { browser: true }
  },
  require('./es6.js')
);