import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const a = 1;
    console.log(a);
    return 'Hello World!';
  }
}
