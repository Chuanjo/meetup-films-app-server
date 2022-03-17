const { Schema, model } = require("mongoose");


const meetUpSchema = new Schema(
  {
    title: String,
    city: String,
    description: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    date: Date,
    movieId: { 
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    type: [
      {
        type: String,
        enum: [""],
        required: true, 
      }
    ],
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  
);

const MeetUpModel = model("User", meetUpSchema);

module.exports = MeetUpModel;