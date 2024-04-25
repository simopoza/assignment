import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop()
  bookId: number;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  genre: string;

  @Prop()
  publishedYear: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

export interface BookDocument extends Book, Document {}
