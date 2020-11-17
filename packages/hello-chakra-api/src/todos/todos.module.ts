import { Module } from "@nestjs/common";
import { TodosControler } from "./todos.controler";
import { TodosResolver } from "./todos.resolvers";
import { TodosService } from "./todos.service";

@Module({
  providers: [TodosService, TodosResolver],
  controllers: [TodosControler]
})
export class TodosModule {}
