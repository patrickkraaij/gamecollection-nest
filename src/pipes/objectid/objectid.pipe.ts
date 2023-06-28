import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class ObjectidPipe implements PipeTransform {
  transform(value: any) {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new HttpException('Invalid ObjectId', HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
