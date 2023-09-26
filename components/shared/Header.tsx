import Image from "next/image";
import NavbarLinks from "../interface/NavbarLinks";
import Button from "./Button";

export default function Header() {
    return (
        <header className="sticky top-0 inset-x-0 py-4 z-40">
            <div
                className="absolute bg-black inset-y-0 inset-x-0 lg:inset-x-24 rounded-b-2xl"
            ></div>
            <nav className="relative container flex items-center justify-between">
                <Image
                    src='/images/appLogo.png'
                    alt="img"
                    width={163}
                    height={40}
                />
                <NavbarLinks />
                <Button
                    name="Register Now"
                />
            </nav>
        </header>
    )
}