import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const a = 3;
    console.log(a);
    return 'Hello World!';
  }
}
