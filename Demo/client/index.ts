import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
      async headers() {
        return {
          Authorization: `Bearer 123`,
        };
      },
    }),
  ],
});
async function main() {
  const number_1 = 100;
  const number_2 = 300;
  const res = await trpc.addTwoNumbers.query({ number_1, number_2 });
  console.log(
    `${number_1} + ${number_2} = ${res.result} with username ${res.username}      `
  );
}
main();
trpc.addTwoNumbers
  .query({
    number_1: 10,
    number_2: 20,
  })
  .then((res) => console.log(res.username, res.result));
