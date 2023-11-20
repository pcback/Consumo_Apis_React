import React, { useEffect, useState } from "react";
import Buscador from "./Buscador";
const urlApi = "https://api.gael.cloud/general/public/sismos";

const MiApi = () => {
  const [sismos, setSismos] = useState([]);
  const [buscador, setbuscador] = useState("");

  const traerSismos = async () => {
    const { data } = await axios(urlApi);
    const dataOrdenada = data.sort((a, b) =>
      a.refGeografica.localeCompare(b.refGeografica)
    );
    setSismos(dataOrdenada);
  };

  useEffect(() => {
    traerSismos();
  }, []);

  return (
    <div>
      <Buscador buscador={buscador} setbuscador={setbuscador} />
      <div className="contenedorTabla">
        <table className="tabla">
          <thead>
            <tr>
              <th>Refgeografica</th>
              <th>Magnitud</th>
              <th>Profundidad</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {sismos
              .filter((sismo) => {
                return (
                  sismo.RefGeografica.toLowerCase().includes(
                    buscador.toLowerCase()
                  ) ||
                  sismo.Magnitud.toLowerCase().includes(
                    buscador.toLowerCase()
                  ) ||
                  sismo.Profundidad.toLowerCase().includes(
                    buscador.toLowerCase()
                  )
                );
              })

              .map((sismo, Fecha) => (
                <tr key={Fecha}>
                  <td>{sismo.RefGeografica}</td>
                  <td>{sismo.Magnitud}</td>
                  <td>{sismo.Profundidad}</td>
                  <td>{sismo.Fecha}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MiApi;
