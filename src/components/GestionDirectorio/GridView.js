import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Route, Switch, Redirect } from 'react-router-dom';
import MaterialTable, { MTableToolbar } from "material-table";
import { directory } from "../../helpers/directory";
import  PanelVistaFavoritos from "./PanelVistaFavoritos";
import { useDispatch,useSelector } from "react-redux";

import {
 
  seleccionarFav

} from "../../actions/events";
import { icon } from "@fortawesome/fontawesome-svg-core";

export const GridView = () => {
 
  const dispatch = useDispatch();
  const { Favoritos } = useSelector(
    (state) => state.events
   
  );
  console.log(Favoritos)
  const [data, setData] = useState(directory.children);
  const [fila, setFila] = useState({});
  var copiaObjeto;
  const iconFin = (rowData) => {
    switch (rowData.extension) {
      case "folder":
        return (
          <div className="name-gridview">
            <div className="d-flex margin-grid">
            <i class="fa-solid fa-folder fa-1x"></i>
              <p className="textfolder">{rowData.name}</p>
            </div>
          </div>
        );
 
      case "txt":
        return (
          <div className="d-flex name-gridview">
            <i class="fa-solid fa-file-lines"></i>
           
            <p className="textfolder">{rowData.name}</p>
          </div>
        );

      default:
        return (
          <div className="d-flex name-gridview">
            <i class="d-flex fa-solid fa-file-zipper"></i>
            
            <p className="textfolder">{rowData.name}</p>
          </div>
        );
    }
  };
  {
    /*
      title: "",
      field: "extension",
      render: (rowData) => iconFin(rowData),
      align: "center",
      */
  }
  const [columns, setColumns] = useState([
    {
      title: "Nombre",
      field: "name",
      render: (rowData) => iconFin(rowData),
      width: "",
      align: "end",
    },
    {
      title: "Tiempo de modificado",
      field: "fecha_modificacion",
      align: "center",
    },
    { title: "Tipo", field: "modificado_por", align: "center" },
    {
      title: "Tamaño",
      field: "tamaño",
      align: "center",
    },
    {
      title: "Propietario",
      field: "propietario",
    },
  ]);

const handleclic=(rowData)=>{
  console.log(rowData)
}

  const handleClick = (row, rows) => {
    const dataModificada = directory.children.filter(
      (item) => item.parentId === rows.id
    );
  
    dataModificada.length > 0 && setData(dataModificada);
    console.log(rows)
  };

  const handlereturn = () => {
    const index = data[0].path.length - 3;

    if (index > -1) {
      const path = data[0].path[index];

      const dataMod = directory.children.filter(
        (item) => item.path[0] === path
      );
      dataMod.shift();
      return setData(dataMod);
    }

    setData(directory.children);

    
  };

  function handleFav(row, rows){
    var dato = rows.name
    console.log(dato)
    dispatch(seleccionarFav(rows))
    //añadirFav(Favoritos, 'name', dato, rows)
   }
  /* const añadirFav = (obj = {}, key, value, objeto={}) => 
   {

      const recursiveSearch = (obj = {}) => 
      {
           if (!obj || typeof obj !== 'object') { return;};
           if (obj[key] === value)
           {
            console.log("id existente")
           }
           else
           {
            dispatch(seleccionarFav(objeto))
            
           }
           Object.keys(obj).forEach(function (k) 
           {
               recursiveSearch(obj[k]);
           });
       } 
     
         recursiveSearch(obj);
       
   }  */

  return (
    <>
 
      <ContextMenuTrigger id="same_unique_identifier_tres">
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          actions={[
            {
              
              icon:()=><button className="fav"><i className="icon fas fa-star"></i></button>,
              tooltip:'Añadir a favoritos',
              onClick:(row, rows)=>handleFav(row, rows)
            }
            
          ]}
          //parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}
          options={{
            search: false,
           
            tableLayout: "auto",
            
          }}
          onRowClick={(row, rows) => handleClick(row, rows)}
         
          
          components={{ 
            Toolbar: (props) => (
              <div>
                <MTableToolbar {...props} />
                <div className="icon-group-gridview">
                  <i
                    onClick={handlereturn}
                    class="fa-solid fa-angle-left mx-1 icons-gridView"
                  ></i>
                  <i class="fa-solid fa-angle-right icons-gridView"></i>
                  <i
                    onClick={handlereturn}
                    class="fa-solid fa-arrow-turn-up icons-gridView transform"
                  ></i>
                </div>
              </div>
            ),
          }}
        />
      </ContextMenuTrigger>
      <ContextMenu id="same_unique_identifier_tres">
        <MenuItem data={{ foo: "cursor" }}>Copiar</MenuItem>

        <MenuItem className="pegar" data={{ foo: "bar" }}>
          Pegar
        </MenuItem>

        <MenuItem data={{ foo: "bar" }}>Crear carpeta</MenuItem>

        <MenuItem data={{ foo: "rows" }} onClick={handleFav} >Añair a favoritos</MenuItem>

        <MenuItem data={{ foo: "bar" }}>Propiedades</MenuItem>

        <MenuItem data={{ foo: "bar" }}>Eliminar</MenuItem>
      </ContextMenu>
    </>
  );
};
