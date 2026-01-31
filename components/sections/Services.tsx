'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import {
    Stethoscope,
    Sparkles,
    Shield,
    Leaf,
    Brain,
    Heart,
    Baby,
    Activity,
    ArrowUpRight
} from 'lucide-react'
import styles from '@/styles/components/services.module.css'

const services = [
    {
        icon: Stethoscope,
        title: 'Chronic Conditions',
        description: 'Diabetes that won\'t stabilize. Thyroid that keeps fluctuating. Arthritis that steals your mornings. These aren\'t just conditions, they\'re daily battles. Let\'s find lasting solutions, not lifetime medications.',
        highlights: ['Diabetes', 'Thyroid', 'Arthritis'],
        featured: true,
    },
    {
        icon: Sparkles,
        title: 'Skin That Speaks',
        description: 'Your skin tells a story. Psoriasis patches, stubborn eczema, acne that returns. These aren\'t surface problems. We go deeper to give you the clear, healthy skin you deserve.',
        highlights: ['Psoriasis', 'Eczema', 'Hair Loss'],
        featured: true,
    },
    {
        icon: Shield,
        title: 'Allergies & Breathing',
        description: 'Tired of avoiding foods? Dreading every season change? When allergies and asthma control your life, it\'s time to take that control back. Naturally. Permanently.',
        highlights: ['Allergies', 'Asthma', 'Sinusitis'],
        featured: false,
    },
    {
        icon: Leaf,
        title: 'Gut Wellness',
        description: 'That constant bloating. The unpredictable stomach. IBS that dictates your plans. Your digestive system is asking for help, and we know how to listen.',
        highlights: ['IBS', 'Acidity', 'Constipation'],
        featured: false,
    },
    {
        icon: Brain,
        title: 'Peace of Mind',
        description: 'When your thoughts race at 3 AM. When worry becomes your constant companion. Anxiety and stress aren\'t weaknesses, they\'re signals. Let\'s restore your calm.',
        highlights: ['Anxiety', 'Sleep Issues', 'Stress'],
        featured: false,
    },
    {
        icon: Heart,
        title: 'Women\'s Wellness',
        description: 'Irregular cycles. PCOS struggles. The rollercoaster of hormones. Your body is complex and beautiful, and it deserves care that understands that.',
        highlights: ['PCOS', 'Infertility', 'Menopause'],
        featured: true,
    },
    {
        icon: Baby,
        title: 'Little Ones',
        description: 'Children get sick differently. They heal differently too. From recurring colds to behavioral concerns, we treat your child with the gentleness they need.',
        highlights: ['Immunity', 'Growth', 'Focus Issues'],
        featured: false,
    },
    {
        icon: Activity,
        title: 'Modern Life Ailments',
        description: 'High BP. Stubborn weight. Cholesterol that won\'t budge. The costs of modern living don\'t have to be permanent. Your body can find balance again.',
        highlights: ['Blood Pressure', 'Weight', 'Cholesterol'],
        featured: false,
    },
]

export default function Services() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
        <section id="services" className={styles.section} ref={ref}>
            <div className={styles.bgPattern} aria-hidden="true" />

            {/* Decorative Elements */}
            <div className={styles.decorativeCircle} aria-hidden="true">
                <svg viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="1" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(212,175,55,0.06)" strokeWidth="1" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(16,185,129,0.04)" strokeWidth="1" />
                </svg>
            </div>

            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        className="label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        How We Help
                    </motion.span>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        Every Condition Has a <span className="text-gradient">Root Cause</span>
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        We don't just manage symptoms. We find out why they're happening in the first place.
                        Then we work with your body's natural intelligence to set things right. For good.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className={`${styles.card} ${service.featured ? styles.featured : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <service.icon size={24} />
                                </div>
                                {service.featured && (
                                    <span className={styles.popularBadge}>Most Sought</span>
                                )}
                            </div>

                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>

                            <div className={styles.highlights}>
                                {service.highlights.map((highlight) => (
                                    <span key={highlight} className={styles.highlight}>
                                        {highlight}
                                    </span>
                                ))}
                            </div>

                            <a href="#contact" className={styles.cardLink}>
                                Get Help Today
                                <ArrowUpRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
