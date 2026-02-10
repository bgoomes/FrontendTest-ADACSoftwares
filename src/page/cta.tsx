import { Button } from "../components/button";

import screen from "../assets/LineChart1.png"

export function Cta(){
    return (
        <section className="flex flex-col items-center gap-6 my-20">
            <div className="flex flex-row justify-center gap-20 rounded-4xl bg-background-secondary w-5xl">
                <div className="w-1/2 flex flex-col gap-8 px-20 py-8 justify-center">
                    <h1 className="text-4xl">
                       OpenType features and Variable fonts
                    </h1>
                    <Button text="Try For Free" variant="secondary" />
                </div>
                <figure>
                    <img src={screen} alt="CTA Image" className="w-full rounded-4xl"/>
                </figure>
            </div>
        </section>
    )
}