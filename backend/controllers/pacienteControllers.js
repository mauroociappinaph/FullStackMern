import Paciente from "../models/Pacientes.js";

const agregarPaciente = async (req, res) => {
const paciente = new Paciente(req.body);
try {
    
} catch (error) {
    console.log(error);
}
}

const obtenerPacientes = async (req, res) => {
    
}

export {
    agregarPaciente,
    obtenerPacientes
}