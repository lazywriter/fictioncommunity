const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  imgSource: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
  },
  description: {
    type: String,
  },
  genreName: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("books", bookSchema);
