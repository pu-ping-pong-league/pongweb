import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "./generated/prisma";
import { resolvers, fragmentReplacements } from "./resolvers";
import { Context } from "./utils";
import * as express from "express";
import * as jwt from "jsonwebtoken";

const db = new Prisma({
  fragmentReplacements,
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
  debug: true, // log all GraphQL queries & mutations sent to the Prisma API
  secret: process.env.PRISMA_SECRET // only needed if specified in `database/prisma.yml` (value set in `.env`)
});

const EMAIL_SECRET = "asdf1093KMnzxcvnkljvasdu09123nlasdasdf";
const app = express();

app.get("/confirmation/:token", async (req, res) => {
  try {
    const userId = jwt.verify(req.params.token, EMAIL_SECRET);
    console.log(userId);
    async (parent, args, ctx: Context, info) => {
      return await ctx.db.mutation.updateUser(
        {
          data: { confirmed: true },
          where: { id: "cjlykt4h701ud0807s4gahuwi" }
        },
        info
      );
    };
  } catch (e) {
    res.send("error");
  }
  return res.redirect("http://localhost:3001/");
});

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db
  })
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
