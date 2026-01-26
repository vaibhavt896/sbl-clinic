'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import styles from '@/styles/components/navbar.module.css'

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Stories' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>

                {/* Logo - Clean & Minimal */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>SBL</span>
                    <span className={styles.logoText}>Homoeopathy</span>
                </Link>

                {/* Center Nav Links - Pill Style */}
                <div className={styles.centerNav}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className={styles.actions}>
                    <a href="#contact" className={styles.ctaButton}>
                        <span>Book Consultation</span>
                        <ArrowRight size={16} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Menu - Full Screen */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={styles.mobileLinks}>
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className={styles.mobileCta}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book Consultation
                            <ArrowRight size={18} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
