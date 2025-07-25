import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello 789!';
  }

  gettest(): string {
    return 'Tetst';
  }

  greet(name?: string): string {
  return `Helloabcdef, ${name || 'Guest'}`;
  }

  addUser(name?: string,pass?: string): string {
    
  return `Helloabcdef, ${name || 'Guest'}`;
  }

  


}
