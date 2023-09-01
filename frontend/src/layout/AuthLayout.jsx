import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-32 p-4">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
