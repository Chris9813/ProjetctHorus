const baseUrl = "https://localhost:44307/api";

export const fetchSinToken = (endPoint, data, method = "GET") => {
  const url = `${baseUrl}/${endPoint}`; //localhost:4000/api/endpoint

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchConToken = (endPoint, data, method = "GET") => {
  const url = `${baseUrl}/${endPoint}`; //localhost:4000/api/endpoint
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "x-token": token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};
