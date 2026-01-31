'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    ClipboardList,
    MessageCircle,
    Clock,
    Pill,
    Calendar,
    CheckCircle2,
    ArrowRight
} from 'lucide-react'
import styles from '@/styles/components/what-to-expect.module.css'

const steps = [
    {
        icon: ClipboardList,
        title: 'Before Your Visit',
        description: 'Fill a brief questionnaire about your health history. It helps Dr. Singh prepare for your consultation.',
        tips: [
            'List your current medications',
            'Note when symptoms started',
            'Write down what makes it better or worse'
        ]
    },
    {
        icon: MessageCircle,
        title: 'The First Consultation',
        description: 'Dr. Singh will listen. Really listen. Expect questions about your sleep, stress, food habits, and even childhood.',
        tips: [
            '45-60 minutes of unhurried conversation',
            'No interruptions, full attention',
            'Every detail matters in homoeopathy'
        ]
    },
    {
        icon: Pill,
        title: 'Your Remedy',
        description: 'Based on your complete picture, a single remedy is selected. Small, sweet pills — easy to take, gentle yet powerful.',
        tips: [
            'Often just one remedy at a time',
            'Simple dosing instructions',
            'No complicated schedules'
        ]
    },
    {
        icon: Clock,
        title: 'Healing Takes Time',
        description: 'Homoeopathy addresses root causes, not just symptoms. Healing unfolds gradually but permanently.',
        tips: [
            'Initial improvement in 2-4 weeks for most',
            'Chronic conditions: 3-6 months typical',
            'You\'ll understand your body better'
        ]
    },
    {
        icon: Calendar,
        title: 'Follow-Up Care',
        description: 'Regular check-ins ensure your remedy is working. Adjustments are made as you progress.',
        tips: [
            'Monthly follow-ups initially',
            'WhatsApp check-ins between visits',
            'We track your journey together'
        ]
    },
]

export default function WhatToExpect() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
        <section id="what-to-expect" className={styles.section} ref={ref}>
            <div className={styles.bgDecor} aria-hidden="true" />

            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        className="label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        Your Healing Journey
                    </motion.span>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        What to <span className="text-gradient">Expect</span>
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        First time with a homoeopath? Here's exactly how it works — no surprises, no anxiety.
                    </motion.p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className={styles.step}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        >
                            <div className={styles.stepNumber}>
                                <span>{index + 1}</span>
                            </div>

                            <div className={styles.stepContent}>
                                <div className={styles.stepHeader}>
                                    <div className={styles.iconWrapper}>
                                        <step.icon size={24} />
                                    </div>
                                    <h3>{step.title}</h3>
                                </div>

                                <p className={styles.stepDescription}>{step.description}</p>

                                <ul className={styles.tips}>
                                    {step.tips.map((tip) => (
                                        <li key={tip}>
                                            <CheckCircle2 size={14} />
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                >
                    <p>Ready to begin your healing journey?</p>
                    <a href="#booking" className="btn btn-primary btn-lg">
                        Book Your First Consultation
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
