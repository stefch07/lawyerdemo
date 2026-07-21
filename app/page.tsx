"use client";

import { FormEvent, useState } from "react";

const practiceAreas = [
  {
    number: "01",
    title: "Corporate & Commercial",
    description:
      "Practical advice for companies, founders, and investors—from daily operations to defining transactions.",
  },
  {
    number: "02",
    title: "Dispute Resolution",
    description:
      "Clear-eyed strategy for sensitive disputes, with negotiation and litigation handled under one roof.",
  },
  {
    number: "03",
    title: "Employment",
    description:
      "Measured counsel for employers and senior professionals navigating workplace change and conflict.",
  },
  {
    number: "04",
    title: "Real Estate",
    description:
      "End-to-end support for acquisitions, development, leasing, financing, and property disputes.",
  },
  {
    number: "05",
    title: "Private Client",
    description:
      "Discreet, long-term guidance on succession, family wealth, trusts, and personal affairs.",
  },
  {
    number: "06",
    title: "Regulatory & Compliance",
    description:
      "Decisive advice where commercial judgment meets demanding regulatory obligations.",
  },
];

const principles = [
  ["01", "Listen first", "We begin with your priorities, pressures, and definition of a successful outcome."],
  ["02", "Make it clear", "We translate complexity into an actionable strategy, without unnecessary legal language."],
  ["03", "Move with purpose", "You receive responsive counsel, careful preparation, and decisive execution."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Harrington Legal home" onClick={closeMenu}>
          Harrington Legal
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
        </button>

        <nav id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#practice" onClick={closeMenu}>Practice Areas</a>
          <a href="#firm" onClick={closeMenu}>About the Firm</a>
          <a href="#approach" onClick={closeMenu}>Our Approach</a>
        </nav>

        <a className="button button-small header-cta" href="#consultation">
          Request a Consultation <span aria-hidden="true">→</span>
        </a>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Strategic counsel. Clear direction.</p>
          <h1 id="hero-title">Clarity when<br />the stakes are high.</h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="hero-intro">
            Thoughtful legal guidance for individuals and businesses navigating pivotal moments.
          </p>
          <a className="button hero-button" href="#consultation">
            Request a Consultation <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="hero-image" role="img" aria-label="Refined modern law office interior" />

        <aside className="trust-card" aria-label="Service qualities">
          <div><span className="trust-mark">01</span><p>Professional<br />services</p></div>
          <div><span className="trust-mark">02</span><p>Confidential<br />consultations</p></div>
          <div><span className="trust-mark">03</span><p>Trusted<br />counsel</p></div>
        </aside>
      </section>

      <section className="intro-band" aria-label="Firm introduction">
        <p className="section-label">Harrington Legal</p>
        <p className="intro-statement">
          Counsel should bring <em>perspective</em>, not more noise. We pair rigorous legal thinking with the commercial judgment to help you move forward confidently.
        </p>
      </section>

      <section id="practice" className="section practice-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">How we can help</p>
            <h2>Focused expertise.<br />Practical outcomes.</h2>
          </div>
          <p>
            We advise across the moments that shape businesses, careers, and families. Every matter receives senior attention and a strategy tailored to what matters most.
          </p>
        </div>

        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <article className="practice-card" key={area.title}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <a href="#consultation" aria-label={`Discuss ${area.title}`}>
                Discuss your matter <b aria-hidden="true">↗</b>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="firm" className="firm-section">
        <div className="firm-accent" aria-hidden="true">
          <p>Independent thinking</p>
          <span>Since 2008</span>
        </div>
        <div className="firm-copy">
          <p className="eyebrow">A different kind of legal partner</p>
          <h2>Experience you can trust. Attention you can feel.</h2>
          <p className="firm-lead">
            Harrington Legal is an independent firm built around close client relationships and exacting standards.
          </p>
          <div className="firm-columns">
            <p>We combine the discipline of a leading practice with the focus and accessibility of a specialist team. Your matter is never passed down a chain or treated as routine.</p>
            <p>From the first conversation, we ask the right questions, explain the available paths, and stay accountable for the work through to resolution.</p>
          </div>
          <a className="text-link light" href="#approach">Discover our approach <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section id="approach" className="section approach-section">
        <div className="approach-title">
          <p className="eyebrow dark">Our approach</p>
          <h2>A clear path<br />through complexity.</h2>
        </div>
        <div className="principles">
          {principles.map(([number, title, description]) => (
            <article className="principle" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <p className="eyebrow">The standard we hold</p>
        <blockquote>
          “The best legal advice does more than solve the matter in front of you. It protects what comes next.”
        </blockquote>
        <div className="quote-qualities" aria-label="Firm values">
          <span>Responsive</span><span>Discreet</span><span>Commercial</span><span>Exacting</span>
        </div>
      </section>

      <section id="consultation" className="consultation-section">
        <div className="consultation-copy">
          <p className="eyebrow dark">Start a conversation</p>
          <h2>Tell us what<br />you’re facing.</h2>
          <p>
            Share a few details in confidence. A member of our team will contact you within one business day to arrange an initial consultation.
          </p>
          <div className="contact-details">
            <a href="tel:+302101234567">+30 210 123 4567</a>
            <a href="mailto:hello@harringtonlegal.example">hello@harringtonlegal.example</a>
            <p>Kolonaki, Athens · By appointment</p>
          </div>
        </div>

        <div className="consultation-panel">
          {submitted ? (
            <div className="success-message" role="status">
              <span aria-hidden="true">✓</span>
              <h3>Thank you for getting in touch.</h3>
              <p>Your enquiry has been received. Our team will contact you within one business day.</p>
              <button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry →</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <label>Full name<input name="name" type="text" autoComplete="name" required /></label>
                <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
              </div>
              <div className="field-row">
                <label>Phone number<input name="phone" type="tel" autoComplete="tel" /></label>
                <label>Area of assistance
                  <select name="area" defaultValue="" required>
                    <option value="" disabled>Select an area</option>
                    {practiceAreas.map((area) => <option key={area.title}>{area.title}</option>)}
                  </select>
                </label>
              </div>
              <label>How can we help?<textarea name="message" rows={4} required /></label>
              <label className="consent"><input type="checkbox" required /><span>I understand that submitting this form does not create a lawyer-client relationship.</span></label>
              <button className="submit-button" type="submit">Request a Consultation <span aria-hidden="true">→</span></button>
            </form>
          )}
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <a className="wordmark" href="#top">Harrington Legal</a>
          <p>Strategic counsel for defining moments.</p>
        </div>
        <div className="footer-links">
          <a href="#practice">Practice Areas</a>
          <a href="#firm">About the Firm</a>
          <a href="#approach">Our Approach</a>
          <a href="#consultation">Contact</a>
        </div>
        <div className="footer-meta">
          <p>© 2026 Harrington Legal</p>
          <p>Concept website for demonstration purposes.</p>
        </div>
      </footer>
    </main>
  );
}
