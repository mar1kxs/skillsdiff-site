import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Main from "./pages/MainPage";
import "./App.css";
import RningLine from "./RningLine";
import Footer from "./Footer";
import DotaPage from "./pages/DotaPage";
import ValorantPage from "./pages/ValorantPage";
import "./styles/media.css";

function App() {
  return (
    <HashRouter>
      <RningLine />
      <div className="app-container">
        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dota2" element={<DotaPage />} />
          <Route path="/valorant" element={<ValorantPage />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
