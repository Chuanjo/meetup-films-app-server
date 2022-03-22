const { Schema, model } = require("mongoose");

const meetUpSchema = new Schema({
  title: String,
  city: String,
  description: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Username",
  },
  date: Date,
  movie: {
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
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const MeetUpModel = model("User", meetUpSchema);

module.exports = MeetUpModel;
