import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

const User = sequelize.define("user", {
    noms: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 3,
    },
});

export default User;
