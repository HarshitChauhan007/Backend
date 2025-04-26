const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config(); // dotenv configuration

const app = require("./app.js");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 6000;

// sequelize
//     .sync() // Database Connection
//     .then(() => {
//         console.log("Database synced");
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     })
//     .catch(err => {
//         console.error("Error syncing database:", err);
//     });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});