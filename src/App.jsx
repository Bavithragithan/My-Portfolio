import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
