import Button from '../shared/Button'
import Image from 'next/image'

import Burger from '../../public/images/burger.png'
import Fries from '../../public/images/fries.png'

export default function Hero() {
    return (
        <section className="w-full py-12 flex items-center">
            <div className="container grid lg:grid-cols-2 items-center gap-12">
                <div className='space-y-6'>
                    <h1 className='text-6xl font-bold'><span className='bg-custom-gradient text-transparent bg-clip-text'>Eat2Feast</span> - Your Personalized Food Assistant!</h1>
                    <p className='text-2xl'>Register today and win 50% off on<br /> your first order</p>
                    <Button
                        name='Register Now'
                    />
                </div>
                <div className='space-y-4'>
                    <div className='w-20 h-20 inline-flex bg-customYellowColor items-center justify-center rounded-full'>
                        <h2 className='text-4xl font-black'>AI</h2>
                    </div>
                    <div className='bg-black bg-opacity-[4%] px-8 py-6 rounded-2xl rounded-tl-lg'>
                        <h4 className='text-2xl font-bold'>Food Recommendation for you today</h4>
                    </div>
                    <div className='bg-black bg-opacity-[4%] px-8 py-6 rounded-2xl rounded-tl-lg grid md:grid-cols-2 gap-4'>
                        <div className='bg-white p-4 rounded-2xl flex flex-col gap-2'>
                            <div className='bg-[#f9f9f9] flex-grow rounded-2xl p-2'>
                                <Image
                                    src={Burger}
                                    alt='img'
                                    className='w-full h-full'
                                />
                            </div>
                            <h4 className='text-lg font-bold'>Big Size Burger</h4>
                            <p className='text-sm font-medium'>Burger filled with veggies, ham tomato and big bun.</p>
                            <div className='bg-[#f9f9f9] rounded-2xl px-2 py-3 flex items-center justify-center'>
                                <p className='text-sm font-bold'>Add to cart</p>
                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-2xl flex flex-col gap-2'>
                            <div className='bg-[#f9f9f9] flex-grow rounded-2xl p-2'>
                                <Image
                                    src={Fries}
                                    alt='img'
                                    className='w-full h-full'
                                />
                            </div>
                            <h4 className='text-lg font-bold'>Fish and Chips</h4>
                            <p className='text-sm font-medium'>Burger filled with veggies, ham tomato and big bun.</p>
                            <div className='bg-[#f9f9f9] rounded-2xl px-2 py-3 flex items-center justify-center'>
                                <p className='text-sm font-bold'>Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}