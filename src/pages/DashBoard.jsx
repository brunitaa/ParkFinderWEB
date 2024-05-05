import React, { useEffect } from "react";
import { useOfertantes } from "../context/pruebas";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CRow, CCol, CWidgetStatsB } from "@coreui/react";

const Dashboard = () => {
  const { ofertantes, getOfertantes } = useOfertantes();

  useEffect(() => {
    getOfertantes();
  }, []);

  // Verifica si ofertantes es un array antes de mapearlo
  if (!Array.isArray(ofertantes)) {
    return <p>Cargando...</p>;
  }

  // Supongamos que tienes datos de usuarios y ofertantes con ratings y rechazos
  const usuarios = [
    { nombre: "Usuario 1", rating: 4.5, rechazos: 2 },
    { nombre: "Usuario 2", rating: 3.8, rechazos: 5 },
    // Más usuarios aquí...
  ];

  const topUsuarios = usuarios.sort((a, b) => b.rating - a.rating).slice(0, 20);

  const rechazosClientes = usuarios.reduce(
    (total, usuario) => total + usuario.rechazos,
    0
  );

  return (
    <>
      <br></br>

      {/* Sección de top 20 Usuarios */}
      <CRow id="Top20">
        <CCol md={6} className="mb-4">
          <h2>Top 20 Usuarios</h2>
          {topUsuarios.map((usuario, index) => (
            <CWidgetStatsB
              key={index}
              className="mb-2"
              progress={{ color: "info", value: usuario.rating * 10 }}
              text={`Rating: ${usuario.rating}`}
              title={usuario.nombre}
              value={usuario.rating}
            />
          ))}
        </CCol>
        {/* Sección de top 20 Ofertantes */}
        <CCol md={6} className="mb-4">
          <h2>Top 20 Ofertantes</h2>
          {ofertantes.map((ofertante, index) => (
            <CWidgetStatsB
              key={index}
              className="mb-2"
              progress={{ color: "success", value: ofertante.puntuacion * 10 }}
              text={`Rating: ${ofertante.puntuacion}`}
              title={ofertante.nombre}
              value={ofertante.puntuacion}
            />
          ))}
        </CCol>
      </CRow>
      {/* Sección de top ofertantes */}

      {/* Sección de rechazos */}
      <div id="rechazos"></div>
      <CRow id="rechazos">
        <CCol md={6} className="mb-4">
          <h2>Rechazos por Cliente</h2>
          <CWidgetStatsB
            className="mb-3"
            progress={{ color: "danger", value: rechazosClientes * 10 }}
            text="Rechazos por cliente"
            title="Total de rechazos"
            value={rechazosClientes}
          />
        </CCol>
        <CCol md={6} className="mb-4">
          <h2>Rechazos por Ofertante</h2>
          <CWidgetStatsB
            className="mb-3"
            progress={{ color: "warning", value: rechazosClientes * 10 }}
            text="Rechazos por ofertante"
            title="Total de rechazos"
            value={rechazosClientes}
          />
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
