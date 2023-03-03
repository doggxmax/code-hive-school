import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import About from "./components/routes/about/about.component";
import Reviews from "./components/routes/reviews/reviews.component";
import Programm from "./components/routes/programm/programm.component";
import Rates from "./components/routes/rates/rates.component";
import Gallery from "./components/routes/gallery/gallery.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/programm" element={<Programm />}></Route>
        <Route path="/rates" element={<Rates />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
