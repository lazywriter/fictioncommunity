const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://yashwthakur:4p9JfbpMkEuBzb6D@cluster0.ioynaqo.mongodb.net/books?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("connected");
        const fetched_data = mongoose.connection.db.collection("books");
        fetched_data.find({}).toArray((err, data) => {
          const genres = mongoose.connection.db.collection("genres");
          genres.find({}).toArray((err, genData) => {
            if (err) console.log(err);
            else {
              global.book_data = data;
              global.genre_data = genData;
            }
          });
        });
      }
    }
  );
};

module.exports = mongoDB;
