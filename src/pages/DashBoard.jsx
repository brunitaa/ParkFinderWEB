import React, { useEffect } from "react";
import { useBidders } from "../context/top";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CRow,
  CCol,
  CWidgetStatsB,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
} from "@coreui/react";
import StarRating from "../components/stars";
import { useUsers } from "../context/topUser";

const Dashboard = () => {
  const { bidders, getBidders } = useBidders();
  const { users, getUsers } = useUsers();

  useEffect(() => {
    getBidders();
    getUsers();
  }, []);

  // Verifica si ofertantes es un array antes de mapearlo
  if (!Array.isArray(bidders)) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <br></br>

      {/* Sección de top 20 Usuarios */}
      <CRow id="Top20">
        <CCol md={6} className="mb-4">
          <h2>Top 20 Clientes</h2>
          {users.map((user, index) => (
            <CCard key={index} className="mb-2">
              <CCardBody>
                <CCardTitle>{user.username}</CCardTitle>
                <div style={{ display: "flex" }}>
                  <StarRating rating={user.customer_rating} />
                </div>
                <CCardText>Rating: {user.customer_rating}</CCardText>
              </CCardBody>
            </CCard>
          ))}
        </CCol>
        <CCol md={6} className="mb-4">
          <h2>Top 20 Ofertantes</h2>
          {bidders.map((bidder, index) => (
            <CCard key={index} className="mb-2">
              <CCardBody>
                <CCardTitle>{bidder.username}</CCardTitle>
                <div style={{ display: "flex" }}>
                  <StarRating rating={bidder.bidder_rating} />
                </div>
                <CCardText>Rating: {bidder.bidder_rating}</CCardText>
              </CCardBody>
            </CCard>
          ))}
        </CCol>
      </CRow>
      {/* Sección de top ofertantes */}

      {/* Sección de rechazos *
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
      </CRow>/*/}
    </>
  );
};

export default Dashboard;
