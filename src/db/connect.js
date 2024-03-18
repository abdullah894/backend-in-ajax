const mongoose = require ("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/usingajax")
.then( () => {
    console.log("connected to database");
})
.catch((err) =>{
    console.log("error not connected", err);
})