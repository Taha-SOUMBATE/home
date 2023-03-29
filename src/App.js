import React from "react";
import Home from "./page/Home";

import { Routes, Route } from "react-router-loading";

import Contact from "./page/Contact";

import Header from "./components/Header";
import Contact2 from "./page/Contact2";

function App() {
  return (
    <>
      <Header />
      <Routes maxLoadingTime={1500}>
        <Route path="/router" element={<Home />} loading />
        <Route path="/contact-us" element={<Contact />} loading />
        <Route path="/contact2-us" element={<Contact2 />} loading />
        <Route path="/contact-us" element={<Contact />} loading />
        <Route path="/contact-us" element={<Contact />} loading />
      </Routes>
    </>
  );
}

export default App;
