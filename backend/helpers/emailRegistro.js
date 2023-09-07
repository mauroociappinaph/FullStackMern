import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const emailRegistro = async (datos) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const { email, nombre, token } = datos;

  const emailText = `Hola ${nombre} comprueba tu cuenta en FullStackMern`;
  const emailHtml = `
    <p>Hola ${nombre} comprueba tu cuenta en FullStackMern</p>
    <p>Presiona este 
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">enlace</a> para confirmar tu cuenta</p>
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
  `;

  const emailOptions = {
    from: "FullStack Mern",
    to: email,
    subject: "Confirma tu cuenta",
    text: emailText,
    html: emailHtml,
  };

  const info = await transporter.sendMail(emailOptions);
  console.log("mensaje enviado: %s", info.messageId);
};

export default emailRegistro;
