import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  async findAll(data): Promise<any> {
    await console.log("hello");
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname, '../src/data/books.json'), 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          console.log('-------------------\n', data, '\n----------------------');
          resolve(JSON.parse(data));
        }
      });
    });
  }
}
