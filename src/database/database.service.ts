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
    const sec = new Date().getSeconds();
    const foundConn = connection.find((con: Connection) => {
      return con.name === this.context.req.headers['database'];
    });
    console.log(
      hr,
      ':',
      minu,
      ':',
      sec,
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
    const connectionUri = `${process.env.MONGO_DB_CONNECTION_STRING}/${this.context.req.headers['database']}`;
    const connection = await mongoose.createConnection(connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  }
}
