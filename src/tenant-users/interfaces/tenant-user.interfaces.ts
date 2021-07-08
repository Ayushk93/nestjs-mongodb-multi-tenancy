import { Document } from 'mongoose';

export interface User extends Document {
  _id: string;

  first_name: string;

  last_name: string;

  user_contact: string;

  user_email: string;

  user_password: string;

  isWorkgroupAdmin: boolean;

  user_role: [
    {
      _id: string;
      role_type: string;
    },
  ];

  devices: [
    {
      device_name: string;
      device_status?: string;
    },
  ];

  workgroups: [
    {
      workgroup_name: string;
    },
  ];

  tenant_db: string;
}
