import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { firstValueFrom } from "rxjs";


@WebSocketGateway({
    // cors: {
    //     origin: '*'
    // },
    // namespace: '/books'
})

export class booksGateway {

    @WebSocketServer() server: Server;

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

    @SubscribeMessage('books')
    async getBooks(){
        console.log('ana hna\n');

        try {
            const books = await firstValueFrom(this.client.send<any, any>('fetchBooks', {}));
    
            console.log('--------------\n', books, '\n----------\n');
    
            return books;
            // Assuming books is an array of book objects received from the third-party API
    
            //emit l front bli r bdat update
            //this.server.emit("uplaod", message);
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
                  //this.server.emit("uplaod", message);
          //        sleep 2s,
          // }
          //emit l front u finished update the database
          //this.server.emit("uplaod", message);
        } catch (error) {
          console.error('Error fetching or storing data:', error);
        }
    }

}