
const Funciones = () => {
  const estado='enviado'  
  const renderEstado=()=>{
    switch (estado) {
        case "enviado":
            return <h3>Enviado</h3>
        case "entregado":
            return <h3>Enviado</h3>               
        default:
            return <h3>Desconocido</h3>               
    }
  }  
  return (
    <div>
      {renderEstado()}
        <span>Estado: {estado}</span>
    </div>
  )
}
export default Funciones
