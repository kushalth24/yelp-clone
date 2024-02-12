require("dotenv").config();
const express = require("express");
const app = express();
const cors=require("cors")
const db = require("./db/index.js");
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.get("/api/v1/Restaurants", async (req, res) => {
  try {
    const result = await db.query("select * from restaurants");
    res.send({
        status: "success",
        length:result.rowCount,
        result:result.rows
    });
  } catch (err) {
    console.log(err);
  }
});
app.get("/api/v1/Restaurants/getRestaurants/:id", async (req, res) => {
    try {
        const result = await db.query(`select * from restaurants where id=$1`, [req.params.id]);
        res.send({
            status: "success",
            length:result.rowCount,
            result:result.rows
        });
      } catch (err) {
        console.log(err);
      }
});
app.post("/api/v1/Restaurants/addRestaurants", async(req, res) => {
    try {
        const result = await db.query(`insert into restaurants(name,location,price_range) values($1,$2,$3)`,[req.body.name,req.body.location,req.body.price_range]);
        res.send({
            status: "success",
            result: req.body
        });
      } catch (err) {
        console.log(err);
      }
});
app.put("/api/v1/Restaurants/updateRestaurants/:id", async(req, res) => {
    try {
        const result = await db.query(`update restaurants set name=$2,location=$3,price_range=$4 where id=$1`,[req.params.id, req.body.name,req.body.location,req.body.price_range]);
        res.send({
            status: "success",
            result: req.body
        });
        
      } catch (err) {
        console.log(err);
      }
});
app.delete("/api/v1/Restaurants/deleteRestaurants/:id", async(req, res) => {
    try {
        const result = await db.query(`delete from restaurants where id=$1`,[req.params.id]);
        res.send({
            status: "success",
        });
      } catch (err) {
        console.log("id not found");
      }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// http://localhost:4001/getRestaurants
