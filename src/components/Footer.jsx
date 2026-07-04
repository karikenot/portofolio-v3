export default function Footer() {
    return(
        <footer className="h-32 flex flex-col justify-center items-center bg-kari-accent border-t border-kari-border">
            <p>© {new Date().getFullYear()} karikenot, all rights reserved</p>
            <p>made with react and supabase, hosted on netlify</p>
        </footer>
    )
}