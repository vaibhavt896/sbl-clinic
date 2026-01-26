import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Sparkles, Heart } from 'lucide-react'
import { CONTACT_INFO } from '@/config/contact'
import styles from '@/styles/components/footer.module.css'

const quickLinks = [
    { href: '#about', label: 'About Dr. Singh' },
    { href: '#services', label: 'How We Help' },
    { href: '#testimonials', label: 'Patient Stories' },
    { href: '#contact', label: 'Book Consultation' },
]

const services = [
    'Chronic Conditions',
    'Skin & Hair',
    'Allergies & Breathing',
    'Digestive Wellness',
    'Women\'s Health',
    'Children\'s Care',
]

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGlow} aria-hidden="true" />

            <div className="container">
                <div className={styles.footerGrid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <div className={styles.logo}>
                            <div className={styles.logoMark}>
                                <Sparkles size={18} />
                            </div>
                            <div className={styles.logoText}>
                                <span className={styles.clinicName}>SBL Homoeopathic</span>
                                <span className={styles.doctorName}>Dr. S B Singh</span>
                            </div>
                        </div>
                        <p className={styles.tagline}>
                            Healing families in Kanpur since 1999. We help your body rediscover
                            its natural balance. Because wellness isn&apos;t a destination; it&apos;s how
                            you&apos;re meant to feel every day.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="YouTube">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Explore</h4>
                        <ul className={styles.linksList}>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className={styles.footerLink}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>We Treat</h4>
                        <ul className={styles.linksList}>
                            {services.map((service) => (
                                <li key={service}>
                                    <span className={styles.serviceItem}>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contactColumn}>
                        <h4 className={styles.columnTitle}>Get in Touch</h4>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <MapPin size={16} className={styles.contactIcon} />
                                <span>{CONTACT_INFO.address.split(', ').slice(0, 2).join(', ')}<br />{CONTACT_INFO.address.split(', ').slice(2).join(', ')}</span>
                            </li>
                            <li className={styles.contactItem}>
                                <Phone size={16} className={styles.contactIcon} />
                                <div>
                                    <a href={`tel:${CONTACT_INFO.phoneRaw}`}>{CONTACT_INFO.phone}</a>
                                </div>
                            </li>
                            <li className={styles.contactItem}>
                                <Mail size={16} className={styles.contactIcon} />
                                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                            </li>
                            <li className={styles.contactItem}>
                                <Clock size={16} className={styles.contactIcon} />
                                <span>{CONTACT_INFO.hours}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} SBL Homoeopathic Clinic. Made with <Heart size={12} className={styles.heartIcon} /> in Kanpur.
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/terms">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
