import { Injectable } from '@nestjs/common';
import { AddUser, User } from './interfaces/proto/user';

@Injectable()
export class AppService {

  private users: User[] = []
  constructor() { }

  findOne(id: number): User {
    return this.users.find((user) => user.id == id)
  }

  addOne(data: AddUser): User {
    const user: User = {
      id: this.users.length + 1,
      name: data.name,
      email: data.email
    }
    this.users.push(user)
    return user;
  }

  all(): User[] {
    return this.users;
  }
}
