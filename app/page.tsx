import Image from 'next/image'

import Hero from '@/components/sections/Hero'
import Welcome from '@/components/sections/Welcome'
import Services from '@/components/sections/Services'
import Brands from '@/components/sections/Brands'
import Impact from '@/components/sections/Impact'
import Works from '@/components/sections/Works'

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <Brands />
      <Impact />
      <Works />
    </>
  )
}
