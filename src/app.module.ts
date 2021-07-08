import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantUsersModule } from './tenant-users/tenant-users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TenantUserMuModule } from './tenant-user-mu/tenant-user-mu.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `${process.env.MONGO_DB_CONNECTION_STRING}/aab_tenant`,
      {
        connectionName: 'master_connection',
      },
    ),
    MongooseModule.forRoot(
      `${process.env.MONGO_DB_CONNECTION_STRING}/heranba_tenant`,
      {
        connectionName: 'another_connection',
      },
    ),
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
