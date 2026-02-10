import pin from '../assets/pin.svg'
import phone from '../assets/phone.svg'
import x from '../assets/x.svg'
import fb from '../assets/fb.svg'
import i from '../assets/in.svg'

export function Footer(){
    return (
        <footer className="w-4xl m-auto flex flex-row justify-between gap-40 my-20">
            <div className="flex gap-20">
                <div className="space-y-10">
                    <h2 className="text-xl font-medium">Fingertipe</h2>
                    <ul className="font-medium space-y-4">
                        <li>Home</li>
                        <li>Examples</li>
                        <li>Pricing</li>
                        <li>Updates</li>
                    </ul>
                </div>
                <div className="space-y-10">
                    <h2 className="text-xl font-medium">Resources</h2>
                    <ul className="font-medium space-y-4">
                        <li>Home</li>
                        <li>Examples</li>
                        <li>Pricing</li>
                        <li>Updates</li>
                    </ul>
                </div>
                <div className="space-y-10">
                    <h2 className="text-xl font-medium">About</h2>
                    <ul className="font-medium space-y-4">
                        <li>Home</li>
                        <li>Examples</li>
                        <li>Pricing</li>
                        <li>Updates</li>
                    </ul>
                </div>
            </div>
            <div className='space-y-8'>
                <div className="font-medium space-y-5">
                    <div className='flex items-center gap-1'>
                        <figure>
                            <img src={pin} alt="" />
                        </figure>
                        <p>7480 Mockingbird Hill undefined</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <figure>
                            <img src={phone} alt="" />
                        </figure>
                        <p>(239) 555-0108</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <figure>
                        <img src={x} alt="" />
                    </figure>
                    <figure>
                        <img src={fb} alt="" />
                    </figure>
                    <figure>
                        <img src={i} alt="" />
                    </figure>
                </div>
            </div>
        </footer>
    )
}