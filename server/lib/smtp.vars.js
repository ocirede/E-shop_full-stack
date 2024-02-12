import "dotenv/config";

const smtpServer = process.env.SMTP_SERVER;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;

export {smtpServer, smtpPort, smtpUser, smtpPassword};