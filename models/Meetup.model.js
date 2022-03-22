const { Schema, model } = require("mongoose");

const meetUpSchema = new Schema({
  title: String,
  city: String,
  description: String,
  mainUserId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: Date,
  movieId: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
  },
  type: [
    {
      type: String,
      enum: ["Ir al cine", "Performance Tematica"],
      required: true,
    },
  ],
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const MeetUpModel = model("User", meetUpSchema);

module.exports = MeetUpModel;
