import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarID.js";
import emailRegistro from "../helpers/emailRegistro.js";

const registrar = async (req, res) => {
  const { email, nombre} = req.body;

  //!Prevenir un usuario registrado
  const existeUsuario = await Veterinario.findOne({ email });

  if (existeUsuario) {
    const error = new Error("El usuario ya existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    //! Guardar veterinario
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    //! Enviar Email
    emailRegistro({
      email,
      nombre,
      token: veterinarioGuardado.token,
    });

    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error.response);
  }
};

const perfil = (req, res) => {
  const { veterinario } = req;
  res.json({ perfil: veterinario });
};

const confirmar = async (req, res) => {
  const { token } = req.params;
  const usuarioConfirmado = await Veterinario.findOne({ token });
  if (!usuarioConfirmado) {
    const error = new Error("Token no valido");
    return res.status(400).json({ msg: error.message });
  }

  try {
    usuarioConfirmado.confirmado = true;
    usuarioConfirmado.token = null;
    await usuarioConfirmado.save();
    res.json({ msg: "Usuario confirmado" });
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Veterinario.findOne({ email });
    if (!usuario) {
      throw new Error("El usuario no existe");
    }
    if (!usuario.confirmado) {
      throw new Error("Tu usuario no fue confirmado");
    }
    if (await usuario.comprobarPassword(password)) {
      console.log("Contraseña correcta");
      const token = generarJWT(usuario.id); // Generar el token
      res.status(200).json({ msg: "Usuario autenticado correctamente", token });
    } else {
      console.log("Contraseña incorrecta");
      res.status(403).json({ msg: "Contraseña incorrecta" });
    }
  } catch (error) {
    res.status(403).json({ msg: error.message });
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;
  const existeVeterinario = await Veterinario.findOne({ email });
  if (!existeVeterinario) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    existeVeterinario.token = generarId();
    await existeVeterinario.save();
    res.json({ msg: "Hemos enviado un correo para restablecer la contraseña" });
  } catch (error) {
    console.log(error);
  }
};

const comprobarToken = async (req, res) => {
  const { token } = req.params;
  const tokenValido = await Veterinario.findOne({ token });
  if (!tokenValido) {
    const error = new Error("Token no valido");
    return res.status(400).json({ msg: error.message });
  } else {
    res.json({ msg: "Token valido" });
  }
};
const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const veterinario = await Veterinario.findOne({ token });
  if (!veterinario) {
    const error = new Error("Hubo un error");
    return res.status(400).json({ msg: error.message });
  }
  try {
    veterinario.token = null;
    veterinario.password = password;
    res.json({ msg: "Password modificado correctamente" });
    console.log(veterinario);
  } catch (error) {
    console.log(error);
  }
};
export {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
};
