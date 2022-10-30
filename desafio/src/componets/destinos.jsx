import React, { useEffect, useState } from "react";
import axios from "axios";
import { RegionalContainer } from "../style";

export default function Destinos() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [countriesId, setCountriesId] = useState("");

  // Requisição GET para paises
  useEffect(() => {
    axios.get("https://amazon-api.sellead.com/country").then((response) => {
      setCountries(response.data);
    });
  });

  // Requisição GET para cidades com filtro por país
  useEffect(() => {
    axios.get(`https://amazon-api.sellead.com/city`).then((response) => {
      const citiesSelect = response.data.filter((dado) => {
        return dado.country_code === countriesId;
      });
      setCities(citiesSelect);
    });
  }, [countriesId]);

  // Função para pegar valores do select
  function SelectId(event) {
    const id = event.target.value;
    setCountriesId(id);
  }

  return (
    <RegionalContainer>
      <h2>Destinos</h2>

      <p>País de Interesse</p>
      <select
        name="countries"
        id="countries"
        onChange={(code) => SelectId(code)}
      >
        <option value="0">Selecione o País</option>
        {countries.map((country) => (
          <option key={country.name} id="{country.code}" value={country.code}>
            {country.name_ptbr}
          </option>
        ))}
      </select>

      <p>Cidade de Interesse</p>
      <select name="cities" id="cities">
        <option value="0">Selecione a Cidade</option>
        {cities.map((city) => (
          <option key={city.id} id="{city.id}" value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <button>Enviar</button>
    </RegionalContainer>
  );
}
