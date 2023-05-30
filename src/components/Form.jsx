import { Fragment, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import PropTypes  from "prop-types"; 


const  Form = ( {createCita}) => {

        const [error, setError] = useState(false)
        const [cita, setCita] = useState({

          mascota: "",
          dueño: "",
          fecha: "",
          hora: "",
          descripcion: "",
        })



        const handelChange = e => {
          setCita({
                    ...cita,
                      [e.target.name]: e.target.value
                    })
                          }

        const {mascota, dueño, fecha, hora, descripcion} = cita 

        const submitCita = e => {
            e.preventDefault() 

            if(mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' ||
                   hora.trim() === '' || descripcion.trim() === ''){
                  setError(true) 
                  return;
      
            }
            setError(false) 

            cita.id= uuidv4()
            
            createCita(cita)

            setCita({
              mascota: '',
              dueño: '',
              fecha: '',
              hora: '',
              descripcion: '',
            })


        }




      return (
          
        <Fragment>
          <h1>Crear Cita</h1>

                {error ? <p className="alerta-error"> Todos los campos son obligatorios</p> : null}

          <form onSubmit={submitCita}>
                <label htmlFor="">Nombre Mascota</label>
                <input
                    type="text" 
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handelChange}
                    value={mascota}
                />
                <label htmlFor="">Nombre Dueño</label>
                <input
                    type="text" 
                    name="dueño"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={handelChange}
                    value={dueño}


                />
                <label htmlFor="">Fecha</label>
                <input
                    type="date" 
                    name="fecha"
                    className="u-full-width"
                    onChange={handelChange}
                    value={fecha}


                />
                 <label htmlFor="">Hora</label>
                <input
                    type="time" 
                    name="hora"
                    className="u-full-width"
                    onChange={handelChange}
                    value={hora}

                />
                 <label htmlFor="">Sintomas</label>
                <textarea 
                    name="descripcion" 
                    className="u-full-width"
                    placeholder="Descripcion..."
                    onChange={handelChange}
                    value={descripcion}>
                  

                </textarea>
                  <button
                  type="submit"
                  className="u-full-width button-primary"> Guardar
                  </button>
            </form>
        </Fragment>
      )
    }

    Form.propTypes = {
      createCita: PropTypes.func.isRequired
    }
    export default Form