import { Button } from "./Button";
import { GithubIcon, EmailIcon } from "./Icons";

export default function Hero() {
    return(
        <div className="bg-kari-accent flex border h-75 border-kari-border duration-250 ease-in-out m-4 md:m-10 p-4 md:p-10 rounded-2xl justify-center items-center gap-8 animate-slide-down">
            <div className="flex flex-col gap-6 justify-center">
                <h1 className="text-4xl font-bold duration-250 hover:text-glow hover:scale-105">not relly good progrmr</h1>
                <div className="flex gap-4 justify-start md:justify-center flex-col md:flex-row">
                    <Button href="https://github.com/karikenot" name={[<GithubIcon width="20"/>, <p>see guhitb</p>]} />
                    <Button href="mailto:karikenot@gmail.com" name={[<EmailIcon width="20"/>, <p>emeil me</p>]} />
                </div>
            </div>
        </div>
    );
}