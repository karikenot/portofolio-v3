import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import ProjectCard from "./ProjectCard";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            setLoading(true);
            const { data, error } = await supabase
                .from('projects')
                .select('*');

            if (error) {
                console.error("ERROR MESSAGE!! PLEASE READ:", error)
            } else {
                setProjects(data || [])
            }
            setLoading(false);
        }
        fetchProjects();
        }, []);

    return(
        <div className="bg-kari-body flex flex-col border border-kari-border duration-250 ease-in-out m-4 md:m-10 p-4 rounded-2xl justify-between items-center gap-8 animate-slide-down">
            <div className="flex flex-col w-full gap-2">
                <h2 className="font-semibold text-xl">things i made</h2>
                <hr className="border-0.5 border-kari-border w-full" />
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
                {projects.map((item) => 
                    <ProjectCard 
                    name={item.name}
                    desc={item.desc}
                    demo_link={item.demo_link}
                    repo_link={item.repo_link}
                    tech={item.technology}
                    />
                )}
            </div>
        </div>
    );
}