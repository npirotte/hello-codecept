import { Field, Int, ObjectType, ID } from "@nestjs/graphql";

@ObjectType({
  description: "A todo element"
})
export class Todo {
  @Field(() => ID)
  public id: string;

  @Field({ nullable: true })
  public title: string;

  @Field(() => Int, { nullable: true })
  public doneOn: number;

  @Field(() => Int)
  public createOn: number;
}
