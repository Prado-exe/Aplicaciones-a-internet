import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import EventosPage from "./componentes/Eventospage.jsx";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/footbar";

function MainEventos() {
  return (
    <Router>
      {/* Navbar siempre visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/eventos" element={<EventosPage />} />
      </Routes>


      {/* Footer siempre visible */}
      <Footer />
    </Router>
  );
}

export default MainEventos;
