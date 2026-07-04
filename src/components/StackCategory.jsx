import { getTechByCategory } from "../utils/filterTech";
import * as Icon from './Icons'

export default function StackCategory(props){
    return(
        <div className="w-full p-2 bg-kari-body border border-kari-border rounded-lg">
            <h3 className="text-lg font-semibold">{props.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2">
                {getTechByCategory(props.category).map(item => {
                    const Icons = Icon[item.icon]
                    
                    return(
                        <div key={item.id} className="flex w-full justify-center items-center text-center flex-col">
                            <a href={item.website} target="_blank" className="w-full flex flex-col items-center justify-center p-2 border duration-250 border-kari-border hover:bg-kari-button hover:scale-105 rounded hover:text-glow">
                                {Icons ? <Icons width="30" /> : null}
                                <p className="font-light">{item.name}</p>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}