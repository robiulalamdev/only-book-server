import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import { userRoles } from './user.constant';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  // hashing user password
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds)
  );
  next();
});

export const User = model<IUser, UserModel>('User', userSchema);
