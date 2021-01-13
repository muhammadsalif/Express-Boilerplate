const mongoose = require('mongoose');

/////////////////////////////////////////////////////////////////////////
// Mongoose connections
let dbURI = "Your Database Uri here"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected")
})

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected")
    process.exit(1);
})

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {  //this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
/////////////////////////////////////////////////////////////////////////
// Db Schemas & Models

var userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    gender: { type: String },
    createdOn: { type: Date, default: Date.now },
    activeSince: Date
});

var users = mongoose.model("users", userSchema);

module.exports = {
    users: users, //or users only
    // orderModel: orderModel
}