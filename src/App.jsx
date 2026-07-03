import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import LoadingScreen from "./components/LoadingScreen"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App(){

  const [projectData, setProjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData(){
      setIsLoading(true);
      const { data, error } = await supabase.from('projects').select('*');
      setIsLoading(false);
      if (error){
        console.error("eror fetching data:", error);
      } else {
        setProjectData(data);
      }
    }
    getData();
  }, [])

  if (isLoading){
    return (
      <LoadingScreen />
    )
  }

  return (
    <div className="min-h-screen bg-kari-body text-white">
      <Header />
      <Hero />
      <h1>all my projects</h1>
      {projectData.map((item) =>
        <div key={item.id} style={{ border: '1px solid black', margin: '10px' }}>
          <h2>{item.name}</h2>
          <p>{item.desc}</p>
          <a href={item.link}>project link</a>
        </div>
      )}
    </div>
  )
}

export default App;