'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/mas service logo.png" 
            alt="MAS Services Group Logo"
            width={180}
            height={50}
            className={styles.logoImage}
            priority
          />
        </Link>
        
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={pathname === item.href ? styles.activeLink : styles.navLink}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {pathname !== '/contact' && (
          <Link href="/contact" className="btn btn-primary">
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
}