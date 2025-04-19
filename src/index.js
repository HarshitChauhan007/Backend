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
            console.info("DATABASE_CONNECTED", {
                meta: {
                    PORT: PORT,
                    Message: "🚀🚀Database connected succcessfully...🚀🚀",
                },
            });
        });
    })
    .catch(error => {
        console.info("DATABASE_CONNECTED_FAILED", {
            meta: {
                Error: error,
                Message: "❌ Database connection failed !!! ❌",
            },
        });
    });
