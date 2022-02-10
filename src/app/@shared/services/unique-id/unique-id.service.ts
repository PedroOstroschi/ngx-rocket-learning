import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    this.verifyPrefix(prefix);

    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;

    return `${prefix}-${uniqueId}`;
  }

  private verifyPrefix(prefix: string): void {
    const prefixIsEmpty = !prefix;

    if (prefixIsEmpty) {
      throw Error('Prefix can not be empty.');
    }
  }

  private generateUniqueId(): string {
    return uuidV4();
  }

  public getNumberOfGeneratedId(): number {
    return this.numberOfGeneratedIds;
  }
}
