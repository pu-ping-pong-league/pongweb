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
    // validate input length
    var maxLength = 50;
    if (args.email.length > maxLength)
      throw new Error('Email exceeds max length of 50 characters.');
    if (args.password.length > maxLength)
      throw new Error('Password exceeds max length of 50 characters.');
    if (args.name.length > maxLength)
      throw new Error('Full name exceeds max length of 50 characters.');

    // validate email
    if (!EmailValidator.validate(args.email))
      throw new Error(`${args.email} is not a valid email.`);
    var email_split = args.email.split("@")
    if (email_split[email_split.length - 1] != "princeton.edu")
      throw new Error('Emails is not a valid princeton email.');
    const users = await ctx.db.query.users({
      where: { email: args.email }
    });
    if (users.length != 0)
      throw new Error(`${args.email} is already used.`);

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
              season: { connect: { season: 1 } }
            }
          ]
        },
        season: { connect: { season: 1 } }
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
    if (!valid) throw new Error("Invalid password");

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
};
