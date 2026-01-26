'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/components/homoeopathy-graphics.module.css'

export default function HomoeopathyGraphics() {
    return (
        <div className={styles.container} aria-hidden="true">
            {/* Mortar and Pestle - Symbol of Homoeopathy */}
            <div className={styles.mortarContainer}>
                <motion.svg
                    viewBox="0 0 120 100"
                    className={styles.mortar}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {/* Mortar Bowl */}
                    <ellipse cx="60" cy="75" rx="45" ry="15" fill="rgba(212,175,55,0.15)" stroke="rgba(212,175,55,0.3)" strokeWidth="1.5" />
                    <path d="M20 75 Q20 40 60 35 Q100 40 100 75" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="2" />
                    <path d="M25 70 Q25 45 60 42 Q95 45 95 70" fill="rgba(16,185,129,0.08)" />

                    {/* Pestle */}
                    <motion.g
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transformOrigin: '60px 50px' }}
                    >
                        <ellipse cx="75" cy="30" rx="8" ry="4" fill="rgba(212,175,55,0.6)" />
                        <path d="M68 30 L55 55 Q52 60 55 62 L65 55 L78 30" fill="rgba(212,175,55,0.5)" stroke="rgba(212,175,55,0.7)" strokeWidth="1" />
                    </motion.g>

                    {/* Herbs/Leaves Inside */}
                    <motion.path
                        d="M45 55 Q50 50 55 55 Q50 60 45 55"
                        fill="rgba(16,185,129,0.4)"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.path
                        d="M60 52 Q65 47 70 52 Q65 57 60 52"
                        fill="rgba(16,185,129,0.5)"
                        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.path
                        d="M72 58 Q77 53 82 58 Q77 63 72 58"
                        fill="rgba(16,185,129,0.35)"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.55, 0.35] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }}
                    />
                </motion.svg>
            </div>

            {/* Potentization Drops */}
            <div className={styles.dropsContainer}>
                <motion.div
                    className={styles.drop}
                    animate={{ y: [0, 60, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                    className={styles.drop}
                    style={{ left: '30%' }}
                    animate={{ y: [0, 50, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className={styles.drop}
                    style={{ left: '70%' }}
                    animate={{ y: [0, 55, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
                />
            </div>

            {/* Healing Energy Waves */}
            <div className={styles.energyWaves}>
                <motion.div
                    className={styles.wave}
                    animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0.2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.div
                    className={styles.wave}
                    animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0.2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                />
                <motion.div
                    className={styles.wave}
                    animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0.2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 2 }}
                />
            </div>

            {/* DNA/Vital Force Helix */}
            <div className={styles.helixContainer}>
                <motion.svg
                    viewBox="0 0 60 200"
                    className={styles.helix}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.path
                        d="M30 10 Q50 30 30 50 Q10 70 30 90 Q50 110 30 130 Q10 150 30 170 Q50 190 30 200"
                        stroke="rgba(16,185,129,0.3)"
                        strokeWidth="2"
                        fill="none"
                        animate={{ strokeDashoffset: [0, 100] }}
                        style={{ strokeDasharray: 10 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.path
                        d="M30 10 Q10 30 30 50 Q50 70 30 90 Q10 110 30 130 Q50 150 30 170 Q10 190 30 200"
                        stroke="rgba(212,175,55,0.25)"
                        strokeWidth="2"
                        fill="none"
                        animate={{ strokeDashoffset: [100, 0] }}
                        style={{ strokeDasharray: 10 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Connection points */}
                    {[30, 70, 110, 150].map((y, i) => (
                        <motion.circle
                            key={i}
                            cx="30"
                            cy={y}
                            r="4"
                            fill="rgba(16,185,129,0.5)"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                    ))}
                </motion.svg>
            </div>
        </div>
    )
}
