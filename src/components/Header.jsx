import { GitHubIcon, XIcon, InstagramIcon } from "./Icons";

export default function Header() {
    return(
        <div className="bg-kari-accent flex border border-kari-border duration-250 ease-in-out m-4 md:m-10 p-4 rounded-2xl justify-between items-center gap-8 animate-slide-down">
            <h1 className="font-bold text-2xl">hi im kari :3</h1>
            <nav className="flex gap-6">
                <a href="https://github.com/karikenot" className="flex gap-3 duration-250 ease-in-out hover:-translate-y-1 hover:text-gray-200 hover:text-glow">
                    <GitHubIcon />
                    <p className="hidden md:block">karikenot</p>
                </a>
                <a href="https://x.com/karikenot" className="flex gap-3 duration-250 ease-in-out hover:-translate-y-1 hover:text-gray-200 hover:text-glow">
                    <XIcon />
                    <p className="hidden md:block">@karikenot</p>
                </a>
                <a href="https://www.instagram.com/karikenot/" className="flex gap-3 duration-250 ease-in-out hover:-translate-y-1 hover:text-gray-200 hover:text-glow">
                    <InstagramIcon />
                    <p className="hidden md:block">karikenot</p>
                </a>
            </nav>
        </div>
    );
};