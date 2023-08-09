import Jwt from "jsonwebtoken";
import Veterinario from "../models/Veterinario.js";
const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = Jwt.verify(token, process.env.JWT_SECRET);
      req.veterinario = await Veterinario.findById(decoded.id).select(
        "-password -confirmado -token"
      );
      return next();
    } catch (error) {
      const e = new Error("Token no valido");
      return res.status(403).json({ msg: e.message });
    }
  }

  if (!token) {
    const error = new Error("Token no valido o inexistente");
    res.status(403).json({ msg: error.message });
  }
  next();
};

export default checkAuth;

/*
Este fragmento de código define una función de middleware asincrónica llamada
checkAuth. Se utiliza para autenticar las solicitudes en una API.
La función verifica si la solicitud tiene un encabezado de autorización con un token Bearer.
Si lo tiene, verifica el token utilizando una biblioteca JWT, recupera la información
del usuario de una base de datos y la adjunta al objeto de solicitud. 
Luego, llama a la función next para pasar el control al siguiente middleware.
Si el token es inválido o hay un error durante el proceso de verificación, 
devuelve una respuesta 403 Forbidden con un mensaje de error.
Si no hay ningún token en el encabezado de la solicitud, devuelve una respuesta 
403 Forbidden con un mensaje de error diferente.
Finalmente, llama a la función next para pasar el control al siguiente middleware 
si no se cumplen ninguna de las condiciones anteriores.
*/