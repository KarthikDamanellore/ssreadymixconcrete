import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Updates from "./pages/Updates/Updates";
import Gallery from "./pages/Gallery/Gallery";
import More from "./pages/More/More";
import Contact from "./pages/Contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<Products/>} />
          <Route path="/updates" element={<Updates/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/more" element={<More />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
