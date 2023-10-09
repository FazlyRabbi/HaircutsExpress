"use client";
import React from "react";
import About from "../components/About/About";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div>
       <Header/>
      <About/>
      <Footer/>
    </div>
  );
}
