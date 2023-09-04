

const alerta = ({ alerta }) => {
  return (
     <div className={`${alerta.error ? 'from-red-500' : 'to-red-500'}`}>
      {alerta.msg}
    </div>
  )
}

export default alerta
