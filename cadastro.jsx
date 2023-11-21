import React, { useState } from "react";

function Cadastro({ addAnimal }) {
  const [foto, setFoto] = useState("");
  const [raca, setRaca] = useState("");
  const [local, setLocal] = useState("");
  const [status, setStatus] = useState("");

  const enviarDados = (e) => {
    e.preventDefault();

    if (!raca || !local || !foto) {
      // Adicione uma validação para garantir que todos os campos sejam preenchidos
      alert("Preencha todos os campos (Raça, Local e Foto)!");
      return;
    }

    
    addAnimal(foto, raca, local, status);

    // Limpe os campos após o envio
  };

  return (
    <div className="cadastrar">
      <form onSubmit={enviarDados}>
        <input
          type="text"
          onChange={(e) => setFoto(e.target.value)}
          placeholder="URL da Foto"
          required
        /> <br />
        <input
          type="text"
          onChange={(e) => setRaca(e.target.value)}
          placeholder="Raça"
          required
        /> <br />
        <input
          type="text"
          onChange={(e) => setLocal(e.target.value)}
          placeholder="Local (encontrado/perdido)"
          required
        /> <br />
        {/* Inclua o dropdown diretamente no campo de cadastro para o status */}
        <label htmlFor="status">Status:</label>
        <select id="status" onChange={(e) => setStatus(e.target.value)}>
          <option value="Perdido">Perdido</option>
          <option value="Encontrado">Encontrado</option>
        </select> <br />
        <button type="submit" className="botaoCadastrar">
          Cadastrar Animal
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
