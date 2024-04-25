import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private logger = new Logger('Appcontroller');

  // @Get()

  @MessagePattern('fetchBooks')
  getHello(data: any): Promise<any>  {
    this.logger.log("hello");
    return this.appService.findAll(data);
  }
}
