import { Button } from "./button";
import { rectangleGallery } from "./image";

export function Gallery() {
    const topRow = rectangleGallery.slice(0, 4);
    const bottomRow = rectangleGallery.slice(4, 7);

    return (
        <section className="flex flex-col gap-10 items-center justify-center my-20">
            <div className="w-xl flex flex-col items-center gap-7 text-center">
                <h1 className="text-5xl">
                    Gallery
                </h1>
                <p className="text-xl leading-8">
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
            </div>
            <div className="w-6xl flex flex-col gap-11">
                <div className="grid grid-cols-4 justify-items-center">
                    {topRow.map(item => (
                        <img key={item.id} src={item.src} alt={item.alt} className="rounded-xl"/>
                    ))}
                </div>
                <div className="grid grid-cols-3 justify-items-center">
                    {bottomRow.map(item => (
                        <img key={item.id} src={item.src} alt={item.alt} className="rounded-xl"/>
                    ))}
                </div>
            </div>
            <Button  text="See more"/>
        </section>
    )
}