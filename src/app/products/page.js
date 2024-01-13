"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products/Products";

function page() {
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default page;
