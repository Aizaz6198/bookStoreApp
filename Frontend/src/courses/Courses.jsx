import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import { BookingCard } from "../components/BookingCard";
function Courses() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Course />
      </div>
      <div><BookingCard/></div>
      <Footer />
    </>
  );
}

export default Courses;
