'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle2,
    MessageCircle,
    Heart,
    Navigation
} from 'lucide-react'
import { CONTACT_INFO } from '@/config/contact'
import styles from '@/styles/components/contact.module.css'

export default function Contact() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <section id="contact" className={styles.section} ref={ref}>
            <div className={styles.bgGlow} aria-hidden="true" />

            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        className="label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        Let&apos;s Talk
                    </motion.span>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        Ready to Feel <span className="text-gradient">Like Yourself</span> Again?
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        Your first consultation is a conversation, not an interrogation.
                        Come with your questions, your concerns, your history. We&apos;ll listen.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {/* Contact Info Column */}
                    <motion.div
                        className={styles.infoColumn}
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Clinic Image */}
                        <div className={styles.clinicImageWrapper}>
                            <Image
                                src="/images/clinic.png"
                                alt="SBL Homoeopathic Clinic"
                                width={600}
                                height={400}
                                className={styles.clinicImage}
                            />
                            <div className={styles.clinicOverlay}>
                                <Navigation size={16} />
                                <span>Visit Our Clinic</span>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>Visit the Clinic</h3>
                            <p className={styles.infoIntro}>
                                We&apos;re in Civil Lines. Easy to find, peaceful inside.
                                A space designed for healing.
                            </p>

                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4>Our Address</h4>
                                        <p>{CONTACT_INFO.address.split(', ').slice(0, 2).join(', ')}<br />{CONTACT_INFO.address.split(', ').slice(2).join(', ')}</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4>Call or Text</h4>
                                        <a href={`tel:${CONTACT_INFO.phoneRaw}`}>{CONTACT_INFO.phone}</a>
                                        <p className={styles.secondaryPhone}>Clinic: +91 512 234 5678</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4>Write to Us</h4>
                                        <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h4>Consultation Hours</h4>
                                        <p>Morning: 10:00 AM to 2:00 PM</p>
                                        <p>Evening: 5:00 PM to 8:00 PM</p>
                                        <p className={styles.closedNote}>Sundays: By appointment only</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Action Buttons */}
                            <div className={styles.quickActions}>
                                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className={styles.actionButton}>
                                    <Phone size={18} />
                                    Call Now
                                </a>
                                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi Dr. Singh, I'd like to book a consultation.")}`} target="_blank" rel="noopener noreferrer" className={styles.actionButtonWhatsapp}>
                                    <MessageCircle size={18} />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Column */}
                    <motion.div
                        className={styles.formColumn}
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className={styles.formCard}>
                            <div className={styles.formHeader}>
                                <Heart size={24} />
                                <h3>Request a Consultation</h3>
                                <p>Share a little about yourself. We&apos;ll get back within 24 hours.</p>
                            </div>

                            {isSubmitted ? (
                                <div className={styles.successMessage}>
                                    <CheckCircle2 size={48} />
                                    <h4>Thank You!</h4>
                                    <p>We&apos;ve received your request and will call you within 24 hours to schedule your consultation.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">Your Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="input"
                                                placeholder="What should we call you?"
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Phone Number *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="input"
                                                placeholder="+91 XXXXX XXXXX"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email (Optional)</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="input"
                                            placeholder="For appointment confirmations"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="concern">What brings you here? *</label>
                                        <select id="concern" name="concern" className="input" required>
                                            <option value="">Select your main concern</option>
                                            <option value="chronic">Long-standing condition (diabetes, thyroid, etc.)</option>
                                            <option value="skin">Skin issues (psoriasis, eczema, acne, hair)</option>
                                            <option value="allergy">Allergies, asthma, or breathing problems</option>
                                            <option value="digestive">Digestive troubles (IBS, acidity, gut issues)</option>
                                            <option value="mental">Stress, anxiety, or sleep difficulties</option>
                                            <option value="women">Women&apos;s health (PCOS, hormonal, fertility)</option>
                                            <option value="child">My child&apos;s health</option>
                                            <option value="other">Something else</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Tell us a bit more (Optional)</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="input textarea"
                                            placeholder="How long have you been dealing with this? What have you tried?"
                                            rows={4}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg">
                                        <Send size={18} />
                                        Request My Consultation
                                    </button>

                                    <p className={styles.privacyNote}>
                                        Your privacy matters. We never share your information.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
