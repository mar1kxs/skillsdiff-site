import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dota2" element={<DotaPage />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
