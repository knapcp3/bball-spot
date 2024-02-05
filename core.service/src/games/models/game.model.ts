import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Location } from 'src/locations/models/location.model';

@ObjectType()
export class Game {
  @Field(() => ID)
  id: string;

  @Field(() => Location)
  location: Location;
}
