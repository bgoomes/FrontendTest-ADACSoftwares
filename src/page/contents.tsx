import { Button } from '../components/button'

import dassbord from '../assets/BoardsNotifications.png'
import macbook from '../assets/Group3.png'

export function Contents() {
    return (
        <section className="flex flex-col gap-10 items-center justify-center my-20">
            <div className="w-xl flex flex-col items-center gap-7 text-center">
                <h1 className="text-5xl">
                    Contents
                </h1>
                <p className="text-xl leading-8">
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
            </div>
            <div className='w-5xl flex flex-row gap-7'>
                <article className='w-1/2 bg-light rounded-xl border border-[#d3d3d3] border-solid flex flex-col items-center gap-2 py-10'>
                    <h2 className='text-first text-xl font-medium'>
                        Work
                    </h2>
                    <p className='w-70 text-secondary text-center'>
                        Ever wondered if you're too reliant on a client for work? Slate helps you identify.
                    </p>
                    <Button text='Sign Up' variant='secondary' className='my-14' />
                    <figure>
                        <img src={macbook} alt="" />
                    </figure>
                </article>
                <article className='w-1/2 bg-light rounded-xl border border-[#d3d3d3] border-solid flex flex-col items-center gap-2 py-10'>
                    <h2 className='text-first text-xl font-medium'>
                        Design with real data
                    </h2>
                    <p className='w-70 text-secondary text-center'>
                        Ever wondered if you're too reliant on a client for work? Slate helps you identify.
                    </p>
                    <Button text='Try For Free' variant='secondary' className='mt-9'/>
                    <figure>
                        <img src={dassbord} alt="" />
                    </figure>
                </article>
            </div>
        </section>
    )
}