import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Troubleshooting from "./pages.jsx/troubleshooting";
import Faqs from "./pages.jsx/faqs";
import Contact from "./pages.jsx/Contact";
import Layout from "./Components/comanComponent/Layout";

function App() {
  return (
    <Router>

        <Routes>
        
          <Route  element={<Layout />}>
            <Route index element={<Troubleshooting />} /> 
            <Route path="troubleshooting" element={<Troubleshooting />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
