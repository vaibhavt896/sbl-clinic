'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    Calendar,
    Clock,
    IndianRupee,
    Video,
    MapPin,
    ArrowRight,
    CheckCircle2,
    MessageCircle,
    Phone,
    Sparkles
} from 'lucide-react'
import { CONTACT_INFO, CONSULTATION_FEES, BOOKING_CONFIG } from '@/config/contact'
import styles from '@/styles/components/booking.module.css'

type ConsultationType = 'firstVisit' | 'followUp' | 'online'

const consultationTypes = [
    {
        id: 'firstVisit' as ConsultationType,
        icon: Sparkles,
        title: 'First Consultation',
        popular: true,
    },
    {
        id: 'followUp' as ConsultationType,
        icon: Calendar,
        title: 'Follow-Up Visit',
        popular: false,
    },
    {
        id: 'online' as ConsultationType,
        icon: Video,
        title: 'Online Consultation',
        popular: false,
    },
]

export default function AppointmentBooking() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const [selectedType, setSelectedType] = useState<ConsultationType>('firstVisit')

    const currentFee = CONSULTATION_FEES[selectedType]

    return (
        <section id="booking" className={styles.section} ref={ref}>
            <div className={styles.bgGlow} aria-hidden="true" />

            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        className="label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        Book Your Appointment
                    </motion.span>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        Start Your <span className="text-gradient">Healing</span> Today
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        Transparent pricing. Easy booking. No surprises.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {/* Consultation Type Selector */}
                    <motion.div
                        className={styles.typesColumn}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className={styles.columnTitle}>Choose Consultation Type</h3>

                        <div className={styles.typeCards}>
                            {consultationTypes.map((type) => {
                                const fee = CONSULTATION_FEES[type.id]
                                const isSelected = selectedType === type.id

                                return (
                                    <button
                                        key={type.id}
                                        className={`${styles.typeCard} ${isSelected ? styles.selected : ''}`}
                                        onClick={() => setSelectedType(type.id)}
                                    >
                                        {type.popular && (
                                            <span className={styles.popularBadge}>Most Common</span>
                                        )}

                                        <div className={styles.typeIcon}>
                                            <type.icon size={24} />
                                        </div>

                                        <div className={styles.typeInfo}>
                                            <h4>{type.title}</h4>
                                            <p className={styles.typeDesc}>{fee.description}</p>
                                        </div>

                                        <div className={styles.typeMeta}>
                                            <div className={styles.price}>
                                                <IndianRupee size={16} />
                                                <span>{fee.amount}</span>
                                            </div>
                                            <div className={styles.duration}>
                                                <Clock size={14} />
                                                <span>{fee.duration}</span>
                                            </div>
                                        </div>

                                        <div className={styles.selectIndicator}>
                                            {isSelected ? (
                                                <CheckCircle2 size={20} />
                                            ) : (
                                                <div className={styles.radioCircle} />
                                            )}
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Booking Options */}
                    <motion.div
                        className={styles.bookingColumn}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className={styles.bookingCard}>
                            <h3 className={styles.bookingTitle}>How Would You Like to Book?</h3>

                            {/* Primary: Calendar Booking */}
                            <a
                                href={BOOKING_CONFIG.calendarUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.bookingOption + ' ' + styles.primary}
                            >
                                <div className={styles.optionIcon}>
                                    <Calendar size={24} />
                                </div>
                                <div className={styles.optionContent}>
                                    <h4>Book Online</h4>
                                    <p>Choose your preferred date & time</p>
                                </div>
                                <ArrowRight size={20} />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                                    `Hi Dr. Singh, I'd like to book a ${consultationTypes.find(t => t.id === selectedType)?.title}. Please let me know available slots.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.bookingOption}
                            >
                                <div className={styles.optionIcon + ' ' + styles.whatsapp}>
                                    <MessageCircle size={24} />
                                </div>
                                <div className={styles.optionContent}>
                                    <h4>WhatsApp</h4>
                                    <p>Quick response, usually within hours</p>
                                </div>
                                <ArrowRight size={20} />
                            </a>

                            {/* Call */}
                            <a
                                href={`tel:${CONTACT_INFO.phoneRaw}`}
                                className={styles.bookingOption}
                            >
                                <div className={styles.optionIcon + ' ' + styles.phone}>
                                    <Phone size={24} />
                                </div>
                                <div className={styles.optionContent}>
                                    <h4>Call the Clinic</h4>
                                    <p>{CONTACT_INFO.phone}</p>
                                </div>
                                <ArrowRight size={20} />
                            </a>

                            {/* Clinic Hours */}
                            <div className={styles.clinicInfo}>
                                <div className={styles.infoRow}>
                                    <Clock size={16} />
                                    <span>Mon-Sat: 10AM-2PM, 5PM-8PM</span>
                                </div>
                                <div className={styles.infoRow}>
                                    <MapPin size={16} />
                                    <span>{CONTACT_INFO.addressShort}</span>
                                </div>
                            </div>
                        </div>

                        {/* Trust Note */}
                        <div className={styles.trustNote}>
                            <CheckCircle2 size={18} />
                            <p>
                                <strong>No upfront payment required.</strong> Pay at the clinic after your consultation.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
