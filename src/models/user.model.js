import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);