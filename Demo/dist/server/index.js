"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../common/types");
const trpc_1 = require("./trpc");
const standalone_1 = require("@trpc/server/adapters/standalone");
const appRouter = (0, trpc_1.router)({
    addTwoNumbers: trpc_1.publicProcedure.input(types_1.addInputType).query((opts) => __awaiter(void 0, void 0, void 0, function* () {
        const username = opts.ctx.username;
        const number_1 = opts.input.number_1;
        const number_2 = opts.input.number_2;
        // const test = opts.req.headers.get("authorization");
        const result = number_1 + number_2;
        return {
            result,
            username,
        };
    })),
});
const server = (0, standalone_1.createHTTPServer)({
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
