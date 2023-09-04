

const alerta = ({ alerta }) => {
  return (
     <div className={`${alerta.error ? 'from-red-400 to-red-500' : 'from-orange-400 to-orange-500'} bg-gradient-to-r text-center text-white p-3 uppercase font-bold rounded-md text-xs mt-5 mb-5`}>
      {alerta.msg}
    </div>
  )
}

export default alerta
