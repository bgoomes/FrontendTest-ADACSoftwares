import screen from "../assets/screens.png";

export function Hero() {
    return (
        <section className="flex flex-col gap-20 items-center justify-center mt-12">
            <div className="w-xl flex flex-col items-center gap-4 text-center">
                <h1 className="w-xl text-7xl">
                Work at the speed of thought 
                </h1>
                <p className="text-xl">
                  Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.  
                </p>
            </div>
            <div className="flex gap-9">
                <button className="px-9 py-4 bg-primary">Try For Free</button>
                <button className="px-9 py-4 border">Learn More</button>
            </div>

            <figure className="-mt-5">
                <img src={screen} alt="screen" className="w-full"/>
            </figure>
        </section>
    )
}