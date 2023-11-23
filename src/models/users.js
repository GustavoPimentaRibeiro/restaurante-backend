const {sequelize, Sequelize} = require('../database/config');

//modelo da tabela comments
var users = sequelize.define('users', {
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//export
module.exports = {users};