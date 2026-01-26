'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import styles from '@/styles/components/healing-animation.module.css'

export default function HealingAnimation() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })
    const [isLoaded, setIsLoaded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    if (isMobile) {
        return (
            <div className={styles.mobileContainer}>
                <div className={styles.mobileGlowCore} />
                <div className={styles.mobilePulseRing} style={{ animationDelay: '0s' }} />
                <div className={styles.mobilePulseRing} style={{ animationDelay: '1.5s' }} />
                <div className={styles.mobilePulseRing} style={{ animationDelay: '3s' }} />
            </div>
        )
    }

    return (
        <div ref={ref} className={styles.container}>

            {/* Smooth Ambient Glow */}
            <div className={styles.ambientGlow} />

            {/* Main Scene */}
            <div className={styles.scene}>

                {/* Healing Aura - Animated Rings */}
                <div className={styles.auraContainer}>
                    <div className={`${styles.auraRing} ${styles.aura1}`} />
                    <div className={`${styles.auraRing} ${styles.aura2}`} />
                    <div className={`${styles.auraRing} ${styles.aura3}`} />
                </div>

                {/* Orbiting Energy Particles */}
                <div className={styles.orbitContainer}>
                    <div className={`${styles.orbit} ${styles.orbitA}`}>
                        <span className={styles.energyDot} />
                    </div>
                    <div className={`${styles.orbit} ${styles.orbitB}`}>
                        <span className={styles.energyDot} />
                    </div>
                    <div className={`${styles.orbit} ${styles.orbitC}`}>
                        <span className={styles.energyDot} />
                    </div>
                </div>

                {/* The Human Body Image */}
                <motion.div
                    className={styles.bodyWrapper}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src="/images/healing-body.png"
                        alt="Healing Body"
                        width={900}
                        height={900}
                        className={styles.bodyImage}
                        priority
                        onLoad={() => setIsLoaded(true)}
                    />

                    {/* Inner Glow Effect */}
                    <div className={styles.innerGlow} />
                </motion.div>

                {/* Rising Particles */}
                {isLoaded && (
                    <div className={styles.particles}>
                        {[...Array(10)].map((_, i) => (
                            <span
                                key={i}
                                className={styles.particle}
                                style={{
                                    left: `${20 + i * 7}%`,
                                    animationDelay: `${i * 0.3}s`,
                                    animationDuration: `${3 + Math.random()}s`
                                }}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}
