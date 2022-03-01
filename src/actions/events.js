import { types } from "../types/types";

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
