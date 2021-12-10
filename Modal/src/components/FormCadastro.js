import React from "react";
import SimpleDialog from "./SimpleDialog.js";
import { TextField, Button,} from "@material-ui/core";
import { useState } from "react";

export default function FormCadastro() {
  const [valorSelecionado, setValorSelecionado] = useState("0");
  const [abrirModal, setAbrirModal] = useState(false);
  const [id, setId] = useState();
  const [nome, setNome] = useState();

  
  
  function executaAoAbrir() {   
    setAbrirModal(true)    
  }

  function executaAoFechar(value) {
    setAbrirModal(false);
    setValorSelecionado(value);
    setId(value.id)    
  }

//async function atualizaNome(event){
//  await controlaCampoId(event)  
//}

  function controlaCampoId(event){
    setId(event.target.value)
  }

  return (
    <>
      <TextField variant="outlined" label="Id" value={id} onChange={controlaCampoId} />
      <TextField variant="outlined" label="Nome" value={nome} onChange={(event) => setNome(event.target.value)} />
      <Button onClick={executaAoAbrir} variant="outlined" color="primary">
        Abrir
      </Button>
      <SimpleDialog       
        selectedValue={valorSelecionado}
        open={abrirModal}
        onClose={executaAoFechar}
        ></SimpleDialog>
    </>
  );
}
