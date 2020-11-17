import { Injectable } from "@nestjs/common";
import { Todo } from "./models/todo.model";
import { v1 } from "uuid";

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [];

  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

  async findById(id: string): Promise<Todo> {
    return this.todos.find((todo) => todo.id === id);
  }

  async createTodo(title: string): Promise<Todo> {
    const id = v1();

    const todo: Todo = {
      title,
      id,
      createOn: new Date().getTime(),
      doneOn: null
    };

    this.todos.push(todo);

    return todo;
  }

  async resolveTodo(id: string): Promise<Todo> {
    const now = new Date().getTime();
    const todo = await this.findById(id);
    todo.doneOn = now;

    return todo;
  }
}
