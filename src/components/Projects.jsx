import { supabase } from "../utils/supabaseClient";
import ProjectCard from "./ProjectCard";

export default function Projects() {
 return(
    <div className="bg-kari-body flex flex-col border border-kari-border duration-250 ease-in-out m-4 md:m-10 p-4 rounded-2xl justify-between items-center gap-8 animate-slide-down">
        <div className="flex flex-col w-full gap-2">
            <h2 className="font-semibold text-xl">things i made</h2>
            <hr className="border-0.5 border-kari-border w-full" />
        </div>
        <div className="w-full grid grid-cols-2">
            <ProjectCard name="DENDITASK" desc="sebuah aplikasi yang dibuat untuk menghibur nenek dendi subahanallah" tech="JavaScript" />
        </div>
    </div>
 );
}