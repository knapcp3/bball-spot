import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
