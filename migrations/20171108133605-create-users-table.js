'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable(
            'users',
            {
                id: {
                    type: Sequelize.INTEGER(11),
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                email: {
                    type: Sequelize.STRING(128),
                    allowNull: false
                },
                username: {
                    type: Sequelize.STRING(30),
                    allowNull: false
                },
                password: {
                    type: Sequelize.STRING(256),
                    allowNull: false
                }
            })
    },

    down: function (queryInterface, Sequelize) {
        queryInterface.dropTable('users')
    }
};