import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { Scope } from '@nestjs/common';

export const mongooseProviders = [
  {
    provide: 'TENANT_CONNECTION',
    scope: Scope.REQUEST,
    useFactory: async (connection: DatabaseService): Promise<unknown> => {
      return await connection.getConnection();
    },
    inject: [DatabaseService],
  },
];

@Module({
  providers: [...mongooseProviders, DatabaseService],
  exports: [...mongooseProviders]
})
export class DatabaseModule {}
