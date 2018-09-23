import { Context, getUserId } from "../../utils";
import * as nodemailer from "nodemailer";
import * as jwt from "jsonwebtoken";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
  }
});
const PASSWORD_SECRET = "adnaodhoawjhdaoxjaowd12313";
export default {
  forgotpassword: async (parent, args, ctx: Context, info) => {
    const user = await ctx.db.query.user({
      where: { email: args.email }
    });
    const emailtoken = jwt.sign({ userId: user.id }, PASSWORD_SECRET, {
      expiresIn: "1d"
    });
    console.log(user);
    console.log("emailToken" + emailtoken);
    const url = `http://localhost:3001/password/${emailtoken}`;

    (async () =>
      transporter.sendMail({
        to: args.email,
        subject: "Princeton Ping Pong League Password Reset Email",
        html: `Hi ${
          user.name
        }! Please click this link to change yourpassword: <a href="${url}">${url}</a>`
      }))();
    return await ctx.db.query.user({
      where: { email: args.email }
    });
  }
};
