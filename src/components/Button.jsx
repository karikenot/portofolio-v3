export const Button = (props) => {
    return(
        <a href={props.href} className="flex gap-3 select-none justify-center items-center bg-kari-button text-white border hover:bg-kari-button-hover border-kari-border rounded px-3 py-1 duration-250 hover:text-glow hover:scale-105">
            {props.name}
        </a>
    );
};