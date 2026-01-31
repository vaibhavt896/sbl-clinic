'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Calendar, HelpCircle, Pill, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'
import { CONTACT_INFO } from '@/config/contact'
import styles from '@/styles/components/whatsapp-button.module.css'

const quickActions = [
    {
        icon: Calendar,
        label: 'Book Appointment',
        message: "Hi Dr. Singh, I'd like to book a consultation. Please let me know available slots.",
    },
    {
        icon: HelpCircle,
        label: 'Ask a Question',
        message: "Hi Dr. Singh, I have a question about homoeopathic treatment for my condition.",
    },
    {
        icon: Pill,
        label: 'Refill Medicine',
        message: "Hi Dr. Singh, I need to refill my prescribed remedy. My patient ID is ___.",
    },
    {
        icon: Clock,
        label: 'Check Clinic Hours',
        message: "Hi, what are the clinic hours today?",
    },
]

export default function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)

    useEffect(() => {
        // Show tooltip after 5 seconds to gently nudge
        const timer = setTimeout(() => {
            if (!isOpen) setShowTooltip(true)
        }, 5000)

        return () => clearTimeout(timer)
    }, [isOpen])

    const handleActionClick = (message: string) => {
        window.open(
            `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`,
            '_blank'
        )
        setIsOpen(false)
    }

    return (
        <div className={styles.wrapper}>
            <AnimatePresence>
                {/* Quick Actions Menu */}
                {isOpen && (
                    <motion.div
                        className={styles.menu}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    >
                        <div className={styles.menuHeader}>
                            <span className={styles.statusDot} />
                            <span>Chat with us on WhatsApp</span>
                        </div>
                        <div className={styles.menuActions}>
                            {quickActions.map((action) => (
                                <button
                                    key={action.label}
                                    className={styles.menuAction}
                                    onClick={() => handleActionClick(action.message)}
                                >
                                    <action.icon size={18} />
                                    <span>{action.label}</span>
                                </button>
                            ))}
                        </div>
                        <p className={styles.menuNote}>
                            Typically replies within a few hours
                        </p>
                    </motion.div>
                )}

                {/* Tooltip */}
                {showTooltip && !isOpen && (
                    <motion.div
                        className={styles.tooltip}
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        onClick={() => {
                            setShowTooltip(false)
                            setIsOpen(true)
                        }}
                    >
                        <div className={styles.tooltipContent}>
                            <p className={styles.tooltipText}>How can Dr. Singh help you today?</p>
                            <span className={styles.tooltipStatus}>
                                <span className={styles.statusDot} />
                                Typically replies in a few hours
                            </span>
                        </div>
                        <button
                            className={styles.closeTooltip}
                            onClick={(e) => {
                                e.stopPropagation()
                                setShowTooltip(false)
                            }}
                        >
                            <X size={14} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className={styles.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Chat on WhatsApp"
            >
                <div className={styles.glow} />
                {isOpen ? (
                    <X size={28} />
                ) : (
                    <MessageCircle size={28} fill="currentColor" />
                )}
                <span className={styles.presenceIndicator} />
            </motion.button>
        </div>
    )
}

