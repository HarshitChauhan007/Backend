import databaseConnection from "./database/databaseConnection.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 5000;

databaseConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running successfully at port : ${PORT}`);
        });
    })
    .catch(error => {
        console.log("❌ MONGODB connection failed !!! ❌", error);
    });
