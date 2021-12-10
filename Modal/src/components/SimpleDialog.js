import React from "react";
import {
  Dialog,
  DialogTitle,
  List,
  ListItemText,
  ListItem,
} from "@material-ui/core";




export default function SimpleDialog(props) {

  const testeArray = [
    { id: "1", nome: "nome1", sobrenome: "sobrenome1" },
    { id: "2", nome: "nome2", sobrenome: "sobrenome2" },
    { id: "3", nome: "nome3", sobrenome: "sobrenome3"  },
    { id: "4", nome: "nome4", sobrenome: "sobrenome4"  },
    { id: "5", nome: "nome5", sobrenome: "sobrenome5"  },
    { id: "6", nome: "nome6", sobrenome: "sobrenome6"  },
    { id: "7", nome: "nome7", sobrenome: "sobrenome7"  },
   
  ];

  const {onClose, selectedValue, open } = props;

  function executaAoFechar() {
    onClose(selectedValue);
  }

  function executaAoClickarNaLinha(value) {
    onClose(value);
  }

  return (
    <>
      <Dialog onClose={executaAoFechar} open={open}>
        <DialogTitle>titulo</DialogTitle>
        <List>
          {testeArray.map((testeArray) => (
          <ListItem
            button onClick={() => executaAoClickarNaLinha(testeArray)} key={testeArray.id}
          >
          <ListItemText primary={testeArray.nome}/>
          </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
}
