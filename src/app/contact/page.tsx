'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Use FormSubmit.co - no account required!
      const response = await fetch('https://formsubmit.co/sales@soengaged.world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New contact form submission from ${formData.name}`,
          _captcha: 'false', // Disable captcha for smoother UX
          _template: 'table' // Use clean table template
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={`${styles.hero} section`}>
        <div className="container text-center">
          <h1>Get in Touch</h1>
          <p className={styles.heroText}>
            Ready to transform your business with AI? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${styles.contactSection} section`}>
        <div className="container">
          <div className={`${styles.contactGrid} grid grid-2`}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <div className={`${styles.formCard} card`}>
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className={styles.successMessage}>
                      ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className={styles.errorMessage}>
                      ❌ Sorry, there was an error sending your message. Please try again or email us directly at sales@soengaged.world
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h3>Let's Connect</h3>
              <p className={styles.contactDescription}>
                Whether you're looking to automate workflows, develop custom AI solutions, or gain deeper business insights, we're here to help.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📧</div>
                  <div>
                    <h4>Email</h4>
                    <div className={styles.emailContainer}>
                      <p>sales@soengaged.world</p>
                      <button 
                        className={styles.copyButton}
                        onClick={() => {
                          navigator.clipboard.writeText('sales@soengaged.world');
                          const button = document.querySelector(`.${styles.copyButton}`);
                          if (button) {
                            button.textContent = 'Copied!';
                            setTimeout(() => {
                              button.textContent = 'Copy';
                            }, 2000);
                          }
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>💼</div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>🌍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Serving clients globally<br />Based in North America</p>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
      </section>


    </div>
  );
}