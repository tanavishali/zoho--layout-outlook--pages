import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Troubleshooting from "./pages.jsx/troubleshooting";
import Faqs from "./pages.jsx/faqs";
import Contact from "./pages.jsx/Contact";
import Process_management from "./pages.jsx/process_management";
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
            <Route path="process_management" element={<Process_management />} />

          </Route>
        </Routes>
    </Router>
  );
}

export default App;
