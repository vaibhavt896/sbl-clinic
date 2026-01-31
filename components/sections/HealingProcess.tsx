'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
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
    const containerRef = useRef<HTMLDivElement>(null)

    // Track scroll progress through this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    })

    // Smooth out the progress
    const scrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

    // Map progress to line fill
    const lineScale = useTransform(scrollProgress, [0, 0.8], [0, 1])

    return (
        <section className={styles.section} ref={containerRef}>
            <div className="container">
                {/* Header */}
                <div className={styles.header}>
                    <motion.span
                        className="label"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Approach
                    </motion.span>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        How We Help You <span className="text-gradient">Feel Better</span>
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We don't just treat symptoms. We help your body find its way back to health.
                        Here's what that looks like, step by step.
                    </motion.p>
                </div>

                {/* Steps Container with Scrollytelling Path */}
                <div className={styles.processContainer}>

                    {/* The Path Line (Background Track) */}
                    <div className={styles.pathTrack}>
                        {/* The Active Fill Line */}
                        <motion.div
                            className={styles.pathFill}
                            style={{
                                scaleX: lineScale, // Horizontal on desktop
                                scaleY: lineScale, // Vertical on mobile (handled in CSS via media query transform-origin)
                            }}
                        />
                    </div>

                    {/* Steps Grid */}
                    <div className={styles.stepsGrid}>
                        {steps.map((step, index) => {
                            // Calculate trigger point for this step (e.g., 0.2, 0.4, 0.6, 0.8)
                            const triggerPoint = index * 0.25
                            // Use hooks outside component? No, map is inside.
                            // However, we CANNOT call hooks in loop. 
                            // We must create a sub-component OR use a simple motion variant tied to the line.
                            // Better: Pass scrollProgress to a sub-component.

                            return (
                                <StepCard
                                    key={step.number}
                                    step={step}
                                    index={index}
                                    progress={scrollProgress}
                                />
                            )
                        })}
                    </div>
                </div>

                {/* Bottom Message */}
                <motion.div
                    className={styles.bottomMessage}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
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

// Sub-component to safely use hooks
import { MotionValue } from 'framer-motion'
function StepCard({ step, index, progress }: { step: any, index: number, progress: MotionValue<number> }) {
    // Reveal when progress passes this step's threshold
    const threshold = 0.1 + (index * 0.2) // 0.1, 0.3, 0.5, 0.7

    // Opacity: Fade in as we approach
    const opacity = useTransform(progress, [threshold - 0.1, threshold], [0.3, 1])
    // Scale: Pop up slightly when active
    const scale = useTransform(progress, [threshold - 0.05, threshold + 0.05], [0.95, 1])
    // Active State Color
    const isPast = useTransform(progress, (v: number) => v > threshold)

    return (
        <motion.div
            className={styles.stepCard}
            style={{
                opacity,
                scale
            }}
        >
            <div className={styles.stepHeader}>
                <motion.div
                    className={styles.stepIcon}
                    animate={{
                        backgroundColor: isPast.get() ? 'rgba(13, 148, 136, 0.15)' : 'rgba(13, 148, 136, 0.05)',
                        borderColor: isPast.get() ? 'rgba(13, 148, 136, 0.4)' : 'rgba(13, 148, 136, 0.1)',
                        scale: isPast.get() ? 1.05 : 1
                    }}
                >
                    <step.Icon size={24} />
                </motion.div>
                <span className={styles.stepNumber}>{step.number}</span>
            </div>

            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
        </motion.div>
    )
}
