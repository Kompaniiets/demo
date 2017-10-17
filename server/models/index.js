const sequelize = require('../utils/sequelize');
const fs = require('fs');
const path = require('path');

const db = {};

fs
    .readdirSync(__dirname)
    .filter(file => fs.statSync(path.join(__dirname, file)).isDirectory())
    .forEach((file) => {
        const pathToModel = path.join(__dirname, file);
        const methods = require(`${pathToModel}/methods`);
        const schema = require(`${pathToModel}/schema`);

        const model = sequelize.importCache[path] =
            sequelize.define(file, schema(sequelize, sequelize.Sequelize), methods);

        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = db;
