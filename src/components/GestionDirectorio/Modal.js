import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalHeader, FormGroup } from "reactstrap";
import Swal from "sweetalert2";
import {
  deleteActive,
  eventAddNew,
  modalCrearClose,
} from "../../actions/events";

export const ModalCrear = () => {
  const dispatch = useDispatch();
  const { activeFile, modalCrear, position } = useSelector(
    (state) => state.events
  );
  const initiEvent = {
    name: "",
  };

  const [formValues, setformValues] = useState(initiEvent);

  const { name } = formValues;

  const handleInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const crearCarpeta = () => {
    if (!name)
      return Swal.fire(
        "Error",
        "El nombre de la carpeta no puede estar vacio",
        "error"
      );
    let modelFolder = {
      name: name,
      id: new Date(),
      fecha_modificacion: "Baran",
      modificado_por: 1987,
      tamaño: 63,
      tipo: 1,
      extension: "folder",
      children: [],
    };

    if (activeFile.lengt <= 0) {
      dispatch(eventAddNew(modelFolder, activeFile));
      dispatch(modalCrearClose());
      return setformValues(initiEvent);
    } else {
      console.log(modelFolder, position[position.length - 1]);
      dispatch(eventAddNew(modelFolder, position[position.length - 1]));
      dispatch(modalCrearClose());
      setformValues(initiEvent);
      dispatch(deleteActive());
    }
  };
  const handleCerrar = () => {
    dispatch(modalCrearClose());
  };
  return (
    <>
      <Modal isOpen={modalCrear}>
        <ModalHeader>Crea una carpeta</ModalHeader>
        <FormGroup onSubmit={crearCarpeta}>
          <div className="d-flex container mt-4">
            <p className="p-modal">Nombre de la carpeta</p>
            <div className="input-group mb-3 input-modal">
              <input
                name="name"
                value={name}
                onChange={handleInputChange}
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </FormGroup>

        <div className="d-flex justify-content-center">
          <button className="btn btn-modal" onClick={crearCarpeta}>
            Aceptar
          </button>
          <button className="btn btn-modal" onClick={handleCerrar}>
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  );
};
