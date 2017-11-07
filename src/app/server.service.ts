import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {

  constructor() { }

  private dataServerArray: DataServer[] = [
    new DataServer('f6d09c5b-7798-41e8-928e-c162c1e02009', 'ServerD85', 'Windows', 'NJ, China', 'server on internet'
      , '172.21.212.85', '8899'),
    new DataServer('f6d09c5b-7798-41e8-928e-c162c1e02001', 'ServerD76', 'Windows', 'NJ, China', 'server on internet'
      , '172.21.212.85', '8899'),
    new DataServer('f6d09c5b-7798-41e8-928e-c162c1e02002', 'ServerD23', 'Windows', 'NJ, China', 'server on internet'
      , '172.21.212.85', '8899'),
    new DataServer('f6d09c5b-7798-41e8-928e-c162c1e02004', 'ServerD65', 'Windows', 'NJ, China', 'server on internet'
      , '172.21.212.85', '8899')
  ];

  private  modelServerArray: ModelServer[] = [
    new ModelServer('f6d09c5b-7798-41e8-928e-c162c1e02009', 'ServerM35', 'Windows', 'NJ, China', 'server on internet'
      , '172.21.212.85', '8899'),
    new ModelServer('f6d09c5b-7798-41e8-928e-c162c1e02009', 'ServerM37', 'Windows', 'NJ, China', 'server on internet'
      , '172.21.212.85', '8899'),
    new ModelServer('f6d09c5b-7798-41e8-928e-c162c1e02009', 'ServerM23', 'Windows', 'NJ, China', 'server on internet'
      , '172.21.212.85', '8899'),
    new ModelServer('f6d09c5b-7798-41e8-928e-c162c1e02009', 'ServerM98', 'Windows', 'NJ, China', 'server on internet'
      , '172.21.212.85', '8899'),
    new ModelServer('f6d09c5b-7798-41e8-928e-c162c1e02009', 'ServerM53', 'Windows', 'NJ, China', 'server on internet'
      , '172.21.212.85', '8899'),
    new ModelServer('f6d09c5b-7798-41e8-928e-c162c1e02009', 'ServerM83', 'Windows', 'NJ, China', 'server on internet'
      , '172.21.212.85', '8899')
  ];

  getModelServer(): ModelServer[] {
    return this.modelServerArray;
  }

  getDataServer(): DataServer[] {
    return this.dataServerArray;
  }
}

export class DataServer {
  constructor(public id: string,
              public name: string,
              public system: string,
              public location: string,
              public desc: string,
              public ip: string,
              public port: string
  ) {

  }
}

export class ModelServer {
  constructor(public id: string,
              public name: string,
              public system: string,
              public location: string,
              public desc: string,
              public ip: string,
              public port: string
  ) {

  }
}

