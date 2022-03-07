import icono_word from "../img/icono_word.png";
import icono_pp from "../img/icono_pp.png";
import icono_pdf from "../img/icono_pdf.png";
import icono_xls from "../img/icono_xls.png";
import icono_blank from "../img/icono_blank.png";

export const iconFind = (rowData) => {
  switch (rowData.tipo) {
    case 1:
      return (
        <div className="name-gridview">
          <div className="d-flex margin-grid">
            <i className="fa-solid fa-folder fa-1x"></i>

            <p className="textfolder">{rowData.name}</p>
          </div>
        </div>
      );

    case "docx":
      return (
        <div className="d-flex name-gridview">
          <img src={icono_word} style={{ maxHeight: "1.5rem" }} />

          <p className="textfolder">{rowData.name}</p>
        </div>
      );

    case "pptx":
      return (
        <div className="d-flex name-gridview">
          <img src={icono_pp} style={{ maxHeight: "1.5rem" }} />

          <p className="textfolder">{rowData.name}</p>
        </div>
      );

    case "pdf":
      return (
        <div className="d-flex name-gridview">
          <img src={icono_pdf} style={{ maxHeight: "1.5rem" }} />

          <p className="textfolder">{rowData.name}</p>
        </div>
      );

    case "xlsx":
      return (
        <div className="d-flex name-gridview">
          <img src={icono_xls} style={{ maxHeight: "1.5rem" }} />

          <p className="textfolder">{rowData.name}</p>
        </div>
      );

    default:
      return (
        <div className="d-flex name-gridview">
          <img src={icono_blank} style={{ maxHeight: "1.5rem" }} />

          <p className="textfolder">{rowData.name}</p>
        </div>
      );
  }
};
