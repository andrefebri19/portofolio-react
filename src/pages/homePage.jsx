import "../asset/style/style.css";
import Navbar from "../component/navbar";
import Home from "../component/home";
import About from "../component/about";
import Hobby from "../component/hobby";
import Contact from "../component/contact";
import Footer from "../component/footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Hobby />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
