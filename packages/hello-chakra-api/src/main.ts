import { NestFactory } from "@nestjs/core";
import * as proxy from "express-http-proxy";
import { AppModule } from "./app.module";

const unless = function(middleware, ...paths) {
  return function(req, res, next) {
    const pathCheck = paths.some(path => req.path.startsWith(path));
    pathCheck ? next() : middleware(req, res, next);
  };
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(unless(proxy("http://localhost:1234"), "/graphql", "/rest"));
  await app.listen(3000);
}
bootstrap();
