"use client"
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";

export default function Home() {

  return (
    <div>
      
      {/* Hero Section */}
      <Hero/>

      {/* Search Bar & Categories */}
      <CategorySearch/>

      {/* Popular Doctor List */}
      <DoctorList/>
      
    </div>
  );
}
