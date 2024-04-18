const mongoose = require('mongoose');

require("dotenv").config();
exports.Connect =() => {
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => 
    {
        console.log("Db connection issue");
        console.log(err);
        process.exit(1);
    }
    );
}