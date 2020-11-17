import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class ResolveTodoInput {
  @Field(() => ID)
  id: string;
}
