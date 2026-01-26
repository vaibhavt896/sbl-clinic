import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileStickyCTA from '@/components/layout/MobileStickyCTA'
import WhatsAppButton from '@/components/common/WhatsAppButton'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Dr. S B Singh | SBL Homoeopathic Clinic - Best Homoeopath in Kanpur',
    description: 'Experience natural healing with Dr. S B Singh at SBL Homoeopathic Clinic, Kanpur. 25+ years of expertise in treating chronic diseases, skin disorders, allergies & more. Book your consultation today.',
    keywords: 'best homoeopath kanpur, dr sb singh, sbl homoeopathic clinic, natural treatment kanpur, chronic disease specialist, skin specialist homoeopathy',
    authors: [{ name: 'Dr. S B Singh' }],
    openGraph: {
        title: 'Dr. S B Singh | SBL Homoeopathic Clinic',
        description: 'Trusted homoeopathic care in Kanpur. 25+ years experience. Natural healing that lasts.',
        type: 'website',
        locale: 'en_IN',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${inter.variable}`}>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <MobileStickyCTA />
                <WhatsAppButton />
            </body>
        </html>
    )
}
