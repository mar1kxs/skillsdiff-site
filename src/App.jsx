import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import Nav from "./Nav";
import Main from "./pages/MainPage";
import "./App.css";
import RningLine from "./RningLine";
import Footer from "./Footer";
import DotaPage from "./pages/DotaPage";

function App() {
  return (
    <>
      <RningLine />
      <div className="app-container">
        <Nav />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dota2" element={<DotaPage />}></Route>
          </Routes>
        </HashR>
        <Footer />
      </div>
    </>
  );
}

export default App;
