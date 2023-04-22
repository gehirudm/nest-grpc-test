import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { AddUser, AllUsersParams, AllUsersResponse, User, UserById } from './interfaces/proto/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @GrpcMethod('UsersService', 'FindOne')
  findOne(data: UserById, metadata: Metadata, call: ServerUnaryCall<any, any>): User {
    return this.appService.findOne(data.id);
  }

  @GrpcMethod('UsersService', 'AddOne')
  AddOne(data: AddUser, metadata: Metadata, call: ServerUnaryCall<any, any>): User {
    return this.appService.addOne(data);
  }

  @GrpcMethod('UsersService', 'All')
  All(data: AllUsersParams, metadata: Metadata, call: ServerUnaryCall<any, any>): AllUsersResponse {
    const users = this.appService.all();
    return {
      users
    }
  }
}
