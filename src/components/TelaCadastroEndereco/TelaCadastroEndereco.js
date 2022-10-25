import React from "react";

function TelaCadastroEndereco(props){
  return(
    <div>
      <h1>Cadastro de Endereço</h1>
      <section>
        Endereço:
        <input></input>
      </section>
      <section>
        Número da residência:
        <input></input>
      </section>    
      <section>
        Complemento:
        <input></input>
      </section>    
      <section>
        Telefone:
        <input></input>
      </section>    
      <button onClick={()=> props.mudarTela(4)}>Enviar</button>         
    </div>
  )
}

export default TelaCadastroEndereco