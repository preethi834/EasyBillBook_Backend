const mongoose = require('mongoose');
const uri = "mongodb+srv://preethimannaru:Ra5iKavC7IyK8wm6@easybillbook.xpzbmnq.mongodb.net/EasyBillBook";
const connection = () => {
    mongoose.connect(uri).then(() => {
        console.log("Connected to the database!");
    }
    ).catch((error)=>console.log(error));
}
exports.connect = connection;