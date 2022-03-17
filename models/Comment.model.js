const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  MovieId: {
    type: Schema.Types.ObjectId,
    ref: "Wine"
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const CommentModel = model("Comment", movieSchema);

module.exports = CommentModel;