// server-rick-and-morty\src\server.js

// Dependencies
require("dotenv").config();

// Express
const express = require("express");

// Middlewares
const morgan = require("morgan");
const cors = require("cors");

// Router
const router = require("./routes");

// Enviroment
const PORT = process.env.PORT || 3001;

const server = express();

server.use(
    cors({
        origin: "*",
    })
);
server.use(express.json());
server.use(morgan("dev"));

server.use("/", router);

server.listen(PORT, () => {
    console.log("Server reised in port " + PORT);
});
