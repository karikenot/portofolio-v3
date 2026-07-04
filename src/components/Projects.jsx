import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {

    return(
        <div className="bg-kari-body flex flex-col border border-kari-border duration-250 ease-in-out m-4 md:m-10 p-4 rounded-2xl justify-between items-center gap-8 animate-slide-down">
            <div className="flex flex-col w-full gap-2">
                <h2 className="font-semibold text-xl">things i made</h2>
                <hr className="border-0.5 border-kari-border w-full" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
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