import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateTodoInput } from "./models/createTodoInput";
import { TodosService } from "./todos.service";

@Controller("/rest/todos")
export class TodosControler {
  constructor(public todosService: TodosService) {}

  @Get()
  async getTodos() {
    return this.todosService.findAll();
  }

  @Get(":id")
  async getTodo(@Param("id") id: string) {
    return this.todosService.findById(id);
  }

  @Post()
  async createTodo(@Body() body: CreateTodoInput) {
    return this.todosService.createTodo(body.title);
  }
}
