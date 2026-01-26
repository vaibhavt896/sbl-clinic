'use client'

import { useState, useEffect } from 'react'
import { Phone, Calendar } from 'lucide-react'
import { CONTACT_INFO } from '@/config/contact'
import styles from '@/styles/components/mobile-sticky-cta.module.css'

export default function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past Hero (approx 400px) for smooth entry
            if (window.scrollY > 400) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
            {/* Call Button - Icon Only (Quick Action) */}
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className={styles.btnCall} aria-label="Call Now">
                <Phone size={24} />
            </a>

            {/* Book Button - Prominent Text */}
            <a href="#contact" className={styles.btnBook}>
                <Calendar size={18} />
                <span>Book Appointment</span>
            </a>
        </div>
    )
}
