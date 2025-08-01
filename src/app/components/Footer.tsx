'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>MAS Services Group LLC</h4>
            <p className={styles.footerText}>
              AI-Powered Solutions for Tomorrow's Business. Delivering results faster with proven expertise.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/" className={styles.footerLink}>Home</Link></li>
              <li><Link href="/#services" className={styles.footerLink}>Services</Link></li>
              <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Contact Info</h4>
            <div className={styles.emailContainer}>
              <p className={styles.footerText}>
                Email: sales@soengaged.world
              </p>
              <button 
                className={styles.copyButton}
                onClick={() => {
                  navigator.clipboard.writeText('sales@soengaged.world');
                  const button = document.activeElement as HTMLButtonElement;
                  if (button) {
                    const originalText = button.textContent;
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                      button.textContent = originalText;
                    }, 2000);
                  }
                }}
              >
                Copy
              </button>
            </div>
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/company/mas-services-group/?viewAsMember=true" className={styles.socialIcon} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} MAS Services Group LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}