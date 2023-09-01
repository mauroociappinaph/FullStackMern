import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <h1>Plataforma de Pacientes para Veterinarios</h1>
      <Outlet />
     
    </>
  );
};

export default AuthLayout;
