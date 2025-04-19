import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import httpsResponse from "./utils/httpsResponse.js";
import httpsError from "./utils/httpsError.js";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


// app.get("/", (req, res) => {
//     try {
//         // throw new Error("Welcome to Event Manager API");
//         res.status(200).json(
//             httpsResponse(req, res, 200, "Welcome to Event Manager API", null)
//         );
//     } catch (error) {
//         res.status(400).json(httpsError(error, req, res, 400));
//     }
// });

export { app };
