/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UserTSchema = new mongoose.Schema(
  {
    first_name: String,

    last_name: String,

    user_contact: String,

    isWorkgroupAdmin: Boolean,

    user_email: {
      unique: true,
      type: String,
    },

    user_password: String,

    user_role: [
      {
        _id: String,
        role_type: String,
      },
    ],

    devices: [
      {
        device_name: String,
        device_status: String,
      },
    ],

    workgroups: [
      {
        workgroup_name: String,
      },
    ],

    tenant_db: String,
  },
  { collection: 'users', versionKey: false, timestamps: true },
);

