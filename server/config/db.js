const mongoose = require('mongoose');

const connectToDb = () => {
  mongoose
    .connect("mongodb+srv://ratikvohra:GlobalizationClothing@cluster1.ksgzt64.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1", {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then((data) =>
      console.log(`Database connected with ${data.connection.host}`)
    );
};

module.exports = connectToDb;
