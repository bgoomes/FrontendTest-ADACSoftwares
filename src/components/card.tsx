import type { CardProps } from "./testimonial";

export function Card({ src, alt, name, role, description }: CardProps) {
    return (
        <div className="space-y-8 p-10 rounded-xl border border-[#dedede]">
            <div className="flex gap-3">
                <div>
                    <figure>
                        <img src={src} alt={alt} />
                    </figure>
                </div>
                <div className="font-medium">
                    <p>{name}</p>
                    <span>{role}</span>
                </div>
            </div>
            <p>
                {description}
            </p>
         </div>
    )
}