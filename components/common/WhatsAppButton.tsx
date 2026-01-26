'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { CONTACT_INFO } from '@/config/contact'
import styles from '@/styles/components/whatsapp-button.module.css'

const MESSAGE = "Hi Dr. Singh, I'd like to book a consultation."

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

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(MESSAGE)}`

    return (
        <div className={styles.wrapper}>
            <AnimatePresence>
                {showTooltip && !isOpen && (
                    <motion.div
                        className={styles.tooltip}
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        onClick={() => setIsOpen(true)}
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

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Chat on WhatsApp"
            >
                <div className={styles.glow} />
                <MessageCircle size={28} fill="currentColor" />
                <span className={styles.presenceIndicator} />
            </motion.a>
        </div>
    )
}
