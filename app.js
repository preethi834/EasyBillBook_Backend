const express = require("express");
const db=require("./Database");
const user=require("./Routes/Users");
console.log(db);
db.connect();
const app=express();
app.use(express.json());
app.use("/",user.route);
app.listen(8080,()=>{
    console.log("listening to port no 8080");
})