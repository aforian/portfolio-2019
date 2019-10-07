const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/index.js`)
  },
  {
    path: '/myCreations',
    component: path.resolve(`src/pages/index.js`)
  },
  {
    path: '/creation/*',
    component: path.resolve(`src/templates/creation.js`)
  },
  // {
  //   path: '/404/',
  //   component: path.resolve(`src/containers/404.js`)
  // }
];