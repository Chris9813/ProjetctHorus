import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import MaterialTable, { MTableToolbar } from "material-table";
import { directory } from "../../helpers/directory";

export const GridView = () => {
  const [data, setData] = useState(directory.children);

  const iconFin = (rowData) => {
    switch (rowData.extension) {
      case "folder":
        return <i class="fa-solid fa-folder"></i>;

      case "txt":
        return <i class="fa-solid fa-file-lines"></i>;

      default:
        return <i class="fa-solid fa-file-zipper"></i>;
    }
  };

  const [columns, setColumns] = useState([
    {
      title: "",
      field: "extension",
      render: (rowData) => iconFin(rowData),
      align: "center",
    },
    { title: "Nombre", field: "nombre", align: "left", width: "" },
    {
      title: "Fecha de modificación",
      field: "fecha_modificacion",
    },
    { title: "Modificado por", field: "modificado_por" },
    {
      title: "Tamaño",
      field: "tamaño",
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
      <MaterialTable
        title=""
        columns={columns}
        data={data}
        //parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}
        options={{
          search: false,
          selection: true,
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
    </>
  );
};
