const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URI, {
    host: 5432,
    dialect: "postgres",
    operatorsAliases: 0,
    logging: false,
    pool: {
        max: 999,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
})

module.exports = sequelize;