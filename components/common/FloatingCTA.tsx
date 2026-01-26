'use client'

import { Phone, Calendar } from 'lucide-react'
import { CONTACT_INFO } from '@/config/contact'
import styles from '@/styles/components/floating-cta.module.css'

export default function FloatingCTA() {
    return (
        <div className={styles.container}>
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className={styles.phoneButton} aria-label="Call Now">
                <Phone size={22} />
            </a>
            <a href="#contact" className={styles.bookButton}>
                <Calendar size={18} />
                <span>Book Now</span>
            </a>
        </div>
    )
}
