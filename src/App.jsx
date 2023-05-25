import { Fragment, useState } from "react";
import Form from './components/Form'

function App() {

     const [citas, setCitas] = useState([])


      const createCita = cita =>{
        setCitas([
            ...citas,
             cita])
      }
        

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

            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
