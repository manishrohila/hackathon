const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3001' }));
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

require("./config/database").Connect();

const user = require("./routes/user");

app.use("/api/v1",user);

app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}` );
})
