import { Query, Resolver } from '@nestjs/graphql';
import { LocationsService } from './locations.service';
import { Location } from './models/location.model';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private locationsService: LocationsService) {}

  @Query(() => [Location], { name: 'locations' })
  async getAllLocations(): Promise<Location[]> {
    return this.locationsService.getAll();
  }
}
