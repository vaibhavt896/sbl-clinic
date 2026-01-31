'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Award, Users, Heart, CheckCircle2, Leaf, Sparkles, Star } from 'lucide-react'
import Image from 'next/image'
import styles from '@/styles/components/hero.module.css'

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
            {/* Clean Minimal Background - Focus on Doctor Photo */}
            <div className={styles.bgContainer} aria-hidden="true">
                {/* Subtle gradient only - no decorative clutter */}
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

                        {/* Right Column: Doctor Photo */}
                        <motion.div
                            style={{ y: animationY }}
                            className={styles.visualContent}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        >
                            <div className={styles.doctorImageWrapper}>
                                {/* Decorative Frame */}
                                <div className={styles.imageFrame}>
                                    <div className={styles.frameBorder} />
                                    <div className={styles.frameGlow} />
                                </div>

                                {/* Doctor Photo */}
                                <div className={styles.doctorImage}>
                                    <Image
                                        src="/images/dr-singh-new.png"
                                        alt="Dr. S B Singh - Homoeopathic Physician"
                                        width={800}
                                        height={1000}
                                        priority
                                        className={styles.photo}
                                    />
                                </div>

                                {/* Floating Credential Badge */}
                                <motion.div
                                    className={styles.credentialBadge}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.8 }}
                                >
                                    <div className={styles.badgeIcon}>
                                        <Award size={18} />
                                    </div>
                                    <div className={styles.badgeText}>
                                        <span className={styles.badgeTitle}>BHMS, MD</span>
                                        <span className={styles.badgeSubtitle}>Govt. Registered</span>
                                    </div>
                                </motion.div>

                                {/* Experience Badge */}
                                <motion.div
                                    className={styles.experienceBadge}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 1 }}
                                >
                                    <span className={styles.expNumber}>25+</span>
                                    <span className={styles.expLabel}>Years Experience</span>
                                </motion.div>

                                {/* Hand-Drawn Quote Animation */}
                                <QuoteAnnotation />
                            </div>
                        </motion.div>
                    </div>
                </div >
            </motion.div >

            {/* Scroll Indicator */}
            < motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }
                }
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className={styles.scrollLine}>
                    <div className={styles.scrollDot} />
                </div>
                <span>Scroll to explore</span>
            </motion.div >
        </section >
    )
}

// Sub-component for the animated annotation
function QuoteAnnotation() {
    return (
        <motion.div
            className={styles.quoteWrapper}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            animate={{
                y: [0, -4, 0], // Discrete floating motion
            }}
            transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.8 }
            }}
        >
            {/* The Quote Text Bubble - Premium Float */}
            <motion.div
                className={styles.quoteBubble}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2
                }}
            >
                <span className={styles.quoteText}>"Your health is my life's work."</span>
            </motion.div>

            {/* Premium Signature-Style Arrow with Looping Motion */}
            <svg
                className={styles.quoteArrow}
                width="140"
                height="60"
                viewBox="0 0 140 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Starting point dot */}
                <motion.circle
                    cx="130" cy="10" r="3"
                    fill="#0d9488"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                />

                {/* Sleek multi-curve Bezier path with Looping "Point" Animation */}
                <motion.path
                    d="M130 10C115 10 90 25 70 45C50 65 30 50 15 50"
                    stroke="#0d9488"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{
                        pathLength: [1, 0.85, 1], // The "pointing" pulse
                    }}
                    transition={{
                        pathLength: {
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            repeatDelay: 0.5
                        },
                        // Initial draw animation
                        duration: 1.2,
                        delay: 1,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                />

                {/* Sharp Minimal Arrowhead - Synced Loop */}
                <motion.path
                    d="M15 50L25 46M15 50L23 55"
                    stroke="#0d9488"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [1, 0.4, 1], // Pulsing visibility
                        x: [0, 4, 0], // Subtle nudge pointing towards quote
                    }}
                    transition={{
                        opacity: { duration: 1.2, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" },
                        x: { duration: 1.2, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" },
                        // Initial reveal
                        delay: 2.1,
                        duration: 0.2
                    }}
                />
            </svg>
        </motion.div>
    )
}
