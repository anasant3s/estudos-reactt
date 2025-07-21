//import é feito pra pode usar aq 
import Titulo from "./Titulo"

//componente é uma função --> sempre com o mesmo nome do arquivo
//sempre com a letra maiuscula
function App(){
  //como se tivesse feito uma tag 
  // return <Titulo/>

  //qnd quer colocar mais de um item no retorno
  return (
    <div>
      <Titulo cor='red' nome='ana' paragrafo={true} />
      <Titulo cor='purple'/>
      <Titulo cor='blue'/>
    </div>
  )
}

//vai exportar a função pra fora
export default App