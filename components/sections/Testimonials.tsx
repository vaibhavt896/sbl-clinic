'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react'
import styles from '@/styles/components/testimonials.module.css'

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        location: 'Civil Lines, Kanpur',
        treatment: 'Chronic Migraines',
        rating: 5,
        quote: 'For fifteen years, migraines ruled my life. I\'d tried everything. Neurologists, painkillers, even Botox. Nothing worked for long. When I came to Dr. Singh, I was honestly skeptical. But he asked questions no one else had. About my childhood, my stress, my food habits. Within three months, the attacks halved. Now, eight months later? I can\'t remember my last migraine. I got my life back.',
        duration: '8 months of care',
    },
    {
        id: 2,
        name: 'Rajesh Verma',
        location: 'Swaroop Nagar, Kanpur',
        treatment: 'Psoriasis',
        rating: 5,
        quote: 'Psoriasis had covered 40% of my body. I\'d spent lakhs on treatments that promised "quick results." Each time, it came back worse. Dr. Singh was honest from day one: "This will take time, but we\'ll address the root cause." Fourteen months later, my skin is 90% clear. More importantly, I understand my body now. I know what triggers flare-ups and how to prevent them.',
        duration: '14 months of care',
    },
    {
        id: 3,
        name: 'Sunita Agarwal',
        location: 'Kidwai Nagar, Kanpur',
        treatment: 'Thyroid & PCOS',
        rating: 5,
        quote: 'Managing thyroid and PCOS together was exhausting. My weight fluctuated constantly, periods were unpredictable, energy was always low. What struck me about Dr. Singh was his patience. He never rushed. In six months, my thyroid levels normalized without increasing my allopathic dose. My cycles are regular now. I finally feel like myself again.',
        duration: '10 months of care',
    },
    {
        id: 4,
        name: 'Amit & Neha Gupta',
        location: 'Govind Nagar, Kanpur',
        treatment: 'Child\'s Asthma',
        rating: 5,
        quote: 'Our seven-year-old son had severe asthma since he was two. Hospital visits became routine. Inhalers were always in our bag. When friends suggested Dr. Singh, we were desperate enough to try anything. Eighteen months later, no major attacks. He plays cricket now. Runs around with his friends. As parents, we can finally breathe easy too.',
        duration: '18 months of care',
    },
    {
        id: 5,
        name: 'Meera Saxena',
        location: 'Arya Nagar, Kanpur',
        treatment: 'Anxiety & Insomnia',
        rating: 5,
        quote: 'Corporate life left me with crippling anxiety and sleepless nights. I was dependent on sleeping pills, yet still waking up exhausted. Dr. Singh didn\'t just prescribe remedies. He listened. Really listened. To my fears, my pressures, my racing thoughts. Six months in, I sleep naturally. The anxiety hasn\'t vanished, but I can manage it now. I feel like a person again, not a patient.',
        duration: '6 months of care',
    },
]

export default function Testimonials() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 8000)
        return () => clearInterval(timer)
    }, [isAutoPlaying])

    const navigate = (direction: 'prev' | 'next') => {
        setIsAutoPlaying(false)
        if (direction === 'prev') {
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        } else {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }
    }

    const current = testimonials[currentIndex]

    return (
        <section id="testimonials" className={styles.section} ref={ref}>
            <div className={styles.bgGlow} aria-hidden="true" />

            {/* Decorative Quote Marks */}
            <div className={styles.decorativeQuotes} aria-hidden="true">
                <svg viewBox="0 0 100 80" fill="none">
                    <path d="M20 80 L20 40 C20 20 30 10 50 10 L50 25 C40 25 35 30 35 40 L45 40 L45 80 Z" fill="rgba(212,175,55,0.05)" />
                    <path d="M55 80 L55 40 C55 20 65 10 85 10 L85 25 C75 25 70 30 70 40 L80 40 L80 80 Z" fill="rgba(212,175,55,0.05)" />
                </svg>
            </div>

            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        className="label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        Real Stories
                    </motion.span>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        Healing Journeys, <span className="text-gradient">Not Just Reviews</span>
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        Each story here represents months of partnership between doctor and patient,
                        working together toward genuine wellness. These aren't quick fixes. They're transformations.
                    </motion.p>
                </div>

                <motion.div
                    className={styles.carouselContainer}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className={styles.carousel}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.id}
                                className={styles.testimonialCard}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className={styles.cardContent}>
                                    <div className={styles.quoteIcon}>
                                        <Quote size={36} />
                                    </div>

                                    <blockquote className={styles.quote}>
                                        {current.quote}
                                    </blockquote>

                                    <div className={styles.meta}>
                                        <div className={styles.author}>
                                            <div className={styles.avatar}>
                                                {current.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div className={styles.authorInfo}>
                                                <h4 className={styles.authorName}>{current.name}</h4>
                                                <div className={styles.authorLocation}>
                                                    <MapPin size={12} />
                                                    {current.location}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.treatment}>
                                            <span className={styles.treatmentLabel}>{current.treatment}</span>
                                            <div className={styles.durationRow}>
                                                <Calendar size={12} />
                                                <span className={styles.duration}>{current.duration}</span>
                                            </div>
                                            <div className={styles.stars}>
                                                {[...Array(current.rating)].map((_, i) => (
                                                    <Star key={i} size={14} fill="currentColor" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className={styles.controls}>
                        <button
                            onClick={() => navigate('prev')}
                            className={styles.navButton}
                            aria-label="Previous story"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className={styles.dots}>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                                    onClick={() => {
                                        setIsAutoPlaying(false)
                                        setCurrentIndex(index)
                                    }}
                                    aria-label={`Go to story ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => navigate('next')}
                            className={styles.navButton}
                            aria-label="Next story"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    className={styles.trustRow}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <div className={styles.trustItem}>
                        <span className={styles.trustValue}>50,000+</span>
                        <span className={styles.trustLabel}>Families Helped</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.trustItem}>
                        <span className={styles.trustValue}>4.9★</span>
                        <span className={styles.trustLabel}>Google Rating</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.trustItem}>
                        <span className={styles.trustValue}>98%</span>
                        <span className={styles.trustLabel}>Would Recommend</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
