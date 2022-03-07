import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalHeader, FormGroup, ModalFooter, Button } from "reactstrap";
import { closeModalPropiedades } from "../../actions/events";

export const ModalPropiedades = () => {
  const dispatch = useDispatch();
  const { modalPropiedades, activeFileProps } = useSelector(
    (state) => state.events
  );

  const data = activeFileProps && activeFileProps[0];

  return (
    <>
      <Modal
        style={{ backgroundColor: "red !important" }}
        isOpen={modalPropiedades}
      >
        <ModalHeader>Propiedades</ModalHeader>
        <FormGroup className="container form-modal-props">
          <div className="container" style={{ marginTop: "8px" }}>
            <div className="d-flex row-cols-2">
              <p>Nombre de carpeta: </p>
              <p style={{ marginLeft: "25px" }}>{data.name}</p>
            </div>
            <div className="d-flex row-cols-2">
              <p>Tipo: </p>
              <p style={{ marginLeft: "25px" }}>{data.tipo}</p>
            </div>
            <div className="d-flex row-cols-2">
              <p>Tamaño: </p>
              <p style={{ marginLeft: "25px" }}>{data.tamaño}</p>
            </div>
            {data.tipo === "folder" && (
              <>
                <div className="d-flex row-cols-2">
                  <p>Número de archivos: </p>
                  <p style={{ marginLeft: "25px" }}>{data.archivos}</p>
                </div>
                <div className="d-flex row-cols-2">
                  <p>Número de carpetas: </p>
                  <p style={{ marginLeft: "25px" }}>{data.carpetas}</p>
                </div>
              </>
            )}

            <div className="d-flex row-cols-2">
              <p>Ruta de archivos: </p>
              <p style={{ marginLeft: "25px" }}>{data.ruta}</p>
            </div>
            <div className="d-flex row-cols-2">
              <p>Última fecha de modificación: </p>
              <p style={{ marginLeft: "25px" }}>{data.fechaMod}</p>
            </div>
            <div className="d-flex row-cols-2">
              <p>Modificada por: </p>
              <p style={{ marginLeft: "25px" }}>{data.modifPor}</p>
            </div>
          </div>
        </FormGroup>

        <ModalFooter>
          <Button onClick={() => dispatch(closeModalPropiedades())}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
