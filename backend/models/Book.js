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
  lenderId: {
    type: String,
    required: true,
  },
  lenderName: {
    type: String,
    required: true,
  },
  lenderEmail: {
    type: String,
    required: true,
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
