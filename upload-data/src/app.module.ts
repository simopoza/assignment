import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schema/books.schema';

//MongooseModule.forRoot('mongodb+srv://mohammed:simopoza12345*@atlascluster.zbik7cq.mongodb.net/')
// MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
