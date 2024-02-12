import nodemailer from "nodemailer";
import {
  smtpServer,
  smtpPort,
  smtpUser,
  smtpPassword,
} from "../lib/smtp.vars.js";

const sendingEmail = async (token, email) => {
  console.log("🚀 ~ token:", token);
  console.log("🚀 ~ process.env.SMTP_SERVER:", smtpServer);

  const transporter = nodemailer.createTransport({
    host: smtpServer,
    port: smtpPort,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const info = await transporter.sendMail({
    from: "ctsskiathos@gmail.com",
    to: email,
    subject: "Email confirmation",
    text: "Please click the link",
    html: `<h3>Welcome to our Weedout App</h3>
        <p>To verify your email please click on the following link:</p>
        <a href="http://localhost:5173/confirmedemail/${token}">verify my email</a>`,
  });
  console.log("Message sent: %s", info.messageId);
};

export default sendingEmail;
