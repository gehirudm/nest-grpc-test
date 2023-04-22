# NestJS + gRPC Test
This is a test project to test out how to implement a gRPC driven Microservice in NestJS

### Generating TypeScript interfaces from .proto files
#### Windows
```bash
$ protoc --plugin=protoc-gen-ts_proto=.\node_modules\.bin\protoc-gen-ts_proto.cmd --ts_proto_out=<Output Path> <Path to .proto file>
```

### Other Data to note
Default URL : http://localhost:5000

https://github.com/bloomrpc/bloomrpc