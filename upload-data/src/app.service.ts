import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Observable } from 'rxjs';
import { Model } from 'mongoose';
import { Book, BookDocument } from './schema/books.schema';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  private client: ClientProxy;

  //@InjectModel(Book.name) private readonly bookModel: Model<BookDocument>

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 9090, // Port of the third-party API microservice
      },
    });
  }


  async fetchDataFromThirdPartyAPIAndStoreInDatabase(): Promise<void> {
    try {
        const books = await firstValueFrom(this.client.send<any, any>('fetchBooks', {}));

        console.log('--------------\n', books, '\n----------\n');

        return books;
        // Assuming books is an array of book objects received from the third-party API

        //emit l front bli r bdat update
        //delete all the database we have

        // Save each book to the database
        //start updating database
      //   for (const book of books) {
      //       const createdBook = new this.bookModel({
      //       bookId: book.id, // Assuming the id property from the third-party API represents bookId
      //       title: book.title,
      //       author: book.author,
      //       genre: book.genre,
      //       publishedYear: book.publishedYear,
      //       });
      //       await createdBook.save();
      //       //emit l front progress 10% 20% ......
      // }
      //emit l front u finished update the database
    } catch (error) {
      console.error('Error fetching or storing data:', error);
    }
  }


  // getHello(): Observable<string> {
  //   return this.client.send<string, string>('hello', "helloooooo");
  // }

  // getBooks(): Observable<string> {
  //   // Subscribe to the observable and return the received data
  //   return new Observable<string>((observer) => {
  //     const bookObservable = this.getHello();
  //     bookObservable.subscribe({
  //       next: (data) => {
  //         console.log('Received data:', data);
  //         this.handleData(data);
  //         observer.next(data); // Forward the received data to the observer
  //       },
  //       error: (error) => {
  //         console.error('Error:', error);
  //         observer.error(error); // Forward the error to the observer
  //       },
  //       complete: () => {
  //         console.log('Observation complete');
  //         observer.complete(); // Signal that the observation is complete
  //       },
  //     });
  //   });
  // }

  // async handleData(book){
  //   console.log('----------------\n', book, '\n------------------------------\n');
  // }

}
