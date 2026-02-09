import { Button } from "./button";
import { gallery } from "./image";

export function Partners() {
    return (
        <section className="flex flex-col gap-10 items-center justify-center my-20">
            <div className="w-xl flex flex-col items-center gap-7 text-center">
                <h1 className="text-5xl">
                    Partners
                </h1>
                <p className="text-xl leading-8">
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="flex gap-16 justify-center my-13">
                    {gallery.map(item => (
                        <img key={item.id} src={item.src} alt={item.alt} />
                    ))}
                </div>
                <Button  text="All Partners"/>
            </div>
        </section>
    )
}