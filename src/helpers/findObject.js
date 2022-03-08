export const findObject = (obj = {}, key, value, copiaObjeto = {}) => {
  const recursiveSearch = (obj = {}) => {
    if (!obj || typeof obj !== "object") {
      return;
    }
    if (obj[key] === value) {
      if (obj["children"]) {
        obj["children"].push(copiaObjeto);
      } else {
        obj["children"] = [];
        obj["children"].push(copiaObjeto);
      }
    }
    Object.keys(obj).forEach(function (k) {
      recursiveSearch(obj[k]);
    });
  };
  recursiveSearch(obj);
};

export const findAllObject = (obj = {}, key, value, copiaObjeto) => {
  const recursiveSearch = (obj = {}) => {
    if (!obj || typeof obj !== "object") {
      return;
    }
    if (obj[key] === value) {
      copiaObjeto.push(obj);
    }
    Object.keys(obj).forEach(function (k) {
      recursiveSearch(obj[k]);
    });
  };
  recursiveSearch(obj);
};

export const deleteObject = (obj = {}, key, value) => {
  const recursiveSearch = (obj = {}) => {
    if (!obj || typeof obj !== "object") {
      return;
    }

    if (obj[key] === value) {
      if (obj["children"]) {
        delete obj.name;
        delete obj.children;
        delete obj.active;
        delete obj.toggled;
      } else {
        delete obj.name;
        delete obj.active;
        delete obj.toggled;
      }
    }

    Object.keys(obj).forEach(function (k) {
      recursiveSearch(obj[k]);
    });
  };
  recursiveSearch(obj);
};
