'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Award, GraduationCap, BookOpen, Users, Quote } from 'lucide-react'
import ConsultationVideo from '@/components/common/ConsultationVideo'
import styles from '@/styles/components/about.module.css'

const credentials = [
    { icon: GraduationCap, label: 'BHMS, MD (Hom)' },
    { icon: BookOpen, label: 'Classical Training' },
    { icon: Award, label: 'State Gold Medalist' },
    { icon: Users, label: '25+ Years Practice' },
]

export default function About() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section id="about" className={styles.section} ref={ref}>
            {/* Decorative Background */}
            <div className={styles.bgDecor} aria-hidden="true">
                <div className={styles.circleDecor} />
            </div>

            <div className="container">
                <div className={styles.grid}>
                    {/* Video Column */}
                    <motion.div
                        className={styles.imageColumn}
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <ConsultationVideo />

                        {/* Credentials Grid */}
                        <div className={styles.credentialsGrid}>
                            {credentials.map((cred, index) => (
                                <motion.div
                                    key={cred.label}
                                    className={styles.credentialItem}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <cred.icon size={18} />
                                    <span>{cred.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        className={styles.contentColumn}
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="label">Meet Your Healer</span>

                        <h2 className={styles.title}>
                            A Doctor Who <span className="text-gradient">Listens First</span>
                        </h2>

                        <div className={styles.description}>
                            <p>
                                Dr. S B Singh doesn't rush. He sits. He listens. He asks questions
                                you didn't expect. About your sleep, your worries, even your dreams. Because
                                in homoeopathy, <strong>you're not just a list of symptoms</strong>.
                                You're a whole person, and every detail matters.
                            </p>
                            <p>
                                Over 25 years ago, he opened a small clinic in Civil Lines with one
                                belief: the body has an extraordinary capacity to heal itself when
                                given the right support. Today, thousands of families across Kanpur
                                and beyond have experienced this truth firsthand.
                            </p>
                            <p>
                                His patients don't just get better. They <em>stay</em> better.
                                That's the difference between suppressing a problem and actually solving it.
                            </p>
                        </div>

                        {/* Quote */}
                        <div className={styles.quoteBox}>
                            <Quote size={24} />
                            <blockquote>
                                "I don't treat diseases. I treat people who happen to have diseases.
                                When we understand the person, the remedy reveals itself."
                            </blockquote>
                            <div className={styles.quoteAuthor}>
                                <div className={styles.authorImageWrapper}>
                                    <Image
                                        src="/images/dr-singh.jpg"
                                        alt="Dr. S B Singh"
                                        width={48}
                                        height={48}
                                        className={styles.authorImage}
                                    />
                                </div>
                                <div className={styles.authorInfo}>
                                    <cite>Dr. S B Singh</cite>
                                    <span className={styles.authorTitle}>Senior Consultant</span>
                                </div>
                            </div>
                        </div>

                        <a href="#contact" className="btn btn-primary">
                            Book a Consultation
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
