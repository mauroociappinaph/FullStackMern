import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/alerta";
import TogglePasswordButton from "../components/togglePasswordButton";
import axios from "axios";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepetirPasswordVisible, setIsRepetirPasswordVisible] =
    useState(false);
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
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
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios`;
      const data = await axios.post(URL, { nombre, email, password });
      setAlerta({
        msg: "Usuario registrado, revisa tu email",
        error: false,
      });
      console.log(data);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible); //! Cambiamos el estado de la contraseña principal
  };

  // !Manejador para el botón de visibilidad de la contraseña repetida
  const handleRepetirPasswordToggle = () => {
    setIsRepetirPasswordVisible(!isRepetirPasswordVisible); // !Cambiamos el estado de la contraseña repetida
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
            <div className="flex">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 mt-3 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                id="grid-first-name"
                type={isPasswordVisible ? "text" : "password"} //
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TogglePasswordButton
                isPasswordVisible={isPasswordVisible} // Pasamos el estado a TogglePasswordButton
                onToggle={handlePasswordToggle} // Pasamos el manejador de clic
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-500 font-bold text-xl md:text-left mb-1 md:mb-0 pr-4">
              Repite tu Password:
            </label>
            <div className="flex">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 mt-3 mb-3 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                id="grid-first-name"
                type={isRepetirPasswordVisible ? "text" : "password"}
                placeholder="repite tu password"
                value={repetirPassword}
                onChange={(e) => setRepetirPassword(e.target.value)}
              />
              <TogglePasswordButton
                isPasswordVisible={isRepetirPasswordVisible} // Pasamos el estado a TogglePasswordButton
                onToggle={handleRepetirPasswordToggle} //
              />
            </div>
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
};

export default Registrar;


// Martag1959