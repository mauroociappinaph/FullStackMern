import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ConfirmarCuenta = () => {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/veterinarios/confirmar/${id}`;
        console.log(url);
        
        // {const { data } = await axios(url);} //
        // {console.log(data);}//
      } catch (error) {
        console.log(error);
      }
    };
    confirmarCuenta();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-orange-400 font-black text-5xl   ">
          Confirmar tu <span className="text-black"> cuenta </span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white"></div>
    </>
  );
};

export default ConfirmarCuenta;
