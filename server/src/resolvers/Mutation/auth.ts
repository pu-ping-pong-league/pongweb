import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import * as _ from "lodash";
import * as EmailValidator from "email-validator";
import { Context } from "../../utils";
import * as nodemailer from "nodemailer";
import { printIntrospectionSchema } from "graphql";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
  }
});
const EMAIL_SECRET = "asdf1093KMnzxcvnkljvasdu09123nlasdasdf";

export const auth = {
  signup: async (parent, args, ctx: Context) => {
    if (!EmailValidator.validate(args.email)) {
      throw new Error(`${args.email} is not a valid email.`);
    }
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser({
      data: {
        email: args.email,
        name: args.name,
        password: password,
        residentialcollege: args.residentialcollege,
        stats: {
          create: [
            {
              playeremail: args.email,
              wins: 0,
              losts: 0,
              totalsetlost: 0,
              totalsetwon: 0,
              netwins: 0,
              rating: 1000,
              fixture: { connect: { id: "cjl6wcei8000l0807p8tcm3bu" } },
              season: { connect: { season: 1 } }
            }
          ]
        },
        season: { connect: { season: 1 } },
        fixture: { connect: { id: "cjl6wcei8000l0807p8tcm3bu" } }
      }
    });
    const emailtoken = jwt.sign({ userId: user.id }, EMAIL_SECRET, {
      expiresIn: "1d"
    });
    console.log("emailToken" + emailtoken);
    const url = `http://localhost:3001/verify/${emailtoken}`;

    (async () =>
      transporter.sendMail({
        to: args.email,
        subject: "Princeton Ping Pong League Confirm Email",
        html: `Hi! Thank you for signing up for Princeton Ping Pong Leauge! Please click this link to confirm your email: <a href="${url}">${url}</a>`
      }))();

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    };
  },

  async login(parent, { email, password }, ctx: Context, info) {
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }
    if (!user.confirmed) {
      throw new Error("Please confirm your email");
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    };
  },
  async adminlogin(parent, { email, password }, ctx: Context, info) {
    const user = await ctx.db.query.admin({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    };
  },
  async adminsignup(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createAdmin({
      data: { ...args, password }
    });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    };
  }
  // async createTweet(parent, args, ctx: Context, info) {
  //   const tweet = await ctx.db.mutation.createTweet(
  //     {
  //       data: {
  //         text: args.text,
  //         author: {
  //           connect: {
  //             email: args.email // make sure you use your created user's email!
  //           }
  //         }
  //       }
  //     },
  //     info
  //   );

  //   return tweet;
  // }
};
