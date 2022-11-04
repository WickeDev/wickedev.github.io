require('ts-node').register();

const { createPages } = require('./src/lib/create-pages');

exports.createPages = createPages;