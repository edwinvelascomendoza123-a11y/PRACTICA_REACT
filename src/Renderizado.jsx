
const PanelUsuario = () => {
  const isLogged=true
  return (
    <div>
        <h3>Panel de Usuario</h3>
        {   isLogged ? (
            <button> Cerrar Sesion </button>
            ) : (
                <button> Inicair Seson</button>
            )
        }
    </div>
  )
}
export default PanelUsuario
