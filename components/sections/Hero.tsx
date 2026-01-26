'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Award, Users, Heart, CheckCircle2, Leaf, Sparkles, Star } from 'lucide-react'
import styles from '@/styles/components/hero.module.css'
import HealingAnimation from '@/components/common/HealingAnimation'

const stats = [
    { icon: Award, value: '25+', label: 'Years of Care' },
    { icon: Users, value: '50k+', label: 'Happy Patients' },
]

const trustBadges = [
    'Govt. Registered',
    'Classical Homoeopathy',
    'Personalized Care',
]

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(contentRef, { once: true })

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const animationY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

    return (
        <section ref={containerRef} className={styles.hero}>
            {/* Light Theme Background */}
            <div className={styles.bgContainer} aria-hidden="true">
                <div className={styles.gradientOrb1} />
                <div className={styles.gradientOrb2} />
                <div className={styles.gridOverlay} />
                {/* Decorative Elements */}
                <div className={styles.floatingLeaf1}>
                    <svg viewBox="0 0 80 120" fill="none">
                        <ellipse cx="40" cy="60" rx="30" ry="50" fill="rgba(16,185,129,0.08)" />
                        <path d="M40 10 L40 110" stroke="rgba(16,185,129,0.15)" strokeWidth="1" />
                    </svg>
                </div>
                <div className={styles.floatingLeaf2}>
                    <svg viewBox="0 0 60 100" fill="none">
                        <ellipse cx="30" cy="50" rx="25" ry="40" fill="rgba(201,162,39,0.06)" />
                        <path d="M30 10 L30 90" stroke="rgba(201,162,39,0.12)" strokeWidth="1" />
                    </svg>
                </div>
            </div>

            <motion.div style={{ opacity }} className={styles.heroInner}>
                <div className="container">
                    <div className={styles.heroGrid}>

                        {/* Left Column: Text Content */}
                        <motion.div
                            ref={contentRef}
                            className={styles.textContent}
                        >
                            <motion.div
                                className={styles.trustBadge}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6 }}
                            >
                                <Star size={14} fill="currentColor" />
                                <span>Kanpur's Most Trusted Homoeopath</span>
                            </motion.div>

                            <div className={styles.headlineWrapper}>
                                <motion.h1
                                    className={styles.headline}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    <span className={styles.headlineTop}>Your Body Knows</span>
                                    <span className={styles.headlineMain}>How to Heal.</span>
                                    <span className={styles.headlineAccent}>
                                        <span className="text-gradient">We Help It Remember.</span>
                                    </span>
                                </motion.h1>
                            </div>

                            <motion.p
                                className={styles.subheadline}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <strong>Dr. S B Singh</strong> has spent 25 years helping thousands find lasting natural wellness.
                                No harsh side effects. No temporary fixes. Just pure, potent healing that works from within.
                            </motion.p>

                            <motion.div
                                className={styles.badgesRow}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                {trustBadges.map((badge) => (
                                    <div key={badge} className={styles.badge}>
                                        <CheckCircle2 size={14} />
                                        <span>{badge}</span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                className={styles.ctaGroup}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <a href="#contact" className="btn btn-primary btn-lg">
                                    Book My Consultation
                                    <ArrowRight size={18} />
                                </a>
                                <a href="#testimonials" className="btn btn-secondary btn-lg">
                                    <Leaf size={18} />
                                    View Patient Stories
                                </a>
                            </motion.div>

                            {/* Stats Row */}
                            <motion.div
                                className={styles.statsRow}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.6 }}
                            >
                                {stats.map((stat) => (
                                    <div key={stat.label} className={styles.statItem}>
                                        <div className={styles.statIcon}>
                                            <stat.icon size={18} />
                                        </div>
                                        <div className={styles.statContent}>
                                            <span className={styles.statValue}>{stat.value}</span>
                                            <span className={styles.statLabel}>{stat.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Healing Animation */}
                        <motion.div
                            style={{ y: animationY }}
                            className={styles.visualContent}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        >
                            <HealingAnimation />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className={styles.scrollLine}>
                    <div className={styles.scrollDot} />
                </div>
                <span>Scroll to explore</span>
            </motion.div>
        </section>
    )
}
