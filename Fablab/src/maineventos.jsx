import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import EventosPage from "./componentes/Eventospage.jsx";

function MainEventos() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/eventos" element={<EventosPage />} />
      </Routes>
    </Router>
  );
}

export default MainEventos;
