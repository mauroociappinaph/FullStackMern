import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); 



const emailRegistro = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
};

export default emailRegistro;
