import Paciente from "../models/Pacientes.js";

const agregarPaciente = async (req, res) => {
  const paciente = new Paciente(req.body);
  paciente.veterinario = req.veterinario._id;
  try {
    const pacienteAlmacenado = await paciente.save();
    res.json(pacienteAlmacenado);
  } catch (error) {
    console.log(error);
  }
};
const obtenerPacientes = async (req, res) => {
  const paciente = await Paciente.find()
    .where("veterinario")
    .equals(req.veterinario);
  res.json(paciente);
};

const obtenerPaciente = async (req, res) => {
  console.log(req.params.id);
  const paciente = await Paciente.findById(req.params.id).where("veterinario");
  if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
    res.json({ msg: "No autorizado" });
    return res.status(401).json({ msg: "No autorizado" });
    if (paciente) {
      res.json(paciente);
    }
  }
};

const actualizarPaciente = async (req, res) => {};

const eliminarPaciente = async (req, res) => {};

export {
  agregarPaciente,
  obtenerPacientes,
  obtenerPaciente,
  actualizarPaciente,
  eliminarPaciente,
};
