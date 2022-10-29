import React from "react";

export function DadosPessoais() {
    return (
      <div>
        <h2>Dados Pessoais</h2>
        <label>Nome</label>
        <input type="text" required/>
        <label>Email</label>
        <input type="email" required />
        <label>Telefone</label>
        <input type="number" required />
        <label>CPF</label>
        <input type="text" required />
      </div>
    );
}
