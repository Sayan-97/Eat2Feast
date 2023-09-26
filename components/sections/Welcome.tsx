import Image from "next/image";
import BGYellow from '../../public/images/YellowRect.png'
import WelcomeImg from '../../public/images/welcomeImage.png'

export default function Welcome() {

    return (
        <section className="py-12">
            <div className="container relative px-12 grid lg:grid-cols-2 items-center gap-12">
                <div className="absolute inset-0 -z-10">
                    <Image 
                        src={BGYellow}
                        alt='img'
                        fill={true}
                    />
                </div>
                <Image 
                    src={WelcomeImg}
                    alt="img"
                />
                <div className="space-y-4">
                    <h4 className="text-4xl font-bold">Who are we?</h4>
                    <p className="text-xl">Welcome to Eat2Feast, an AI-powered kitchen app , where culinary delight meets technological innovation. Say goodbye to the ordinary and embrace a new era of online food ordering convenience and excellence.</p>
                </div>
            </div>
        </section>
    )
}
