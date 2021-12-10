import React, { useState, useEffect } from "react";
import api from "../api";

export default function Buscar() {
  const [lista, setLista] = useState([]);
  const [selecionou, setSelecionou] = useState();

  useEffect(() => {
    api.get("/pokedex/2/").then((response) => {      
      setLista(response.data.pokemon_entries);      
    });
  }, [selecionou]);
  
  const Enviar = (event) => {
    event.preventDefault();    
    console.log(selecionou)   
  }
  

  return (
    <form onSubmit={Enviar}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Numero Pokemon</th>
            <th scope="col">Nome Pokemon</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((pokemon) => (
            <tr key={pokemon.entry_number}>
              <th scope="row">{pokemon.entry_number}</th>
              <td>{pokemon.pokemon_species.name}</td>
              <td>{pokemon.pokemon_species.url}</td>
              <td>
                <button
                  type="submit"
                  onClick={() => {
                    setSelecionou(pokemon.entry_number);                    
                  }}
                >
                  Selecionar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}
