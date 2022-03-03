import React, { useEffect, useRef, useState } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useDispatch, useSelector } from "react-redux";
import { Treebeard } from "react-treebeard";

import {
  Modal,
  ModalHeader,
  FormGroup,
  Label,
  Input,
  ModalFooter,
  Button,
} from "reactstrap";
import {
  deleteActive,
  eventAddNew,
  handleDetele,
  setActive,
  setActiveCopy,
  seleccionarFav

} from "../../actions/events";
import { stylesTreeBeard } from "./stylesTreeBeard";

const directory={
   
}



 const PanelVistaFavoritos = () => {
    var copiaObjeto;
   
  const dispatch = useDispatch();
  const { activeFile, activeFileCopy, Favoritos } = useSelector(
    (state) => state.events
   
  );
 
  const [data, setData] = useState(directory);
  const [cursor, setCursor] = useState(false);
  const [abierto, setAbierto] = useState(false);

  const initiEvent = {
    name: "",
  };

  const [formValues, setformValues] = useState(initiEvent);

  const { name } = formValues;

  useEffect(() => {
    setformValues(initiEvent);
  }, [setformValues]);

  const handleInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onToggle = (node, toggled) => {
    setCursor(node);

    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setData(Object.assign({}, data));
    setCursor(node);
  };

  function handleClick(e, datos) {
    const nameItem = datos.target.innerHTML;
    const nojoHijos = datos.foo.children;
    const copiaObjeto = {
      name: nameItem,
      children: nojoHijos,
    };
    dispatch(setActiveCopy(copiaObjeto));
  }

  function clickPegar(e, datos) {
    const nameItem = datos.target.innerHTML;
    dispatch(eventAddNew(activeFileCopy, nameItem));
  }

  const handleCrear = (e, datos) => {
    setAbierto(!abierto);
    dispatch(setActive(datos.target.innerHTML));
  };

  const crearCarpeta = () => {
    dispatch(eventAddNew(formValues, activeFile));
    setAbierto(false);
    setformValues(initiEvent);
    dispatch(deleteActive());
  };

  const handleDelete = (e, datos) => {
    const nameItem = datos.target.innerHTML;
    dispatch(handleDetele(nameItem));
  };

  function handleFav(e, d){
      
    const nameItem = d.target.innerHTML;
    const nojoHijos= d.foo.children;
   copiaObjeto={
      name: nameItem,
      children:nojoHijos
    };
   console.log(nameItem)
   }
   console.log(Favoritos);
  return (
    <div>
      <ContextMenuTrigger id="same_unique_identifier">
        <Treebeard
          className="toggle"
          data={Favoritos}
          onToggle={onToggle}
          style={stylesTreeBeard}
        />
      
      </ContextMenuTrigger>

      <ContextMenu id="same_unique_identifier">
        <MenuItem
          data={{ foo: cursor }}
          onClick={handleClick}
          onToggle={onToggle}
        >
          Copiar
        </MenuItem>

        <MenuItem className="pegar" data={{ foo: "bar" }} onClick={clickPegar}>
          Pegar
        </MenuItem>

        <MenuItem data={{ foo: "bar" }} onClick={handleCrear}>
          Crear carpeta
        </MenuItem>

        <MenuItem data={{ foo: "bar" }} onClick={handleFav}>
          Añair a favoritos
        </MenuItem>

        <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
          Propiedades
        </MenuItem>

        <MenuItem data={{ foo: "bar" }} onClick={handleDelete}>
          Eliminar
        </MenuItem>
      </ContextMenu>

      <Modal isOpen={abierto}>
        <ModalHeader>Crea una carpeta</ModalHeader>
        <FormGroup>
          <Label>Nombre de carpeta</Label>
          <Input
            name="name"
            value={name}
            onChange={handleInputChange}
            className="nombreCarpeta"
            type="text"
            placeholder="Escriba nombre de la carpeta"
          />
        </FormGroup>

        <ModalFooter>
          <Button onClick={crearCarpeta}>Crear Carpeta</Button>
          <Button onClick={() => setAbierto(false)}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default PanelVistaFavoritos;