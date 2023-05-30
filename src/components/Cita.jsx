import PropTypes  from "prop-types"; 

 
 const Cita = ({cita, deleteCita}) => {
  return (
    <div className="cita">
        
        <p>Mascotas: <samp>{cita.mascota}</samp> </p>
        <p>Dueño: <samp>{cita.dueño}</samp> </p>
        <p>Fecha: <samp>{cita.fecha}</samp> </p>
        <p>Hora: <samp>{cita.hora}</samp> </p>
        <p>Descripcion: <samp>{cita.descripcion}</samp> </p>

        <button className="button eliminar u-full-width"
        onClick={() => deleteCita(cita.id)}
        
        >Eliminar &times</button>
    
    </div>
  );
}

Cita.propTypes={

  cita: PropTypes.object.isRequired,
  deleteCita : PropTypes.func.isRequired,
}
export default Cita;