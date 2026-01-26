'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Ear, Sparkles, Droplets, Heart } from 'lucide-react'
import styles from '@/styles/components/healing-process.module.css'

const steps = [
    {
        number: '01',
        title: 'We Listen First',
        description: 'Before anything else, we sit down and truly hear you. Your symptoms, your story, your struggles. Healing begins when you feel understood.',
        Icon: Ear,
    },
    {
        number: '02',
        title: 'Finding Your Match',
        description: 'From over 3,000 natural remedies, we carefully select the one that fits you. Not just your illness, but you as a whole person.',
        Icon: Sparkles,
    },
    {
        number: '03',
        title: 'Gentle Yet Powerful',
        description: 'Our remedies are natural, safe, and work with your body, not against it. No harsh chemicals. No side effects. Just gentle, effective medicine.',
        Icon: Droplets,
    },
    {
        number: '04',
        title: 'Your Body Heals',
        description: 'This is the beautiful part. Your body remembers how to heal itself. We simply help it find the way back to balance and wellness.',
        Icon: Heart,
    },
]

export default function HealingProcess() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section className={styles.section} ref={ref}>
            {/* Background Line */}
            <div className={styles.bgElements} aria-hidden="true">
                <motion.div
                    className={styles.connectingLine}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                />
            </div>

            <div className="container">
                {/* Header */}
                <div className={styles.header}>
                    <motion.span
                        className="label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        Our Approach
                    </motion.span>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        How We Help You <span className="text-gradient">Feel Better</span>
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        We don't just treat symptoms. We help your body find its way back to health.
                        Here's what that looks like, step by step.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className={styles.stepsGrid}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className={styles.stepCard}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.stepHeader}>
                                <div className={styles.stepIcon}>
                                    <step.Icon size={24} />
                                </div>
                                <span className={styles.stepNumber}>{step.number}</span>
                            </div>

                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>

                            {/* Subtle corner accent */}
                            <div className={styles.cornerAccent} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Message */}
                <motion.div
                    className={styles.bottomMessage}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <p>
                        <strong>The result?</strong> You don't just feel better. You <em>stay</em> better.
                        That's the difference real healing makes.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
