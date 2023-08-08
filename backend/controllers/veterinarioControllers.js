const registrar = (req , res) => {
    res.send("desde API/VETERINARIOS");
}

const perfil = (req , res) => {
    res.send("desde API/VETERINARIOS/perfil");
}

export {
    registrar,
    perfil
}