import Image from 'next/image'
import Image1 from '../../public/images/services-1.png'
import Image2 from '../../public/images/services-2.png'
import Image3 from '../../public/images/services-3.png'

export default function Services() {

    const services = [
        {
            img: Image1,
            title: 'Personalized AI',
            des: 'AI technology ensures your preferences are met, creating personalized online food ordering experiences'
        },
        {
            img: Image2,
            title: 'Best Quality Food',
            des: 'Prepared with the utmost attention to hygiene, quality, and taste'
        },
        {
            img: Image3,
            title: 'Quick and Fast',
            des: 'A few taps, and your desired gourmet feast is on its way'
        },
    ]

    return (
        <section className='my-12 py-12 bg-black text-white'>
            <div className='container grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {services.map((item, index) => (
                    <div key={index} className='flex flex-col items-center text-center gap-4'>
                        <div
                            className='bg-[#282828] p-2 rounded-full'
                        >
                            <Image 
                                src={item.img}
                                alt='img'
                                className='w-40 h-40'
                            />
                        </div>
                        <h3 className='text-2xl font-bold'>{item.title}</h3>
                        <p>{item.des}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}