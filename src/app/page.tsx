import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={`${styles.hero} section`}>
        <div className="container">
          <div className={`${styles.heroContent} grid grid-2`}>
            <div className={styles.heroText}>
              <h1 className="fade-in-up">AI-Powered Solutions for Tomorrow's Business</h1>
              <p className={styles.subtext}>
                MAS Services Group helps organizations achieve results faster with AI-driven software development — proven to be up to 90% more cost-effective than traditional teams.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Schedule a Consultation
              </Link>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.professionalBox}>
                <div className={styles.statsGrid}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>90%</div>
                    <div className={styles.statLabel}>Cost Reduction</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>Every 2 Weeks</div>
                    <div className={styles.statLabel}>Delivery Cycles</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>500+</div>
                    <div className={styles.statLabel}>Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className={`${styles.servicesPreview} section bg-light-gray`}>
        <div className="container">
          <div className="text-center">
            <h2 style={{color: 'var(--white)', marginBottom: '3rem'}}>AI-Accelerated Development Services</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className={styles.cardContent}>
                <div className={styles.serviceNumber}>01</div>
                <h3>Web Applications</h3>
                <p>Modern web applications delivering responsive, scalable solutions with 2-week delivery cycles.</p>
                <div className={styles.cardFooter}>
                  <span>React • Next.js • TypeScript</span>
                </div>
                <Link href="/contact" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="card">
              <div className={styles.cardContent}>
                <div className={styles.serviceNumber}>02</div>
                <h3>Mobile Applications</h3>
                <p>Cross-platform mobile applications for iOS and Android — built faster with modern frameworks.</p>
                <div className={styles.cardFooter}>
                  <span>React Native • Flutter • Swift</span>
                </div>
                <Link href="/contact" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="card">
              <div className={styles.cardContent}>
                <div className={styles.serviceNumber}>03</div>
                <h3>Bitcoin Smart Contracts</h3>
                <p>Secure blockchain smart contracts on Bitcoin using Clarity — efficient development and comprehensive testing.</p>
                <div className={styles.cardFooter}>
                  <span>Clarity • Bitcoin • Blockchain</span>
                </div>
                <Link href="/contact" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.aboutSection} section`}>
        <div className="container text-center">
          <h2>Why Choose MAS Services Group?</h2>
          <p className={styles.aboutText}>
            We combine AI innovation with proven expertise to deliver solutions that scale. Our approach ensures measurable outcomes without the overhead of traditional development teams.
          </p>
          <Link href="/about" className="btn btn-secondary">
            Learn More About Us
          </Link>
        </div>
      </section>


    </div>
  );
}
