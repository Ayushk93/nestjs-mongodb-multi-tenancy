import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantUsersModule } from './tenant-users/tenant-users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TenantUserMuModule } from './tenant-user-mu/tenant-user-mu.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/master_db', {
      connectionName: 'master_connection',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/tenant_db', {
      connectionName: 'tenent_connection',
    }),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: true,
    }),
    TenantUsersModule,
    TenantUserMuModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
