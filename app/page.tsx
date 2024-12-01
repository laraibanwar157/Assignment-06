import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Miniheader from "@/components/Miniheader";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import ExploreCourses from "@/components/Explore_courses";
import Achievement from "@/components/Achievement";
import Courses from "@/components/Courses";
import OurTeam from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      <div>
        <Miniheader/>
        <Header/>
        <Hero/>
        <Logo/>
        <ExploreCourses/>
        <Achievement/>
        <Courses/>
        <OurTeam/>
        <Testimonial/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;