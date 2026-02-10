import screen from "../assets/screens.png";
import { Button } from "../components/button";

export function Hero() {
    return (
        <section className="relative w-full">
            <section className="flex flex-col gap-20 items-center justify-center mt-12">
                <div className="w-xl flex flex-col items-center gap-4 text-center">
                    <h1 className="text-7xl">
                    Work at the speed of thought 
                    </h1>
                    <p className="text-xl">
                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.  
                    </p>
                </div>
                <div className="flex gap-9">
                    <Button text="Try For Free" variant="secondary" />
                    <Button text="Learn More" />
                </div>

                <figure className="-mt-5">
                    <img src={screen} alt="screen" className="w-full"/>
                </figure>
            </section>
            <div className="z-10 absolute bottom-0 w-full h-80 bg-linear-to-b from-black/0 to-linear"/>
        </section>
    )
}