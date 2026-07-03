import data from '../data/techStack.json';

const categories = ["language", 'frontend', 'backend', 'devops', 'infrastructure']

console.log(data);

export default function TechStack() {
    return(
        <div className="bg-kari-accent flex border border-kari-border duration-250 ease-in-out m-4 md:m-10 p-4 rounded-2xl justify-between items-center gap-8 animate-slide-down">
            <div className="flex flex-col w-full gap-2">
                <h2 className="font-semibold text-xl">stuff i know, or u call it techstack</h2>
                <hr className="border-0.5 border-kari-border w-full" />
            </div>
            <div>
                <div>
                    {data.map}
                </div>
            </div>
        </div>
    );
}