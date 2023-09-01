function Login() {
  return (
    <>
      <div>
        <h1 className="text-orange-400 font-black text-3xl   ">
          Inicia sesión y Administra tus{" "}
          <span className="text-black"> Pacientes </span>
        </h1>
      </div>
      <div>
        <form>
          <div className="my-5">
            <label className="block text-gray-500 font-bold text-xl md:text-left mb-1 md:mb-0 pr-4">
              Email:
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 mt-3 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
              id="grid-first-name"
              type="text"
              placeholder="correo@correo.com"
            />
          </div>
          <div className="my-5">
            <label className="block text-gray-500 font-bold text-xl md:text-left mb-1 md:mb-0 pr-4">
              Password:
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 mt-3 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
              id="grid-first-name"
              type="password"
              placeholder="password"
            />
          </div>
          <input
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 w-full py-2 rounded-md text-white font-bold uppercase m-1 hover:cursor-pointer"
            value="Iniciar Sesión"
          />
        </form>
      </div>
    </>
  );
}

export default Login;
