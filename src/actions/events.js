import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";

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

export const startLoadContainersGrid = () => {

  return async (dispatch) => {
    const respuesta = await fetchConToken(
      "ConsultaArchivosContenedores",
      {
        oid : "fdba0694-ecb8-457e-a25e-1885cbc31787.0da0b1a6-e6bf-434d-ad5b-689c039c77c7",
        llavecontenedor : "AbbqpMHQl3dpYmQSHATvREfrtSrlz/D2AhxJAgQz9L5LThT4RVgh2cFkNyfgBgbh", 
        solodirectorios : "0", 
        consultaarchivo : "0" 
      },
  
      "POST"
    );
    console.log(respuesta)
    const body = await respuesta.json();
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
          tamano: container.tamano,
          fechacreacion: container.fechacreacion,
          fechamodificacion: container.fechamodificacion,
          tipo: container.tipo,
          urlpadre: container.urlpadre,
          extension: "folder",
          children: [],
        };
        diretory.children.push(dataContainer);
      });

      dispatch(loadContainersView(diretory.children));
    }
    else{
      console.log("paila")
    }
  };
};

const loadContainersView = (containers) => ({
  type: types.gestionLoadedView,
  payload: containers,
});

const loadContainers = (containers) => ({
  type: types.gestionLoaded,
  payload: containers,
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
