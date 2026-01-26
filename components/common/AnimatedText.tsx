'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/components/animated-text.module.css'

interface AnimatedTextProps {
    texts: string[]
    interval?: number
}

export default function AnimatedText({ texts, interval = 3000 }: AnimatedTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length)
        }, interval)

        return () => clearInterval(timer)
    }, [texts.length, interval])

    return (
        <div className={styles.wrapper}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    className={styles.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                    {texts[currentIndex]}
                </motion.span>
            </AnimatePresence>
            <span className={styles.cursor} />
        </div>
    )
}
