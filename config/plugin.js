'use strict';

const nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

const mysql = {
  enable: true,
  package: 'egg-mysql',
};

const cors = {
  enable: true,
  package: 'egg-cors',
};

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks,
  mysql,
  cors,
};

