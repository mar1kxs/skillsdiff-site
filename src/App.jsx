import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Main from "./pages/MainPage";
import "./App.css";
import RningLine from "./RningLine";
import Footer from "./Footer";
import DotaPage from "./pages/DotaPage";

function App() {
  return (
    <HashRouter>
      <RningLine />
      <div className="app-container">
        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dota2" element={<DotaPage />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
