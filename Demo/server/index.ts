import { addInputType } from "../common/types";
import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
const appRouter = router({
  addTwoNumbers: publicProcedure.input(addInputType).query(async (opts) => {
    const username = opts.ctx.username;
    const number_1 = opts.input.number_1;
    const number_2 = opts.input.number_2;
    // const test = opts.req.headers.get("authorization");
    const result = number_1 + number_2;

    return {
      result,
      username,
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
  createContext: (opts) => {
    let authHeader = opts.req.headers["authorization"];
    console.log("Header", authHeader);
    //verify jwt & return Username
    return {
      username: "123",
    };
  },
});
server.listen(3000);
export type AppRouter = typeof appRouter;
