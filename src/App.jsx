import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";

import { LoginPage } from "./pages/LoginPage";
import Dashboard from "./pages/DashBoard";
import { PruebasProvider } from "./context/tasksContext";
import AppFooter from "./components/AppFooter";
import { BidderProvider } from "./context/top";
import { UserProvider } from "./context/topUser";
import { WorstBidderProvider } from "./context/worstB";
import Worst from "./pages/Worst";
import Stats from "./pages/Stats";

function App() {
  return (
    <AuthProvider>
      <BidderProvider>
        <UserProvider>
          <WorstBidderProvider>
            <BrowserRouter>
              <main className="container content-container mx-auto px-10 md:px-0">
                <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />

                  <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/worst" element={<Worst />} />
                    <Route path="/stats" element={<Stats />} />
                  </Route>
                </Routes>
                <AppFooter></AppFooter>
              </main>
            </BrowserRouter>
          </WorstBidderProvider>
        </UserProvider>
      </BidderProvider>
    </AuthProvider>
  );
}

export default App;
