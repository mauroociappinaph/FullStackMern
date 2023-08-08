import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

const app = express();
dotenv.config();
conectarDB();



app.use("/", (req, res) => {
  res.send("Hola Mundo");
});

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}. Happy Coding!`);
});
