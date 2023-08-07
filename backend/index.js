import express from "express";

const app = express();

app.use("/", (req, res) => {
res.send("Hola Mundo") ;

});

app.listen(4000, () => {
  console.log("Servidor corriendo en puerto 4000. Happy Coding!");
});
