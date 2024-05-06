import React, { useEffect } from "react";
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
import { useWBidders } from "../context/worstB";

const Worst = () => {
  const { wbidders, getwBidders, wusers, getwUsers } = useWBidders();

  useEffect(() => {
    getwBidders();
    getwUsers();
  }, []);

  // Verifica si ofertantes es un array antes de mapearlo
  if (!Array.isArray(wbidders)) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <br></br>

      {/* Sección de top 20 Usuarios */}
      <CRow id="Top20">
        <CCol md={6} className="mb-4">
          <h2>Top 20 Peores Clientes</h2>
          {wusers.map((wuser, index) => (
            <CCard key={index} className="mb-2">
              <CCardBody>
                <CCardTitle>{wuser.username}</CCardTitle>
                <div style={{ display: "flex" }}>
                  <StarRating rating={wuser.customer_rating} />
                </div>
                <CCardText>Rating: {wuser.customer_rating}</CCardText>
              </CCardBody>
            </CCard>
          ))}
        </CCol>
        <CCol md={6} className="mb-4">
          <h2>Top 20 Peores Ofertantes</h2>
          {wbidders.map((wbidder, index) => (
            <CCard key={index} className="mb-2">
              <CCardBody>
                <CCardTitle>{wbidder.username}</CCardTitle>
                <div style={{ display: "flex" }}>
                  <StarRating rating={wbidder.bidder_rating} />
                </div>
                <CCardText>Rating: {wbidder.bidder_rating}</CCardText>
              </CCardBody>
            </CCard>
          ))}
        </CCol>
      </CRow>
    </>
  );
};

export default Worst;
