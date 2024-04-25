import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

// const observable = new Observable<number>((observer) => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
// });


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('books')

  getBooks(): any{
    const data = this.appService.fetchDataFromThirdPartyAPIAndStoreInDatabase();
    return data;
  }
}
