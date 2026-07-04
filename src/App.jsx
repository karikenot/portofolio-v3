import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen"
import Header from "./components/Header"
import Hero from "./components/Hero"
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App(){

  return (
    <div className="min-h-screen bg-kari-body text-white">
      <Header />
      <Hero />
      <TechStack /> 
      <Projects />
    </div>
  )
}

export default App;