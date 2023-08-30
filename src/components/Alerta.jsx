const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'bg-red-600' : 'bg-indigo-600'} text-center p-3 rounded-lg uppercase text-white 
    font-bold text-base mb-8`}>
      {alerta.msg}
    </div>
  )
}

export default Alerta
