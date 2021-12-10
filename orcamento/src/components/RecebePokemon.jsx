import {useState, useEffect } from "react";
import api from "../api";

export default function RecebePokemon() {

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
   const[resultado, setResultado] = useState();
  
   useEffect(() => {   
    api.get("/pokedex/2/").then((response) => {      
      setResultado(response.data.pokemon_entries);         
    });
  }, [id]);
  
  function busca(){      
    const idNum = parseInt(id) ;    
    const obj = resultado.find(t => t.entry_number === idNum);  
    obj === undefined ? alert("id nao existe") : setNome(obj.pokemon_species.name)
  }
 
 return( <div> <input 
    value={id} 
    onChange={(event) => {setId(event.target.value)}}
    onBlur={busca} 
    />
    <input value={nome} readOnly/></div>
 )
}
