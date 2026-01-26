'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Leaf, Clock, Shield, HeartHandshake, Award } from 'lucide-react'
import styles from '@/styles/components/why-choose.module.css'

const reasons = [
    {
        icon: Award,
        title: '25+ Years Experience',
        description: 'Decades of dedicated practice in classical homoeopathy with proven results.',
    },
    {
        icon: HeartHandshake,
        title: 'Personalized Treatment',
        description: 'Every patient receives individualized care based on their unique constitution.',
    },
    {
        icon: Leaf,
        title: 'Natural & Safe',
        description: 'No side effects. Gentle remedies that work with your body, not against it.',
    },
    {
        icon: Clock,
        title: 'Root Cause Focus',
        description: 'We treat the cause, not just symptoms. Long-lasting wellness, not quick fixes.',
    },
    {
        icon: Shield,
        title: 'Holistic Approach',
        description: 'Mind, body, and spirit. Addressing all aspects of your health journey.',
    },
    {
        icon: CheckCircle2,
        title: 'Proven Success',
        description: 'Thousands of satisfied patients with documented recovery stories.',
    },
]

export default function WhyChooseUs() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.bgAccent} aria-hidden="true" />

            <div className="container">
                <div className={styles.content}>
                    <div className={styles.textColumn}>
                        <motion.span
                            className={styles.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            Why Choose Us
                        </motion.span>
                        <motion.h2
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Healing Rooted in <span className="text-gradient">Trust</span> & Tradition
                        </motion.h2>
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            At SBL Homoeopathic Clinic, we combine time-honored homoeopathic
                            principles with modern understanding to provide care that truly heals.
                            Dr. S B Singh's approach focuses on understanding you as a whole person.
                        </motion.p>

                        <div className={styles.featureList}>
                            {reasons.slice(0, 3).map((reason, index) => (
                                <motion.div
                                    key={reason.title}
                                    className={styles.feature}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                >
                                    <div className={styles.featureIcon}>
                                        <reason.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className={styles.featureTitle}>{reason.title}</h4>
                                        <p className={styles.featureDescription}>{reason.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.cardsColumn}>
                        {reasons.slice(3).map((reason, index) => (
                            <motion.div
                                key={reason.title}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            >
                                <div className={styles.cardIcon}>
                                    <reason.icon size={24} />
                                </div>
                                <h4 className={styles.cardTitle}>{reason.title}</h4>
                                <p className={styles.cardDescription}>{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
