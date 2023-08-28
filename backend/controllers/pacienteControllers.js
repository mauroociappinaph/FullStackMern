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

const obtenerPaciente = async (req, res) => {
  console.log(req.params.id);
  const paciente = await Paciente.findById(req.params.id).where("veterinario", req.veterinario);
  if (!paciente) {
    res.status(404).json({ msg: "No encontrado" });
  } else if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
    res.status(401).json({ msg: "No autorizado" });
  } else {
    res.json(paciente);
  }
};

const actualizarPaciente = async (req, res) => {
  const { id } = req.params;
  const paciente = await Paciente.findById(id);
  if (!paciente) {
    res.status(404).json({ msg: "No encontrado" });
  } else if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
    res.status(401).json({ msg: "Acción no válida" });
  } else {
    // Implementar la lógica de actualización aquí
   paciente.nombre = req.body.nombre;
   try {
    const pacienteActualizado = await paciente.save();
    res.json(pacienteActualizado);
   } catch (error) {
    console.log(error);
   }
  }
};

const eliminarPaciente = async (req, res) => {};

export {
  agregarPaciente,
  obtenerPacientes,
  obtenerPaciente,
  actualizarPaciente,
  eliminarPaciente,
};
