import { findObject, deleteObject } from "../helpers/findObject";
import { types } from "../types/types";

const directory = {
  name: "root",
  toggled: true,
  children: [
    {
      name: "parent",
      children: [{ name: "child1" }, { name: "child2" }],
    },
    {
      name: "loading parent",
      children: [{ name: "childLoadingf1" }, { name: "childLoadingf2" }],
    },
    {
      name: "parent2",
      children: [
        {
          name: "nested parent",
          children: [{ name: "nested child 1" }, { name: "nested child 2" }],
        },
      ],
    },
  ],
};

const initialState = {
  files: directory.children,
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
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
        ...initialState,
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
    default:
      return state;
  }
};
