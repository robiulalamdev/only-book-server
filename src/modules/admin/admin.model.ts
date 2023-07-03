import { Schema, model } from 'mongoose';
import { AdminModel, IAdmin } from './admin.interface';


const AdminSchema = new Schema<IAdmin, AdminModel>(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['admin'],
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      }
    },
    address: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export const Admin = model<IAdmin, AdminModel>('Admin', AdminSchema);
