import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-4 gap-24 p-4 items-center">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
