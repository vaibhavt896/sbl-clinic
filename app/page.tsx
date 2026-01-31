import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import HealingProcess from '@/components/sections/HealingProcess'
import Services from '@/components/sections/Services'
import WhatToExpect from '@/components/sections/WhatToExpect'
import Testimonials from '@/components/sections/Testimonials'
import AppointmentBooking from '@/components/sections/AppointmentBooking'
import Contact from '@/components/sections/Contact'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <HealingProcess />
            <Services />
            <WhatToExpect />
            <Testimonials />
            <AppointmentBooking />
            <Contact />
        </>
    )
}

