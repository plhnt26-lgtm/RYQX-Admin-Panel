const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI)
.then(async()=>{

    const password = await bcrypt.hash(
        "RYQX@12345",
        10
    );

    const admin = new Admin({
        username: "admin",
        password: password,
        role: "Super Admin"
    });

    await admin.save();

    console.log("Admin Created");

    process.exit();

})
.catch(err=>console.log(err));
