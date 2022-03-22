const { Schema, model } = require("mongoose");

const usernameSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    nickName: String,
    city: String,
  },
  {
    timestamps: true,
  }
);

const UserModel = model("Username", usernameSchema);

module.exports = UserModel;
