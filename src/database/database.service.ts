import { Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class DatabaseService {
  constructor(@Inject(CONTEXT) private context) {}

  async getConnection(): Promise<Connection> {
    const connection = mongoose.connections;
    const minu = new Date().getMinutes();
    const hr = new Date().getHours();
    const foundConn = connection.find((con: Connection) => {
      console.log(
        'inside find',
        con.name,
        this.context.req.headers['database'],
      );
      return con.name === this.context.req.headers['database'];
    });
    console.log(
      hr,
      ':',
      minu,
      ' connection -> ',
      connection.length,
      this.context.req.headers['database'],
    );

    if (foundConn && foundConn.readyState === 1) {
      return foundConn;
    }

    return await this.createConnectionMon();
  }

  async createConnectionMon(): Promise<Connection> {
    const connectionUri = `mongodb://localhost:27017/${this.context.req.headers['database']}`;
    const connection = await mongoose.createConnection(connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  }
}
