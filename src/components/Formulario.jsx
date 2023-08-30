import { useState, useEffect } from "react"
import Alerta from "./Alerta";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [alerta, setAlerta] = useState({});

  useEffect( () => {
      if(Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setFecha(paciente.fecha);
        setSintomas(paciente.sintomas);
      }
    }
  , [paciente])


  const generarId = () => {
    const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    return id;
  }

  const handleSubmit = e => {
    e.preventDefault();

    //Validación de formulario

    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      setAlerta({msg:'Todos los campos son obligatorios', error:true});
      return
    }

    setAlerta({});

    //Objeto de Paciete

    const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
    }

    if (paciente.id) {
      //Editando el registro

      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados);
      setPaciente({});
    }
    else {
      //Nuevo registro

      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    } 

    //Reiniciando el formulario.

    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  const {msg} = alerta;

  return (
    <div className=" mx-3 md:w-1/2 lg:w-2/5">

      <h2 className=" font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>

      <p className=" text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className=" text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        {
          msg && <Alerta alerta={alerta}/>
        }

        <div className=" mb-5">
          <label htmlFor="nombre" className=" block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input  
            id="nombre"
            type="text" 
            placeholder="Nombre de la Mascota"
            className=" border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="propietario" className=" block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input  
            id="propietario"
            type="text" 
            placeholder="Nombre del Propietario"
            className=" border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="email" className=" block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input  
            id="email"
            type="email" 
            placeholder="Email del Propietario"
            className=" border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="fecha" className=" block text-gray-700 uppercase font-bold">
            Fecha
          </label>
          <input  
            id="fecha"
            type="date" 
            className=" border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="sintomas" className=" block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className=" border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md h-40"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />
        </div>

        <div className=" flex md:justify-end">
          <input 
            type="submit"
            value={`${paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}`}
            className=" bg-indigo-600 hover:bg-indigo-700 w-full md:w-1/2 p-3 text-white uppercase font-bold rounded-lg cursor-pointer transition-colors" 
          />
        </div>
      </form>
    </div>
  )
}

export default Formulario