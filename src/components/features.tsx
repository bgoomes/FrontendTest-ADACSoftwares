import screens from '../assets/screens2.png'
import icon from '../assets/icon.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'

export function Features() {
    return (
        <section className="flex flex-col gap-20 items-center justify-center my-20">
            <div className="w-xl flex flex-col items-center gap-7 text-center">
                <h1 className="text-5xl">
                    FEATURES
                </h1>
                <p className="text-xl">
                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                </p>
            </div>
            <div className='w-5xl'>
                <article className="flex flex-row gap-7">
                    <figure className='w-3/4 shadow-sm'>
                        <img src={screens} alt="screens" />
                    </figure>
                   <div className='w-2/6 flex flex-col gap-16 py-16'>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-3'>
                                <figure>
                                    <img src={icon} alt="icon1" />
                                </figure>
                                <h2 className="w-38 text-xl">
                                    A single source of truth
                                </h2>  
                            </div>
                            <p className="text-md">
                                Slate allows you to easily share your availability with others, and integrate with third-party calendars.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-3'>
                                <figure>
                                    <img src={icon2} alt="icon2" />
                                </figure>
                                <h2 className="w-24 text-xl">
                                    Intuitive interface
                                </h2>  
                            </div>
                            <p className="">
                                When you add work to your  Slate calendar we automatically calculate useful insights 
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-3'>
                                <figure>
                                    <img src={icon3} alt="icon3" />
                                </figure>
                                <h2 className="text-xl">
                                   Or with rules
                                </h2>  
                            </div>
                            <p className="text-md">
                                When you add work to your Slate calendar we automatically calculate useful insights 

                            </p>
                        </div>
                   </div>
                </article>
            </div>
        </section>
    )
}