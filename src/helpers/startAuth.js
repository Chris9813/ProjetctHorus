import { fetchConToken } from "./fetch";

export const startAuth = async (
  aud,
  name,
  preferred_username,
  oid,
  tid,
  token
) => {
  const resp = await fetchConToken(
    "AutenticarUsuario",
    {
      oid: oid,
      tenantid: tid,
      nombre: name,
      apellido: name,
      email: preferred_username,
      direccionip: "181.54.0.221",
      token: token,
    },
    "POST"
  );
  const body = await resp.json();
  const respValid = await fetchConToken(
    "ValidarUsuario",
    {
      oid: oid,
    },
    "POST"
  );
  const bodyValid = await respValid.json();
  console.log(bodyValid.Resultado);
  const { UltimoAcceso, VencimientoToken } = bodyValid.DatosUsuario;
  if (bodyValid.Resultado === 1 && body.Resultado === 1) {
    localStorage.setItem("UltimoAcceso", UltimoAcceso);
    localStorage.setItem("VencimientoToken", VencimientoToken);
  }
};
