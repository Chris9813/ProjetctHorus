import { findObject, deleteObject,deleteObjectD } from "../helpers/findObject";
import { types } from "../types/types";

const modelData = {
  name: "NAN",
  tamaño: "NAN",
  Subcarpetas: "NAN",
  tipo: "NAN",
  archivos: "NAN",
  carpetas: "NAN",
  ruta: "NAN",
  fechaMod: "NAN",
  modifPor: "NAN",
  children: [],
};

const initialState = {
  files: [],
  activeFileProps: [modelData],
  activeFile: [],
  Favoritos: [],
  filesView: [],
  history: [],
  position: [],
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.gestionLoaded:
      return {
        ...state,
        files: action.payload,
        filesView: action.payload,
      };

    case types.gestionLoadedFiles:
      console.log(action.payload);
      return {
        ...state,
      };

    case types.gestionSetActive:
      return {
        ...state,
        activeFile: action.payload,
      };

    case types.gestionSetActiveCopy:
      return {
        ...state,
        activeFileCopy: action.payload,
      };

    case types.gestionClearActive:
      return {
        ...state,
        activeFile: [],
      };

    case types.gestionAddNew:
      findObject(
        state.files,
        "name",
        action.payload.active,
        action.payload.event
      );
      return {
        ...state,
      };

    case types.gestionDelated:
      deleteObject(state.files, "name", action.payload);
      console.log(state.files);
      return {
        ...state,
      };

    case types.uiOpenModal:
      return {
        ...state,
        modalCrear: true,
      };
    case types.uiCloseModal:
      return {
        ...state,
        modalCrear: false,
      };

    case types.uiOpenModalPropiedades:
      return {
        ...state,
        modalPropiedades: true,
      };
    case types.uiCloseModalPropiedades:
      return {
        ...state,
        modalPropiedades: false,
      };
    case types.gestionSetActiveProps:
      return {
        ...state,
        activeFileProps: action.payload,
      };

    case types.gestionSelectFavorito:
       console.log(action.payload)
      return {
        ...state,
        Favoritos: [...state.Favoritos, action.payload],
      };

    case types.gestionDeleteFvorito:
      return {
        ...state,
        Favoritos: state.Favoritos.filter(
          (fav) => fav.name !== action.payload.name
        ),
      };

    case types.gestionSetActiveView:
      return {
        ...state,
        filesView: action.payload,
      };

    case types.gestionAddHistory:
      console.log(action.payload);
      return {
        ...state,
        history: [...state.history, action.payload],
        position: [...state.position, action.payload],
      };

      case types.gestionDelatedHistory:
      deleteObjectD(state.history, "name", action.payload);
      console.log(state.files);
      return {
        ...state,
      };


    case types.gestionDeletePosition:
      state.position.pop();
      return {
        ...state,
      };
    case types.gestionAddPosition:
      return {
        ...state,
        position: [...state.position, action.payload],
      };

    default:
      return state;
  }
};
