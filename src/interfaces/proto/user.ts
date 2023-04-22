/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "user";

/** hero/hero.proto */

export interface UserById {
  id: number;
}

export interface AllUsersParams {
}

export interface AllUsersResponse {
  users: User[];
}

export interface AddUser {
  name: string;
  email: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

function createBaseUserById(): UserById {
  return { id: 0 };
}

export const UserById = {
  encode(message: UserById, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserById {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserById();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserById {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: UserById): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserById>, I>>(base?: I): UserById {
    return UserById.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserById>, I>>(object: I): UserById {
    const message = createBaseUserById();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseAllUsersParams(): AllUsersParams {
  return {};
}

export const AllUsersParams = {
  encode(_: AllUsersParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllUsersParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllUsersParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AllUsersParams {
    return {};
  },

  toJSON(_: AllUsersParams): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AllUsersParams>, I>>(base?: I): AllUsersParams {
    return AllUsersParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AllUsersParams>, I>>(_: I): AllUsersParams {
    const message = createBaseAllUsersParams();
    return message;
  },
};

function createBaseAllUsersResponse(): AllUsersResponse {
  return { users: [] };
}

export const AllUsersResponse = {
  encode(message: AllUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllUsersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllUsersResponse {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: AllUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e ? User.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AllUsersResponse>, I>>(base?: I): AllUsersResponse {
    return AllUsersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AllUsersResponse>, I>>(object: I): AllUsersResponse {
    const message = createBaseAllUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddUser(): AddUser {
  return { name: "", email: "" };
}

export const AddUser = {
  encode(message: AddUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddUser {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: AddUser): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddUser>, I>>(base?: I): AddUser {
    return AddUser.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddUser>, I>>(object: I): AddUser {
    const message = createBaseAddUser();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return { id: 0, name: "", email: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

export interface UsersService {
  FindOne(request: UserById): Promise<User>;
  AddOne(request: AddUser): Promise<User>;
  All(request: AllUsersParams): Promise<AllUsersResponse>;
}

export class UsersServiceClientImpl implements UsersService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "user.UsersService";
    this.rpc = rpc;
    this.FindOne = this.FindOne.bind(this);
    this.AddOne = this.AddOne.bind(this);
    this.All = this.All.bind(this);
  }
  FindOne(request: UserById): Promise<User> {
    const data = UserById.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindOne", data);
    return promise.then((data) => User.decode(_m0.Reader.create(data)));
  }

  AddOne(request: AddUser): Promise<User> {
    const data = AddUser.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddOne", data);
    return promise.then((data) => User.decode(_m0.Reader.create(data)));
  }

  All(request: AllUsersParams): Promise<AllUsersResponse> {
    const data = AllUsersParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "All", data);
    return promise.then((data) => AllUsersResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
