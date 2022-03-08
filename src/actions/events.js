import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import { findObject } from "../helpers/findObject";

export const eventStartAddNew = (event) => {
  /*
  return async (dispatch, getState) => {
    
    const { uid, name } = getState().auth;

    try {
      const resp = await fetchConToken("events", event, "POST");
      const body = await resp.json();

      if (body.ok) {
        event.id = body.evento.id;
        event.user = {
          _id: uid,
          name: name,
        };
        console.log(event);
        dispatch(eventAddNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
  */
};

export const startLoadContainers = (oid) => {
  return async (dispatch) => {
    const resp = await fetchConToken(
      "ListaContenedores",
      {
        oid,
      },
      "POST"
    );
    const body = await resp.json();
    if (body.Resultado === 1) {
      const diretory = {
        name: "root",
        toggled: true,
        children: [],
      };
      body.Contenedores.map((container) => {
        let dataContainer = {
          name: container.name,
          url: container.url,
          tipo: 1,
          children: [],
        };
        diretory.children.push(dataContainer);
      });

      dispatch(loadContainers(diretory.children));
    }
  };
};

const loadContainers = (containers) => ({
  type: types.gestionLoaded,
  payload: containers,
});

export const startLoadFiles = (
  oid,
  llavecontenedor,
  solodirectorios,
  consultaarchivo
) => {
  return async (dispatch) => {
    const resp = await fetchConToken(
      "ConsultaArchivosContenedor",
      {
        oid: oid,
        llavecontenedor: llavecontenedor,
        solodirectorios: solodirectorios,
        consultaarchivo: consultaarchivo,
      },
      "POST"
    );
    const body = await resp.json();
    if (body.Resultado === 1) {
      const { ListaArchivos } = body;
      console.log(ListaArchivos);
      dispatch(loadFiles(ListaArchivos));
    }
  };
};

const loadFiles = (ListaArchivos) => ({
  type: types.gestionLoadedFiles,
  payload: ListaArchivos,
});

export const eventAddNew = (event, active) => ({
  type: types.gestionAddNew,
  payload: { event, active },
});

export const setActive = (event) => ({
  type: types.gestionSetActive,
  payload: event,
});

export const deleteActive = () => ({
  type: types.gestionClearActive,
});

export const setActiveCopy = (event) => ({
  type: types.gestionSetActiveCopy,
  payload: event,
});

export const handleDetele = (event) => ({
  type: types.gestionDelated,
  payload: event,
});

export const modalCrearOpen = () => ({
  type: types.uiOpenModal,
});

export const modalCrearClose = () => ({
  type: types.uiCloseModal,
});

export const openModalPropiedades = () => ({
  type: types.uiOpenModalPropiedades,
});

export const closeModalPropiedades = () => ({
  type: types.uiCloseModalPropiedades,
});

export const selectObjectProps = (event) => ({
  type: types.gestionSetActiveProps,
  payload: event,
});

export const seleccionarFav = (event) => ({
  type: types.gestionSelectFavorito,
  payload: event,
});

export const eliminarFav = (event) => ({
  type: types.gestionDeleteFvorito,
  payload: event,
});

export const gestionSetActiveView = (event) => ({
  type: types.gestionSetActiveView,
  payload: event,
});

export const gestionAddHistory = (event) => ({
  type: types.gestionAddHistory,
  payload: event,
});

export const returnHistory = () => ({
  type: types.gestionDeletePosition,
});

export const addPosition = (event) => ({
  type: types.gestionAddPosition,
  payload: event,
});
