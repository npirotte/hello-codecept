import { Args, ID, Resolver, Query, Mutation, Subscription } from "@nestjs/graphql";
import { CreateTodoInput } from "./models/createTodoInput";
import { ResolveTodoInput } from "./models/ResolveTodoInput";
import { Todo } from "./models/todo.model";
import { TodosService } from "./todos.service";
import { PubSub } from "graphql-subscriptions";

const pubSub = new PubSub();

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private todoService: TodosService) {}

  @Query(() => Todo)
  async todo(@Args("id", { type: () => ID }) id: string) {
    const todo: Todo = await this.todoService.findById(id);

    if (!todo) {
      throw new Error(`Todo ${id} not found.`);
    }

    return todo;
  }

  @Query(() => [Todo])
  async todos() {
    return this.todoService.findAll();
  }

  @Mutation(() => Todo)
  async createTodo(
    @Args({ name: "input", type: () => CreateTodoInput }) input: CreateTodoInput
  ) {
    const todo = await this.todoService.createTodo(input.title);
    pubSub.publish("todoAdded", { todoAdded: this.todoService.findAll() });

    return todo;
  }

  @Mutation(() => Todo)
  async resolveTodo(
    @Args({ name: "input", type: () => ResolveTodoInput })
    input: ResolveTodoInput
  ) {
    return this.todoService.resolveTodo(input.id);
  }

  @Subscription(() => [Todo])
  todoAdded() {
    return pubSub.asyncIterator("todoAdded");
  }
}
