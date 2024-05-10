import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  arrayToString(messages: string[]): string {
    return messages.join('<br />');
  }
}
