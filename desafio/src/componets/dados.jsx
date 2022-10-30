import React from "react";
import { DataContainer } from "../style";

export function DadosPessoais() {
  return (
    <DataContainer>
      <h2>Dados Pessoais</h2>
      
      <label htmlFor="name">Nome</label>
      <input id="name" type="text" required />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="  Email@dominio.com" required/>

      <label htmlFor="tel">Telefone</label>
      <input id="tel" type="number" placeholder="  (XX) XXXXX-XXXX" required />

      <label htmlFor="cpf">CPF</label>
      <input id="cpf" type="text" required />
    </DataContainer>
  );
}
