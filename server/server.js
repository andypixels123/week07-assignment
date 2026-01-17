//TODO: set up a server API
//TODO: set up a routing system with at least one GET route and one POST route
// console.log("server running");

import express from "express";
import cors from "cors";
import { db } from "./dbConn.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;

// todo: create data using formValues from client, send to database
app.post("/addcomms", (req, res) => {
    try {
        const newComm = req.body.formValues;
        const query = db.query(
            `INSERT INTO gbComms (username, comment, date) VALUES ($1, $2, $3)`,
            [newComm.userName, newComm.userComment, newComm.date]
        );
        res.status(200).json({ request: "success" });
    } catch (error) {
        console.error(error, "Request failed");
        res.status(500).json({ request: "fail" });
    }
});

// todo: get data from database, send to client
app.get("/getcomms", async (req, res) => {
    try {
        const comments = await db.query("SELECT * FROM gbComms ORDER BY idx DESC");
        res.json(comments.rows);
        res.status(200).json({ request: "success" });
    } catch (error) {
        console.error(error, "Request failed");
        res.status(500).json({ request: "fail" });
    }
});

// todo: update database with new like count
// dynamic route id
app.post("/likes/:idx", async (req, res) => {
    try {
        // get comment id from route params
        const { idx } = req.params;
        const query = await db.query(
            `UPDATE gbComms SET likes = likes + 1 WHERE idx = $1`, [idx]
        );
        if (query.rowCount === 0) {// fail
            return res.status(404).json({ error: "post not found" });
        } else {
            return res.status(200).json({ request: "success" });
        }
    } catch (error) {
        console.error(error, "request failed");
        res.status(500).json({ message: "server error" });
    }
});

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to the server API. GET comfy!" });
// });

// ! In Express.js, the app.listen() function is used to start a server and make it listen for incoming requests on a specified port and host.
// ! This method is essential for running an Express application as it enables the server to handle HTTP requests from clients (like browsers).
app.listen(PORT, () => {
    console.info(`Server running, port ${PORT}`);
});