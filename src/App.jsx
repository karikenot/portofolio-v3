import { useEffect, useState } from "react";
import { supabase } from "./utils/supabaseClient";
import LoadingScreen from "./components/LoadingScreen"
import Header from "./components/Header"
import Hero from "./components/Hero"
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App(){
  const [ isLoading, setIsLoading ] = useState(true);
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    async function loadAllData() {
      try{
        const { data, error } = await supabase.from('projects').select('*');
        if (error) throw error;

        setProjects(data || [])
        setIsLoading(false)
      } catch(error){
        console.error('ERROR COOOIIII!! PLZ READ:', error);
        setIsLoading(false);
      }
    }
    loadAllData();
  }, []);

  if (isLoading){
    return(<LoadingScreen />);
  }

  return (
    <div className="min-h-screen bg-kari-body text-white">
      <Header />
      <Hero />
      <TechStack /> 
      <Projects projects={projects}/>
      <Footer />
    </div>
  )
}

export default App;