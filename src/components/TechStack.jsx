import { getTechByCategory } from "../utils/filterTech";

export default function TechStack() {
    return(
        <div className="bg-kari-accent flex flex-col border border-kari-border duration-250 ease-in-out m-4 md:m-10 p-4 rounded-2xl justify-between items-center gap-8 animate-slide-down">
            <div className="flex flex-col w-full gap-2">
                <h2 className="font-semibold text-xl">stuff i know, or u call it techstack</h2>
                <hr className="border-0.5 border-kari-border w-full" />
            </div>
            <div className="grid grid-cols-4">
                <div>
                    <h3>languages</h3>
                    {getTechByCategory('language').map(item => (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    ))}
                </div>
                <div>
                    <h3>frontend</h3>
                    {getTechByCategory('frontend').map(item => (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    ))}
                </div>
                <div>
                    <h3>backend</h3>
                    {getTechByCategory('backend').map(item => (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    ))}
                </div>
                <div>
                    <h3>infrastructure</h3>
                    {getTechByCategory('infrastructure').map(item => (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}