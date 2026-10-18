
const Render2 = () => {
  const isLogged=false
  const usuario=null

  if (isLogged) {
    return  <div>Cargando Perfil</div>
  }
  if (!usuario) {
    return <div>No existe usuario</div>
  }


  return (
    <div>
        <h3>Render 2</h3>

    </div>
  )
}
export default Render2
 
