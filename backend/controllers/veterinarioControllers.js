import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/generarJWT.js";

const registrar = async (req, res) => {
  const { email } = req.body;

  //Prevenir un usuario registrado
  const existeUsuario = await Veterinario.findOne({ email });

  if (existeUsuario) {
    const error = new Error("El usuario ya existe");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();
    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error);
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

const olvidePassword = (req, res) => {
  const { email } = req.body;
};

const comprobarToken = (req, res) => {
  const { token } = req.params;
};
const nuevoPassword = (req, res) => {
  const { token } = req.params;
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
