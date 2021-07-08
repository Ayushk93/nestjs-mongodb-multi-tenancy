import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/tenant-users/interfaces/tenant-user.interfaces';
import * as mongoose from 'mongoose';

@Injectable()
export class TenantUserMuService {
  constructor(@Inject('User') private readonly userModel: Model<User>) {}

  async findAll() {
    const data = await this.userModel
      .find({}, { user_password: 0 })
      .sort({ first_name: 1 })
      .exec();
    return data;
  }

  async getCnxCnt() {
    const connection = mongoose.connections;
    const min = new Date().getMinutes();
    const hr = new Date().getHours();
    console.log(hr, ':', min, ' Connection Length -> ', connection.length);
    return this.userModel.find({}).exec();
  }
}
