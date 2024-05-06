import React, { useEffect, useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from "@coreui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useWBidders } from "../context/worstB";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
  const { wbidders, getwBidders, wusers, getwUsers } = useWBidders();
  const [userRatingSum, setUserRatingSum] = useState(0);
  const [bidderRatingSum, setBidderRatingSum] = useState(0);

  useEffect(() => {
    getwBidders();
    getwUsers();
  }, []);

  useEffect(() => {
    // Calculating sum of user ratings
    const userSum = wusers.reduce((acc, curr) => acc + curr.customer_rating, 0);
    setUserRatingSum(userSum);

    // Calculating sum of bidder ratings
    const bidderSum = wbidders.reduce(
      (acc, curr) => acc + curr.bidder_rating,
      0
    );
    setBidderRatingSum(bidderSum);
  }, [wusers, wbidders]);

  if (!Array.isArray(wbidders)) {
    return <p>Cargando...</p>;
  }

  // Calculate averages
  const userAverage = wusers.length > 0 ? userRatingSum / wusers.length : 0;
  const bidderAverage =
    wbidders.length > 0 ? bidderRatingSum / wbidders.length : 0;
  const overallAverage =
    (userRatingSum + bidderRatingSum) / (wusers.length + wbidders.length);

  // Chart data
  const labels = ["Customer Rating", "Bidder Rating", "Overall Average"];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [
          userAverage.toFixed(2),
          bidderAverage.toFixed(2),
          overallAverage.toFixed(2),
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Promedio de Ratings",
      },
    },
  };

  return (
    <>
      <br />
      {/* Sección de gráfica de ratings */}
      <CRow id="Top20">
        <CCol md={6} className="mb-4">
          <h2>Usuarios Activos</h2>
          <CTable striped responsive="sm">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Nombre</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {wusers.map((wuser, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{wuser.username}</CTableDataCell>
                </CTableRow>
              ))}
              {wbidders.map((wbidder, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{wbidder.username}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
      <CCard>
        <CCardBody>
          <CCardTitle>Promedio de Ratings</CCardTitle>
          <Line options={options} data={data} />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Stats;
