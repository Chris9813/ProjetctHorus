import React, { useState } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useDispatch, useSelector } from "react-redux";
import { Treebeard } from "react-treebeard";

import { eliminarFav } from "../../actions/events";
import { stylesTreeBeard } from "./stylesTreeBeard";
import { directory } from "../../helpers/directory";
import { findAllObject } from "../../helpers/findObject";
import {

  gestionSetActiveView,

} from "../../actions/events";
const PanelVistaFavoritos = () => {
  const dispatch = useDispatch();
  const { Favoritos } = useSelector((state) => state.events);

  const [data, setData] = useState(directory);
  const [cursor, setCursor] = useState(false);
  console.log(Favoritos)
  const onToggle = (node, toggled) => {
    setCursor(node);

    
    dispatch(gestionSetActiveView(node.children));
    setData(Object.assign({}, data));
    setCursor(node);
  };

  function handleClick(e, datos) {
    const nameItem = datos.target.innerHTML;
    let obj = [];
    findAllObject(Favoritos, "name", nameItem, obj);
    console.log(obj);
    dispatch(eliminarFav(obj[0]));
  }

  return (
    <div>
      <ContextMenuTrigger id="same_unique_identifier_4">
        <Treebeard
          
          data={Favoritos}
          onToggle={onToggle}
          style={stylesTreeBeard}
        />
      </ContextMenuTrigger>

      <ContextMenu id="same_unique_identifier_4">
        <MenuItem
          data={{ foo: cursor }}
          onClick={handleClick}
          onToggle={onToggle}
        >
          Eliminar de favoritos
        </MenuItem>
      </ContextMenu>
    </div>
  );
};
export default PanelVistaFavoritos;
