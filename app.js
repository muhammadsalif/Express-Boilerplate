const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const app = express()
const auth = require("./Routes/authentication")
const {users} = require("./Database/models")
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const server = http.createServer(app)



server.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})