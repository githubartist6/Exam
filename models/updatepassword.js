const mongoose = require("mongoose");

const enrolschema = new mongoose.Schema({
    email:String,
    passwordupdate:[{oldpassword:String,newpassword:String}]
});
const enroldata = mongoose.model("new_password_stor",enrolschema);

module.exports=enroldata;
