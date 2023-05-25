import { Fragment, useState } from "react"
const  Form = () => {

        const [cita, setCita] = useState({

          mascota: "",
          dueño: "",
          fecha: "",
          hora: "",
          descripcion: "",
        })


        const handelChange = () => {
          console.log('Escribiendo...')
        }

      return (
          
        <Fragment>
          <h1>Crear Cita</h1>

          <form>
                <label htmlFor="">Nombre Mascota</label>
                <input
                    type="text" 
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handelChange}
                />
                <label htmlFor="">Nombre Dueño</label>
                <input
                    type="text" 
                    name="dueño"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={handelChange}

                />
                <label htmlFor="">Fecha</label>
                <input
                    type="date" 
                    name="fecha"
                    className="u-full-width"
                    onChange={handelChange}

                />
                 <label htmlFor="">Hora</label>
                <input
                    type="time" 
                    name="hora"
                    className="u-full-width"
                    onChange={handelChange}

                />
                 <label htmlFor="">Sintomas</label>
                <textarea 
                    name="descripcion" 
                    className="u-full-width"
                    placeholder="Descripcion..."
                    onChange={handelChange}>

                </textarea>
                  <button
                  type="submit"
                  className="u-full-width button-primary"> Guardar
                  </button>
            </form>
        </Fragment>
      )
    }
    
    export default Form