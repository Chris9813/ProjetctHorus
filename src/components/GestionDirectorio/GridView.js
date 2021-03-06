import React, { useState } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import MaterialTable, { MTableToolbar } from "@material-table/core";
import { iconFind } from "../../helpers/iconFind";
import { useDispatch, useSelector } from "react-redux";
import {
  seleccionarFav,
  gestionSetActiveView,
  gestionAddHistory,
  returnHistory,
  addPosition,
  selectObjectProps,
  openModalPropiedades,
  startLoadFiles,
  eliminarFav,
  deleteHistory,
} from "../../actions/events";
import { findAllObject } from "../../helpers/findObject";
import { ModalPropiedades } from "./ModalPropiedades";

export const GridView = () => {
  const dispatch = useDispatch();
  const oid = localStorage.getItem("oid");
  const { files, filesView, history, position, Favoritos } = useSelector(
    (state) => state.events
  );
  const [estado, setEstado] = useState(false);
  const [infoCursor, setInfoCursor] = useState("");

   console.log(filesView)
  const data = files;

  const columns = [
    {
      title: "Nombre",
      field: "name",
      render: (rowData) => iconFind(rowData),

      align: "end",
    },
    
    { title: "Tipo", field: "extension", align: "center" },
    {
      title: "Tamaño",
      field: "tamaño",
      align: "center",
    },
    {
      title: "Modificado",
      field: "modifPor",
    },
  ];

  const handleClick = (rows) => {
    if (!rows.children) return;
    dispatch(gestionSetActiveView(rows.children));
    dispatch(gestionAddHistory(rows.name));
    dispatch(startLoadFiles(oid, rows.url, "0", "0"));
  };

 
  const handlereturn = (e, d) => {
    const nombreAnteriorItem = position[position.length - 2];
    console.log(nombreAnteriorItem)
    let obj = [];
    findAllObject(data, "name", nombreAnteriorItem, obj);
    console.log(position.length === 2);
    if (position.length === 1) {
      dispatch(returnHistory());
      return dispatch(gestionSetActiveView(data));
    }
   
    dispatch(returnHistory());
    dispatch(gestionSetActiveView(obj[0].children));
    
  };

  const handleNext = () => {
    if (position.length === 0) {
      let obj = [];
      findAllObject(data, "name", history[0], obj);
      dispatch(addPosition(obj[0]));
      return dispatch(gestionSetActiveView(obj[0].children));
    }

    const nombreSiguiente = position[position.length - 1];
    let indice = 0;
    for (let i = 0; i <= history.length; i++) {
      if (history[i] === nombreSiguiente) {
        indice = i + 1;
      }
    }

    let obj = [];
    findAllObject(data, "name", history[indice], obj);
    dispatch(gestionAddHistory(obj[0]));
    dispatch(gestionSetActiveView(obj[0].children));
  };

  function handleFav(row, rows) {
    let obj = [];
    findAllObject(data, "name", rows.target.innerHTML, obj);
    dispatch(seleccionarFav(obj[0]));
  }

  function handleFavButton(row, rows) {
    let resultado = Favoritos.find((fav) => fav.name == rows.name);
    console.log(resultado);
    if (resultado) {
      alert("ya existe en favoritos");
    } else {
      dispatch(seleccionarFav(rows));
      setEstado(true);
    }
  }

  function handleDeleteFavButton(row, rows) {
    dispatch(eliminarFav(rows));
    setEstado(false);
  }

  const handleClickPropiedades = (e, datos) => {
    const nameItem = datos.target.innerHTML;
    let obj = [];
    findAllObject(files, "name", nameItem, obj);

    dispatch(selectObjectProps(obj));
    dispatch(openModalPropiedades());
  };

  const handleUp = (e, row) => {
   /* if (e.target.innerHTML.includes( "nav")) return;
    setInfoCursor(e.target.innerHTML);
    console.log(e.target.innerHTML)
    let resultado = Favoritos.find((fav) => fav.name === e.target.innerHTML);
    console.log(row)
    resultado ? setEstado(true) : console.log("ya esta agregado a fav")*/
  };
  

  return (
    <>
     <div onMouseOver={(e) => handleUp(e)}>
    
      <ContextMenuTrigger id="same_unique_identifier2">
        <MaterialTable
          title=""
          columns={columns}
          data={filesView}
          //parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}
          options={{
            search: false,
            selection: true,
            tableLayout: "auto",
            actions:true,
            filtering:false, paging:true, pageSizeOptions:[10,20,50,100], pageSize: 10,
            
          }}
          actions={[
            (rowData) => (
              console.log(rowData),
              rowData.tipo == 1
                ? Favoritos.find((fav) => fav.name == rowData.name)
                  ? {
                      icon: () => (
                        <>
                          <button className="fav">
                            <i class="fa-regular fa-star"></i>
                          </button>
                        </>
                      ),
                      tooltip: "Añadir a favoritos",
                      onClick: (row, rows) => handleDeleteFavButton(row, rows),
                    }
                  : {
                      icon: () => (
                        <>
                          <button className="fav">
                            <i className="fas fa-star"></i>
                          </button>
                        </>
                      ),
                      tooltip: "Añadir a favoritos",
                      onClick: (row, rows) => handleFavButton(row, rows),
                    }
                : console.log("no debe ir icnon")
            ),
          ]}
          onRowClick={(evt, selectedRow) => handleClick(selectedRow)}
          components={{
            

            Toolbar: (props) => (
              <div>
                <div className="container miga" >
                  <div className="row align-items-center justify-content-center center-block minh-0">
                    <div className="col">
                     <ol className="breadcrumb text-center ">
                     <li className="breadcrumb-item active">
                          <p class="active" onClick={(e, d) => handlereturn(e, d)}>
                          <i class="fa-solid fa-folder"></i>
                          </p> 
                       </li>  
                      {
                        position.map(pos=> 
                        <li className="breadcrumb-item active ">
                           <a className="active text-white" onClick={(e, d) => handlereturn(e, d)}>
                           {pos}
                           </a> 
                        </li>
                          )
                      }    
                      </ol>
                    </div>
                  </div>
                  
                </div>

                <MTableToolbar {...props} />
                <div className="icon-group-gridview">
                  <i
                    onClick={(e, d) => handlereturn(e, d)}
                    className="fa-solid fa-angle-left mx-1 icons-gridView"
                  ></i>
                  <i
                    className="fa-solid fa-angle-right icons-gridView"
                    onClick={handleNext}
                  ></i>
                  <i
                    onClick={handlereturn}
                    className="fa-solid fa-arrow-turn-up icons-gridView transform"
                  ></i>
                </div>
              </div>
            ),
          }}
        />
      </ContextMenuTrigger>
      
      <ContextMenu id="same_unique_identifier2">
        {
          estado ? (
            <MenuItem data={{ foo: "bar" }} onClick={handleFav}>
            eliminar de favoritos
          </MenuItem>
          ):(
          <MenuItem data={{ foo: "bar" }} onClick={handleFav}>
            Añadir a favoritos
          </MenuItem>
          )
        }
        <MenuItem data={{ foo: "cursor" }}>Copiar</MenuItem>

        <MenuItem className="pegar" data={{ foo: "bar" }}>
          Pegar
        </MenuItem>

        <MenuItem data={{ foo: "bar" }}>Crear carpeta</MenuItem>

       

        <MenuItem data={{ foo: "bar" }} onClick={handleClickPropiedades}>
          Propiedades
        </MenuItem>

        <MenuItem data={{ foo: "bar" }}>Eliminar</MenuItem>
      </ContextMenu>
      <ModalPropiedades />
      </div>
    </>
  );
};
