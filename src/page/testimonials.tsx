import { Card } from "../components/card";
import { avatar } from "../components/testimonial";


export function Testimonials(){
    return (
        <section className="flex flex-col gap-10 items-center justify-center my-20">
            <div className="w-xl flex flex-col items-center gap-7 text-center">
                <h1 className="text-5xl">
                    Testimonials
                </h1>  
            </div>
            <div className="w-4xl grid grid-cols-2 gap-5 p-5">
                {avatar.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </section>
    )
}