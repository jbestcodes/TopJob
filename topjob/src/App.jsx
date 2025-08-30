import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/ui/Nav";
import HomePage from "./pages/Home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Structure from "./pages/Structure"; // If you want the structure page

function App() {
  return (
    <BrowserRouter basename="/TopJob">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/structure" element={<Structure />} /> {/* Optional */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
