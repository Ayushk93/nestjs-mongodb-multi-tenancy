import { Module } from '@nestjs/common';
import { TenantUserMuService } from './tenant-user-mu.service';
import { TenantUserMuResolver } from './tenant-user-mu.resolver';
import { UserTSchema } from 'src/tenant-users/tenant-user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { DatabaseModule } from 'src/database/database.module';

export const TenantModelProviders = [
  {
    provide: 'User',
    useFactory: (connection: Connection) =>
      connection.model('User', UserTSchema),
    inject: ['TENANT_CONNECTION'],
  },
];

@Module({
  imports: [
    // MongooseModule.forFeature(
    //   [{ name: 'User', schema: UserTSchema }],
    //   'master_connection',
    // ),
    DatabaseModule,
  ],
  providers: [
    TenantUserMuResolver,
    TenantUserMuService,
    ...TenantModelProviders,
  ],
})
export class TenantUserMuModule {}
