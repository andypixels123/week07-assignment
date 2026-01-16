//TODO: set up a server API
//TODO: set up a routing system with at least one GET route and one POST route
// console.log("server running");

import express from "express";
import cors from "cors";
import { db } from "./dbConn.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

// ! from week 4 guestbook assignment ///////////////////////////////////////////
// todo: create data using formValues from client, send to database
app.post("/addcomms", (req, res) => {
    try {
        const newComm = req.body.formValues;
        // console.log(newComm);
        const query = db.query(
            `INSERT INTO gbComms (username, comment, date) VALUES ($1, $2, $3)`,
            [newComm.userName, newComm.userComment, newComm.date]
        );
        res.status(200).json({ request: "success" });
    } catch (fish) {
        console.error(fish, "Request failed");
        res.status(500).json({ request: "fail" });
    }
});

// todo: get data from database, send to client
app.get("/getcomms", async function (req, res) {
    try {
        const comments = await db.query("SELECT * FROM gbComms ORDER BY idx DESC");
        res.json(comments.rows);
        res.status(200).json({ request: "success" });
    } catch (fish) {
        console.error(fish, "Request failed");
        res.status(500).json({ request: "fail" });
    }
});

// todo: update database with new like count
// app.post("/likes", (req, res) => {
//     try {
//         const newLike = req.body.commLikes;
//         const query = db.query(
//             `UPDATE gbComms SET likes = $1 WHERE idx = $2`, [newLike.likeQty, newLike.likeId]
//         );
//         res.status(200).json({ request: "success" });
//     } catch (fish) {
//         console.error(fish, "Request failed");
//         res.status(500).json({ request: "fail" });
//     }
// });

// app.listen(PORT, () => {
//     console.info(`Server running, port ${PORT}`);
// });

//! from demo //////////////////////////////////////////////////
// routing system
// root route
// route --> http method GET
// READ data
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to the server API. GET comfy!" });
// });

// READ biscuits data
// route --> http method GET
// static route
// app.get("/biscuits", async (req, res) => {
//     try {
// query db
//         const query = await db.query(
//             `SELECT biscuit_name AS "biscuit name", src AS "image link", description, crunchiness FROM biscuits`
//         );
//         console.log(query.rows);
//         res.json(query.rows);
// throw new Error(); //to test catch block
//     } catch (error) {
//         console.error(error, "Response failed. Turn off and on");
//         res.status(500).json({ response: "fail" });
//     }
// });

// READ biscuits and customers data
// app.get("/biscuits-customers", async (req, res) => {
//     try {
//         const query = await db.query(
//             `SELECT biscuits.*, customers.* FROM biscuits JOIN customers ON customers.id = biscuits.customer_id`
//         );
//         console.log(query.rows);
//         res.json(query.rows);
//     } catch (error) {
//         console.error(error, "Response failed. Turn off and on");
//         res.status(500).json({ response: "fail" });
//     }
// });

// CREATE new entries in the biscuits table
// route --> http method POST
// app.post("/new-biscuit", (req, res) => {
//     try {
// collect the data to insert
//         const data = req.body;
// const { biscuitName, src, description, crunchiness, customerId } = req.body;
// query the database to insert new data
//         const query = db.query(
//             `INSERT INTO biscuits (biscuit_name, src, description, crunchiness, customer_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
//             [
//                 data.biscuitName,
//                 data.src,
//                 data.description,
//                 data.crunchiness,
//                 data.customerId,
//             ]
//         );
//         res.status(200).json({ request: "success" });
//     } catch (error) {
//         console.error(error, "Request failed. Turn off and on");
//         res.status(500).json({ request: "fail" });
//     }
// });

// Delete one entry from the biscuits table
// route --> http method delete
// dynamic :id
// app.delete("/delete-biscuit/:id", (req, res) => {
//     try {
//access the value of my id params
//         const idParams = req.params.id;
// const { id } = req.params;
//query database
//         const query = db.query(`DELETE FROM biscuits WHERE id = $1 RETURNING *`, [
//             idParams,
//         ]);
//         res.status(200).json({ request: "success" });
//     } catch (error) {
//         console.error(error, "Request failed. Turn off and on");
//         res.status(500).json({ request: "fail" });
//     }
// });

// Update an entry in the biscuits table
// route --> http method PUT
// dynamic :id
// app.put("/update-biscuit/:id", (req, res) => {
//     try {
// access params --> destructuring id
//         const { id } = req.params;
// store the new values to update the current entry --> destructuring body properties
//         const { biscuitName, src, description, crunchiness, customerId } = req.body;
// query database
//         const query = db.query(
//             `UPDATE biscuits SET biscuit_name = $1, src = $2, description = $3, crunchiness = $4, customer_id = $5 WHERE id = $6`,
//             [biscuitName, src, description, crunchiness, customerId, id]
//         );
//         res.status(200).json({ request: "success" });
//     } catch (error) {
//         console.error(error, "Request failed. Turn off and on");
//         res.status(500).json({ request: "fail" });
//     }
// });