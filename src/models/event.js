const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define(
    "Event",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.ENUM("scheduled", "cancelled", "completed"),
            defaultValue: "scheduled",
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: true,
        tableName: "events",
    }
);

module.exports = Event;
