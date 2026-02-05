import { Button } from "./button";

export function Nav(){
    return (
        <header className="h-29 flex items-center">
            <div className="flex items-center justify-between gap-32 px-7">
                <figure>
                    <img src="/logo.svg" alt="Logo" />
                    <figcaption className="sr-only">Logo figma land</figcaption>
                </figure>
                <nav>
                    <ul className="flex gap-8">
                        <li>Home</li>
                        <li>Product</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <Button text="Login" className="ml-24"/>
            </div>
        </header>
    )
}