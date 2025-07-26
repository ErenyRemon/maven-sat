import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
