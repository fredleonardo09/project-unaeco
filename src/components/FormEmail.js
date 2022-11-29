import { useState } from "react";


export default function FormEmail() {

  const [email, setEmail] = useState('')

  function FormonSubmit() {
    alert("Cadastro realizado com sucesso")
    console.log(FormonSubmit);
    
     
  }



  return (
    <form onSubmit={FormonSubmit}>
      <input
        type="e-mail"
        className="p-3 flex-grow-1 my-3 form-control"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div className="row">
        <div className="col">
          <button className="btn btn-success px-4" type="submit">
            Inscrever
          </button>
        </div>
      </div>
    </form>
  );
}
