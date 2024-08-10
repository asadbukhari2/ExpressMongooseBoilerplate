const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    user_id: { type: mongo.Schema.Types.ObjectId, ref: 'user', required: true },
    token: { type: String },
    iat: { type: Date },
    exp: { type: Date },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

userSchema.plugin(uniqueValidator);

const user_jwt = model('user', userSchema);
module.exports = user_jwt;
