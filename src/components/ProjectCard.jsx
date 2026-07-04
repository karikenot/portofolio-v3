import { Button } from "./Button";
import { GitHubIcon, LiveIcon, ExternalIcon } from "./Icons";

export default function ProjectCard(props) {
    return(
        <div key={props.id} className="p-4 border border-kari-border rounded">
            <h3 className="text-lg font-semibold md-2">{props.name}</h3>
            <p className="">{props.desc}</p>
            <div className="mt-3 select-none flex">
                <span className="flex justify-center items-center px-3 py-1 border border-kari-border rounded-full duration-250 hover:text-glow hover:scale-105">
                    <p>{props.tech}</p>
                </span>
            </div>
            <div className="flex gap-2 mt-4">
                <Button href={props.repo_link} name={[<GitHubIcon width="20"/>, <p>github repo</p>]}/>
                <Button href={props.demo_link} name={[<ExternalIcon width="20"/>, <p>live demo</p>]}/>
            </div>
            
        </div>
    );
}