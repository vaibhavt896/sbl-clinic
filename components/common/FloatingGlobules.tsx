'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/components/floating-globules.module.css'

interface Globule {
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
}

export default function FloatingGlobules() {
    const [globules, setGlobules] = useState<Globule[]>([])

    useEffect(() => {
        // Generate random globule positions
        const generated: Globule[] = Array.from({ length: 25 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 8 + 4,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 5,
        }))
        setGlobules(generated)
    }, [])

    return (
        <div className={styles.container} aria-hidden="true">
            {globules.map((globule) => (
                <motion.div
                    key={globule.id}
                    className={styles.globule}
                    style={{
                        left: `${globule.x}%`,
                        top: `${globule.y}%`,
                        width: globule.size,
                        height: globule.size,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: globule.duration,
                        delay: globule.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Larger decorative globules */}
            <motion.div
                className={`${styles.globule} ${styles.large}`}
                style={{ left: '10%', top: '20%' }}
                animate={{ y: [-30, 30, -30], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className={`${styles.globule} ${styles.large}`}
                style={{ right: '15%', top: '60%' }}
                animate={{ y: [20, -20, 20], scale: [1, 1.15, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            <motion.div
                className={`${styles.globule} ${styles.medium}`}
                style={{ left: '70%', top: '30%' }}
                animate={{ y: [-15, 25, -15], x: [-10, 10, -10] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
        </div>
    )
}
