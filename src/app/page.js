"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Work from "./components/Work";
import Worktime from "./components/Worktime";

// imports components

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Service/>
      <Worktime/>
      <Work/>
      <Footer/>
    </>
  );
}
