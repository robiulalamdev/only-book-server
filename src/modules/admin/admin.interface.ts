import { Model, Types } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IAdmin = {
  phoneNumber: string;
  role: 'admin';
  password: string;
  name: UserName;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AdminModel = Model<IAdmin, Record<string, unknown>>;

