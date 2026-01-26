'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import styles from '@/styles/components/consultation-video.module.css'

export default function ConsultationVideo() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: false, amount: 0.3 })
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Detect mobile
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(() => { })
                setIsPlaying(true)
            } else {
                videoRef.current.pause()
                setIsPlaying(false)
            }
        }
    }, [isInView])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <motion.div
            ref={containerRef}
            className={styles.videoContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Premium Frame */}
            <div className={styles.videoFrame}>
                {/* Celestial Corner Accents */}
                <div className={styles.cornerAccentTop} />
                <div className={styles.cornerAccentBottom} />

                <video
                    key={isMobile ? 'mobile' : 'desktop'}
                    ref={videoRef}
                    className={styles.video}
                    loop
                    muted={isMuted}
                    playsInline
                    poster={isMobile ? '/video/mobile-poster.jpg' : '/video/desktop-poster.jpg'}
                >
                    {/* HEVC for Safari/iOS (better quality, smaller file) */}
                    <source
                        src={isMobile ? '/video/mobile_hevc.mp4' : '/video/desktop_hevc.mp4'}
                        type='video/mp4; codecs="hvc1"'
                    />
                    {/* H.264 fallback for all browsers */}
                    <source
                        src={isMobile ? '/video/mobile_h264.mp4' : '/video/desktop_h264.mp4'}
                        type="video/mp4"
                    />
                </video>

                {/* Video Controls */}
                <div className={styles.controls}>
                    <button
                        className={styles.controlButton}
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>
                </div>
            </div>

            {/* Decorative Glow */}
            <div className={styles.glow} aria-hidden="true" />
        </motion.div>
    )
}
