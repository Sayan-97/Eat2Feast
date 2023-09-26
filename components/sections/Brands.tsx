import Image from 'next/image'
import React from 'react'
import BrandsImg from '../../public/images/brands.png'

export default function Brands() {

    const brands = [
        {
            img: BrandsImg,
            head: 'INDIAN GRAVIES',
            title: 'Salt affairs',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
        {
            img: BrandsImg,
            head: 'INDIAN GRAVIES',
            title: 'Salt affairs',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
        {
            img: BrandsImg,
            head: 'INDIAN GRAVIES',
            title: 'Salt affairs',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
        {
            img: BrandsImg,
            head: 'INDIAN GRAVIES',
            title: 'Salt affairs',
            des: 'Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation.'
        },
    ]

    return (
        <section className='py-12'>
            <div className='container space-y-20'>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='text-4xl font-bold'>Brands Personalized</h2>
                    <p className='text-xl lg:w-[60%] text-center'>Elevate your online food ordering moments with Eat2Feast and experience a symphony of flavors powered by innovation.</p>
                </div>
                <div className='space-y-12'>
                    {brands.map((item, index) => (
                        <div key={index} className={`lg:w-[70%] mx-auto flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} max-md:flex-col items-center justify-center gap-20`}>
                            <Image 
                                src={item.img}
                                alt='img'
                                className='w-80 h-80 rounded-full object-cover'
                            />
                            <div className='space-y-4'>
                                <h5>{item.head}</h5>
                                <h2 className='text-4xl font-bold'>{item.title}</h2>
                                <p className='text-2xl'>{item.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
