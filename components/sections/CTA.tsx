'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/config/contact'
import styles from '@/styles/components/cta.module.css'

export default function CTA() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section className={styles.section} ref={ref}>
            <div className="container">
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.glow} aria-hidden="true" />
                    <div className={styles.gridPattern} aria-hidden="true" />

                    <div className={styles.content}>
                        <motion.h2
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Begin Your Journey to <span className="text-gradient">Natural Wellness</span>
                        </motion.h2>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Take the first step towards holistic health. Schedule a consultation
                            with Dr. S B Singh and discover personalized homoeopathic care.
                        </motion.p>

                        <motion.div
                            className={styles.actions}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Link href="/contact" className="btn btn-primary">
                                <Calendar size={18} />
                                Book Consultation
                                <ArrowRight size={18} />
                            </Link>

                            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className={styles.phoneButton}>
                                <Phone size={18} />
                                <span>{CONTACT_INFO.phone}</span>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
