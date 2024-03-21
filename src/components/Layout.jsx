import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-r from-amber-600 to-amber-800">
      <Nav />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
