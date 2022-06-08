import "./App.css";
import Itemlist from "./components/Itemlist";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
    <Navbar />
    <Home />
    <Itemlist />
    <Footer />
    </div>
  );
}

export default App;
