import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Image from "./Components/Image";
import "./Components/FormPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Image />
      <Home />
      <Footer />
    </div>
  );
}
export default App;
