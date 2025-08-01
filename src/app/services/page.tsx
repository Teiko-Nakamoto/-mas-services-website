'use client';

import Link from 'next/link';

export default function Services() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a2332 0%, #0A2540 100%)',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '600px',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #4DA8DA 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Our Services
        </h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          We specialize in AI-accelerated development of web applications, mobile apps, and Bitcoin smart contracts.
        </p>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '3rem',
          opacity: 0.8
        }}>
          Contact us to learn more about how we can help accelerate your project with our 2-week delivery cycles.
        </p>
        <Link 
          href="/contact" 
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#F4C542',
            color: '#0A2540',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(244, 197, 66, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}