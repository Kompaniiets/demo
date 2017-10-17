const fs = require('fs');

const Validator = {};

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach((file) => {
        Validator[file.split('.')[0]] = require(`./${file}`);
    });

module.exports = Validator;
