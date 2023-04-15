const fs = require("fs");
const express = require("express");
const app = express();

// Importing discussions from discussions.json file
const blogs = JSON.parse(fs.readFileSync(`data/blogs.json`));

// Middlewares
app.use(express.json());


app.get("/api/v1/blogs", (req, res) => {

    res.status(200).json({
        status: "Success",
        message: "Blogs fetched successfully",
        data: {
          blogs,
        },
      });

});

// Write POST endpoint for creating blogs in stackoverflow

/*

Endpoint - /api/v1/blogs
req.body = {
      "heading":"xyz",
      "body": "kddk djddk dkdkkd",
      "creator_id": "kkdkdk",
      "tags": random
    }
  
Save req.body along with id that will be 1+ the id of last object in the blogs.json file.

Response ==> 

Return 200 Status code
json = {
        status: "Success",
        message: "Blog added successfully"
      }

*/

app.post("/api/v1/blogs", (req, res) => {

});

module.exports = app;