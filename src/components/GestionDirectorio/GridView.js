import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import MaterialTable, { MTableToolbar } from "material-table";
import { directory } from "../../helpers/directory";

export const GridView = () => {
  const [data, setData] = useState(directory.children);

  const iconFin = (rowData) => {
    switch (rowData.extension) {
      case "folder":
        return (
          <div className="name-gridview">
            <div className="d-flex margin-grid">
              <i class="fa-solid fa-folder fa-1x"></i>
              <div className="text-white">...</div>
              <p className="textfolder">{rowData.nombre}</p>
            </div>
          </div>
        );

      case "txt":
        return (
          <div className="d-flex name-gridview">
            <i class="fa-solid fa-file-lines"></i>
            <div className="text-white">...</div>
            <p className="textfolder">{rowData.nombre}</p>
          </div>
        );

      default:
        return (
          <div className="d-flex name-gridview">
            <i class="d-flex fa-solid fa-file-zipper"></i>
            <div className="text-white">...</div>
            <p className="textfolder">{rowData.nombre}</p>
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
      field: "nombre",
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

  const handleClick = (row, rows) => {
    const dataModificada = directory.children.filter(
      (item) => item.parentId === rows.id
    );

    dataModificada.length > 0 && setData(dataModificada);
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

  return (
    <>
      <ContextMenuTrigger id="same_unique_identifier">
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          //parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}
          options={{
            search: false,
            selection: true,
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
      <ContextMenu id="same_unique_identifier">
        <MenuItem data={{ foo: "cursor" }}>Copiar</MenuItem>

        <MenuItem className="pegar" data={{ foo: "bar" }}>
          Pegar
        </MenuItem>

        <MenuItem data={{ foo: "bar" }}>Crear carpeta</MenuItem>

        <MenuItem data={{ foo: "bar" }}>Añair a favoritos</MenuItem>

        <MenuItem data={{ foo: "bar" }}>Propiedades</MenuItem>

        <MenuItem data={{ foo: "bar" }}>Eliminar</MenuItem>
      </ContextMenu>
    </>
  );
};
