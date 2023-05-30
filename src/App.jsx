import { Fragment, useEffect, useState } from "react";
import Form from './components/Form'
import Cita from './components/Cita'


function App() {

      let citasStart = JSON.parse(localStorage.getItem('citas'));
      if(!citasStart){
        citasStart = [];
      }
      
     const [citas, setCitas] = useState(citasStart)

      useEffect( () =>{
        let citasStart = JSON.parse(localStorage.getItem('citas'));

          if(citasStart){
            localStorage.setItem('citas', JSON.stringify(citas));
          } else {
            localStorage.setItem('citas', JSON.stringify([]));
          }
      }, [citas] )

      const createCita = cita =>{
        setCitas([
            ...citas,
             cita])
      }

       const deleteCita = id =>{
        const newCita = citas.filter(cita => cita.id!== id)
        setCitas(newCita)
      }
      
   

      const  title = citas.length === 0 ? 'No hay citas' : 'Administrar Citas'


  return (
    <Fragment>
      <h1>admin de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form 
              createCita={createCita}/>
          </div>
            <div className="one-half column">
              <h2>{title}</h2>
              {citas.map(cita => (
                <Cita

                key={cita.id}
                cita={cita}
                deleteCita={deleteCita}
                
                />
              ))}

            </div>
        </div>
      </div>
    </Fragment>
  );
}



export default App;
