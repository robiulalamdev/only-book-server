import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import { userRoles } from './user.constant';

const userSchema = new Schema<IUser>(
  {
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: userRoles,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    address: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      default: 0,
      required: true,
    },
    income: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const User = model<IUser, UserModel>('User', userSchema);
