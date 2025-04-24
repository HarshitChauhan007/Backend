const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("postgresql://neondb_owner:npg_nSHWlqto79Ed@ep-plain-bush-a4ohm1a6-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require", {
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