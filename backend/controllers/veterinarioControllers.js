import Veterinario from "../models/Veterinario.js";

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
  res.json({ msg: "Mostrando perfil ..." });
};

const confirmar = (req, res) => {
  res.json({ msg: "Confirmando cuenta ..." });
  console.log(req.params.token);
};

export { registrar, perfil, confirmar };
