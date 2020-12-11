// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("https://example.com/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
