import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): object {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
      message: 'NestJS app is running successfully on Railway!'
    };
  }

  @Get('api/test')
  getApiTest(): object {
    return {
      message: 'API endpoint working!',
      data: {
        framework: 'NestJS',
        deployment: 'Railway',
        version: '1.0.0'
      }
    };
  }
}
