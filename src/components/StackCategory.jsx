import { getTechByCategory } from "../utils/filterTech";

export default function StackCategory(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <div>
                {getTechByCategory(props.category).map(item => (
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}