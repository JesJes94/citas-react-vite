const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, fecha, email, sintomas, id} = paciente;

  return (
    <div className="mt-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-indigo-600 uppercase"> 
        Nombre: {''}
          <span className="font-normal normal-case text-black">
            {nombre}
          </span>
      </p>

      <p className="font-bold mb-3 text-indigo-600 uppercase"> 
        Propietario: {''}
          <span className="font-normal normal-case text-black">
            {propietario}
          </span>
      </p>

      <p className="font-bold mb-3 text-indigo-600 uppercase"> 
        Correo: {''}
          <span className="font-normal normal-case text-black">
            {email}
          </span>
      </p>

      <p className="font-bold mb-3 text-indigo-600 uppercase"> 
        Fecha: {''}
          <span className="font-normal normal-case text-black">
            {fecha}
          </span>
      </p>

      <p className="font-bold mb-3 text-indigo-600 uppercase"> 
        Sintomas: {''}
          <span className="font-normal normal-case text-black">
            {sintomas}
          </span>
      </p>

      <div className="flex gap-20 mt-8">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"  
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
          onClick={() => eliminarPaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
