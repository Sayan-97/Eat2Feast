"use client"
import React from "react"
import Link from "next/link"

export default function NavbarLinks() {

    const [selected, setSelected] = React.useState('Home')

    const links = [
        { label: 'Home', link: '/' },
        { label: 'Our Team', link: '/ourteam' },
        { label: 'About Us', link: '/aboutus' },
    ]

    return (
        <ul className="max-lg:hidden flex items-center gap-12">
            {links.map((item, index) => (
                <li
                    key={index}
                    className={`text-xl text-white ${selected === item.label ? 'font-bold' : 'opacity-80'}`}
                >
                    <Link
                        href={item.link}
                        onClick={() => setSelected(item.label)}
                    >
                        {item.label}
                    </Link>
                    <div
                        className={`w-full py-[2px] ${selected === item.label ? 'bg-white' : 'bg-transparent'} rounded-t-md`}
                    ></div>
                </li>
            ))}
        </ul>
    )
}
