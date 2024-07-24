const mongoose = require("mongoose");
//Mongoose will throw an error if you try to query by a field that is not defined in your schema
mongoose.set("strictQuery", true);
async function connectToMongoDB(url) {
  return mongoose.connect(url);
}

module.exports = {
  connectToMongoDB,
};
