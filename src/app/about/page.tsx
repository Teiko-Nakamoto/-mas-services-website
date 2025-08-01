import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'MAS Services Group - About',
  description: 'Built on Trust. Driven by Innovation. MAS Services Group harnesses the power of artificial intelligence to make businesses smarter, faster, and more efficient.',
};

export default function About() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={`${styles.hero} section`}>
        <div className="container text-center">
          <h1>Built on Trust. Driven by Innovation.</h1>
          <p className={styles.missionText}>
            MAS Services Group was founded on a simple mission: harness the power of artificial intelligence to make businesses smarter, faster, and more efficient. We believe in delivering tangible results — not just promises.
          </p>
        </div>
      </section>

      {/* Why MAS Section */}
      <section className={`${styles.whyMas} section bg-light-gray`}>
        <div className="container">
          <div className="text-center">
            <h2>Why MAS?</h2>
            <p className={styles.whyMasSubtext}>
              We're not just another development company. We're your strategic partner in digital transformation.
            </p>
          </div>
          
          <div className={`${styles.reasonsGrid} grid grid-3`}>
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>🚀</div>
              <h3>Innovation</h3>
              <p>AI-first approach for modern enterprises</p>
              <div className={styles.reasonDetails}>
                <p>We leverage cutting-edge artificial intelligence technologies to solve complex business challenges, ensuring your organization stays ahead of the competition.</p>
              </div>
            </div>
            
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>⚡</div>
              <h3>Efficiency</h3>
              <p>90% more cost-effective than traditional teams</p>
              <div className={styles.reasonDetails}>
                <p>Our streamlined AI-powered development process reduces costs and timeframes while maintaining the highest quality standards.</p>
              </div>
            </div>
            
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>🎯</div>
              <h3>Results</h3>
              <p>See continuous progress with 2-week delivery cycles</p>
              <div className={styles.reasonDetails}>
                <p>We focus on delivering tangible, measurable outcomes that directly impact your bottom line and operational efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className={`${styles.approach} section`}>
        <div className="container">
          <div className="text-center">
            <h2>Our Approach</h2>
            <p className={styles.approachSubtext}>
              We combine proven methodologies with innovative AI solutions to deliver exceptional results.
            </p>
          </div>
          
          <div className={`${styles.processGrid} grid grid-2`}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h4>Discovery & Strategy</h4>
              <p>We start by understanding your unique challenges and business objectives, then develop a customized AI strategy that aligns with your goals.</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h4>Rapid Prototyping</h4>
              <p>Our team creates functional prototypes quickly, allowing you to see and test solutions before full development begins.</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h4>AI-Powered Development</h4>
              <p>We leverage advanced AI tools and methodologies to accelerate development while ensuring robust, scalable solutions.</p>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h4>Deployment & Support</h4>
              <p>We ensure smooth deployment and provide ongoing support to maximize the value of your AI investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.cta} section bg-navy`}>
        <div className="container text-center">
          <h2 className="text-white">Ready to Experience the MAS Difference?</h2>
          <p className={`${styles.ctaText} text-white`}>
            Join the growing number of businesses that have transformed their operations with our AI-powered solutions.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}