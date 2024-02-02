
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}

export default Layout;
