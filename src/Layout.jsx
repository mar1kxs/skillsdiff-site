import Nav from "./Nav";
import Footer from "./Footer";
import RningLine from "./RningLine";

const Layout = ({ children }) => {
  return (
    <>
      <RningLine />

      <div className="app-container">
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
