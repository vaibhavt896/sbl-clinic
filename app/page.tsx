import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import HealingProcess from '@/components/sections/HealingProcess'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <HealingProcess />
            <Services />
            <Testimonials />
            <Contact />
        </>
    )
}
