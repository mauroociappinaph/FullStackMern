import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/alerta";
function Registrar() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    if (password !== repetirPassword) {
      setAlerta({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }
    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña debe tener al menos 6 caracteres",
        error: true,
      });
      return;
    }

    setAlerta({});

    //!Crear el usuario en la API
  };
  const { msg } = alerta;
  return (
    <>
      <div>
        <h1 className="text-orange-400 font-black text-5xl   ">
          Regístrate y Empieza a Administra{" "}
          <span className="text-black"> tus Pacientes </span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-500 font-bold text-xl md:text-left mb-1 md:mb-0 pr-4">
              Nombre:
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 mt-3 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
              id="grid-first-name"
              type="text"
              placeholder="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-500 font-bold text-xl md:text-left mb-1 md:mb-0 pr-4">
              Email:
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 mt-3 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
              id="grid-first-name"
              type="email"
              placeholder="correo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-500 font-bold text-xl md:text-left mb-1 md:mb-0 pr-4">
              Password:
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 mt-3 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
              id="grid-first-name"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-500 font-bold text-xl md:text-left mb-1 md:mb-0 pr-4">
              Repite tu Password:
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 mt-3 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
              id="grid-first-name"
              type="password"
              placeholder="repite tu password"
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 w-full py-2 rounded-md text-white font-bold uppercase m-1 hover:cursor-pointer"
            value="Registrar"
          />
        </form>
        <nav className="mt-4 lg:flex lg:justify-items-center  ">
          <Link
            to="/"
            className="block text-center text-gray-400 font-bold text-base md:text-left mb-1 md:mb-0 pr-4"
          >
            Inicia sesión
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Registrar;
