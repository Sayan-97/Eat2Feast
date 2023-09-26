import Image from 'next/image'
import React from 'react'
import Impact1 from '../../public/images/Impact-1.png'
import Impact2 from '../../public/images/Impact-2.png'
import Impact3 from '../../public/images/Impact-3.png'
import Impact4 from '../../public/images/Impact-4.png'

export default function Impact() {

    const impacts = [
        {
            color: 'orange',
            img: Impact1,
            title: 'Your Personalized Assistant',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
        {
            color: 'pink',
            img: Impact2,
            title: 'Set Goals',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
        {
            color: 'pink',
            img: Impact3,
            title: 'Set Your Preferences',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
        {
            color: 'orange',
            img: Impact4,
            title: 'Health Tracker',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
    ]

    return (
        <section className='py-12'>
            <div className='container space-y-20'>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-4xl font-bold'>How we impact your life</h2>
                    <p className='text-xl lg:w-[60%] text-center'>Elevate your online food ordering moments with Eat2Feast and experience a symphony of flavors powered by innovation.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    {impacts.map((item, index) => (
                        <div key={index} className={`${item.color === 'orange' ? 'bg-[#FFC001] bg-opacity-20' : 'bg-[#FF8001] bg-opacity-20'} p-12 space-y-6 rounded-2xl`}>
                            <Image 
                                src={item.img}
                                alt='img'
                                className='w-52 h-52'
                            />
                            <h3 className='text-2xl font-bold'>{item.title}</h3>
                            <p className='text-lg'>{item.des}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
