/* eslint-disable consistent-type-definitions */
import { IUser } from '../users/user.interface';
import { User } from '../users/user.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const newUser = new User(user);
  const createdUser = await newUser.save();
  return createdUser;
};

export const authService = {
  createUser,
};
