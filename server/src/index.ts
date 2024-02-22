import { Elysia, t } from "elysia";

const app = new Elysia()
  .get("/", () => Bun.file('./public/index.html'))
  .get('/:id', ({ params: { id } }) => typeof (id), {
    params: t.Object({
      id: t.Numeric()
    })
  })
  .listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app