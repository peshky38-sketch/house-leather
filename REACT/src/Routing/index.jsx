import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import CrazyRoute from "./CrazyRoute";
import PageNotFound from "./404";    


function Routing() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crazy" element={<CrazyRoute />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default Routing;