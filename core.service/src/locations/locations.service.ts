import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationsService {
  getAll(): any[] {
    return [
      {
        id: '1',
        name: 'Location 1',
      },
      {
        id: '2',
        name: 'Location 2',
      },
      {
        id: '3',
        name: 'Location 3',
      },
    ];
  }
}
