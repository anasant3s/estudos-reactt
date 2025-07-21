function Titulo({nome, paragrafo, cor}){
   
    return (
        <div>
             <h1 style={{color:cor}}> titulo, {nome ? nome : "Sem nome"}</h1>
             {paragrafo ?
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum tempore quis ullam at modi aperiam, dolorem deleniti laudantium, fugit illum, totam minus quod eum. Debitis quos est fuga culpa.</p>
             :
             <p>nada</p>
}
        </div>
    )

}

export default Titulo 
