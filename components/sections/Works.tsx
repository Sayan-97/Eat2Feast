import Image from 'next/image'
import React from 'react'
import Works1 from '../../public/images/Works1.png'
import Works2 from '../../public/images/Works2.png'
import Works3 from '../../public/images/Works3.png'

export default function Works() {

    const steps = [
        {
            img: Works1,
            title: 'Set your food preference',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
        {
            img: Works1,
            title: 'Set your food preference',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
        {
            img: Works1,
            title: 'Set your food preference',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
    ]

    return (
        <section className='my-12 py-12 bg-[#6A6C6D] bg-opacity-[0.08]'>
            <div className='container space-y-20'>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-4xl font-bold'>How it works</h2>
                    <p className='text-xl lg:w-[60%] text-center'>Elevate your online food ordering moments with Eat2Feast and experience a symphony of flavors powered by innovation.</p>
                </div>
                <div className='grid grid-cols-12 gap-4'>
                    {steps.map((item, index) => (
                        <div key={index} className={`bg-white rounded-2xl p-8 ${index === 0 ? 'col-span-12 flex max-lg:flex-col-reverse items-center justify-between gap-20' : 'col-span-12 lg:col-span-6 flex flex-col-reverse items-center gap-8'}`}>
                            <div className='space-y-4'>
                                <h2 className='text-5xl font-black opacity-[0.2]'>{index+1}</h2>
                                <h3 className='text-2xl font-bold'>{item.title}</h3>
                                <p className='text-lg opacity-[0.8]'>{item.des}</p>
                            </div>
                            <Image 
                                src={item.img}
                                alt='img'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}