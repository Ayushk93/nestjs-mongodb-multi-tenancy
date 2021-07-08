import { Module } from '@nestjs/common';
import { TenantUsersService } from './tenant-users.service';
import { TenantUsersResolver } from './tenant-users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserTSchema } from './tenant-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'User', schema: UserTSchema }],
      'master_connection',
    ),
  ],
  providers: [TenantUsersResolver, TenantUsersService],
})
export class TenantUsersModule {}
