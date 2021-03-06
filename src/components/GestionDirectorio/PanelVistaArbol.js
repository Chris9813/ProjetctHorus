import React, { useState } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useDispatch, useSelector } from "react-redux";
import { Treebeard } from "react-treebeard";
import {
  eventAddNew,
  handleDetele,
  modalCrearOpen,
  openModalPropiedades,
  setActive,
  setActiveCopy,
  selectObjectProps,
  gestionSetActiveView,
  seleccionarFav,
  gestionAddHistory,
  addPosition,
  startLoadFiles,
} from "../../actions/events";
import { ModalCrear } from "./Modal";
import { ModalPropiedades } from "./ModalPropiedades";
import { stylesTreeBeard } from "./stylesTreeBeard";
import { findAllObject, findObject } from "../../helpers/findObject";

export const PanelVistaArbol = () => {
  const dispatch = useDispatch();
  const { files, activeFileCopy, filesView, position } = useSelector(
    (state) => state.events
  );
  const oid = localStorage.getItem("oid");

  const [data, setData] = useState(files);
  const [cursor, setCursor] = useState(false);
  const [infoCursor, setInfoCursor] = useState("");
  const [estado, setEstado] = useState(false);

  const onToggle = (node, toggled) => {
    setCursor(node);
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setData(Object.assign({}, data));
    setCursor(node);
   
    dispatch(gestionSetActiveView(node.children));
    console.log(node.name)
    let resultado = position.find((pos) => node.name == pos);
    if(resultado){
      console.log("data ya existe")
    }
    else{
      dispatch(addPosition(node.name));
      dispatch(gestionAddHistory(node.name));
    }
    
    dispatch(startLoadFiles(oid, node.url, "1", "0"));
    console.log(node.children);
  };



  function handleClickCopiar(e, datos) {
    const nameItem = datos.target.innerHTML;
    let obj = [];
    findAllObject(files, "name", nameItem, obj);

    dispatch(setActiveCopy(obj[0]));
  }

  function clickPegar(e, datos) {
    const nameItem = datos.target.innerHTML;
    dispatch(eventAddNew(activeFileCopy, nameItem));
  }

  const handleCrear = (e, datos) => {
    dispatch(modalCrearOpen());
    dispatch(setActive(datos.target.innerHTML));
  };

  const handleDelete = (e, datos) => {
    const nameItem = datos.target.innerHTML;
    dispatch(handleDetele(nameItem));
  };

  const handleClickPropiedades = (e, datos) => {
    const nameItem = datos.target.innerHTML;
    let obj = [];
    findAllObject(files, "name", nameItem, obj);

    dispatch(selectObjectProps(obj));
    dispatch(openModalPropiedades());
  };

  const handleUp = (e, b) => {
    if (e.target.innerHTML.includes("div" || "<polygon")) return;
    setInfoCursor(e.target.innerHTML);
  };

  function handleFav(row, rows) {
    let obj = [];
    findAllObject(data, "name", rows.target.innerHTML, obj);
    console.log(obj);
    dispatch(seleccionarFav(obj[0]));
  }

  return (
    <div onMouseOver={(e) => handleUp(e)}>
      <ContextMenuTrigger id="same_unique_identifier">
        <Treebeard
          className="toggle"
          data={files}
          onToggle={onToggle}
          style={stylesTreeBeard}
        />
      </ContextMenuTrigger>
      {infoCursor !== "Container 1" && infoCursor !== "Container 2" && (
        <ContextMenu id="same_unique_identifier">
          
          <MenuItem data={{ foo: "bar" }} onClick={handleClickCopiar}>
            Copiar
          </MenuItem>

          <MenuItem
            className="pegar"
            data={{ foo: "bar" }}
            onClick={clickPegar}
          >
            Pegar
          </MenuItem>

          <MenuItem data={{ foo: "bar" }} onClick={handleCrear}>
            Crear carpeta
          </MenuItem>

          <MenuItem data={{ foo: "bar" }} onClick={handleFav}>
            A??adir a favoritos
          </MenuItem>

          <MenuItem data={{ foo: "bar" }} onClick={handleClickPropiedades}>
            Propiedades
          </MenuItem>

          <MenuItem data={{ foo: "bar" }} onClick={handleDelete}>
            Eliminar
          </MenuItem>
        </ContextMenu>
      )}

      <ModalCrear />
      <ModalPropiedades />
    </div>
  );
};
