import "./style.css";

const FuncionMap = () => {
    const fruta=['Manzana','Pera','Sandia']
  return (
    <div className="frutas">
      {fruta.map((fruta,index)=> {
        return <li key={index}>Las frutas son : {fruta}</li>
      })}
    </div>
  )
}
export default FuncionMap
