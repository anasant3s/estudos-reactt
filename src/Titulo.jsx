//colocar a memoria dentro do componente
import { useState } from "react";

//altera oq tem na memoria
function Titulo({cor}){
    const [texto, setTexto] = useState("Um titulo do estado inicial")
    return (
        <div>
             <h1 style={{color:cor}}>{texto}</h1>
             <button onClick={()=>{setTexto("mudei via botão")}}>Mudar</button>
           

        </div>
    )

}

export default Titulo 
