const Sequelize = require('sequelize');
const config = require('../../config');

const sequelize = new Sequelize(config.db.dbname, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
});

module.exports = sequelize;
