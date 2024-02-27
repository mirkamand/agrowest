import HeaderSlider from "./components/HeaderSlider";
import MainNavbar from "./components/MainNavbar";
import About from "./components/About";
import Products from "./components/Products";
import Blogs from "./components/Blogs";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MainNavbar />
      <HeaderSlider />
      <About />
      <Products />
      <Blogs />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
