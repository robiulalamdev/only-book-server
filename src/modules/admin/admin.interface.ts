import { Model, Types } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IAdmin = {
  phoneNumber: number;
  role: 'admin';
  password: string;
  name: UserName;
  address: string;
};

export type AdminModel = Model<IAdmin, Record<string, unknown>>;

