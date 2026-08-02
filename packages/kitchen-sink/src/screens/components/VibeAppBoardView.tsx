import styles from "./VibeAppBoardView.module.scss";

const NAV_LINKS = [
  "Product",
  "Solutions",
  "Customers",
  "Pricing",
  "Docs",
  "Blog",
] as const;

export function VibeAppBoardView() {
  return (
    <div className={styles.root}>
      <header className={styles.nav}>
        <div className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true" />
          <span className={styles.brandName}>Metrix</span>
        </div>

        <nav className={styles.navLinks} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <span key={link} className={styles.navLink}>
              {link}
            </span>
          ))}
        </nav>

        <div className={styles.navActions}>
          <button type="button" className={styles.navButtonSecondary}>
            Log in
          </button>
          <button type="button" className={styles.navButtonPrimary}>
            Start free →
          </button>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={styles.heroBadge}>
          <span className={styles.badgeNew}>NEW</span>
          <span className={styles.badgeText}>
            AI-powered anomaly detection is live
          </span>
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>Analytics that ship</span>
          <span className={styles.heroTitleLine}>
            with <span className={styles.heroTitleAccent}>your team</span>
          </span>
        </h1>

        <p className={styles.heroSubtitle}>
          Real-time visibility into what your users do and what your systems do
          — connected, in one place, without the dashboard maintenance tax.
        </p>

        <div className={styles.heroActions}>
          <button type="button" className={styles.heroCtaPrimary}>
            Start free trial
          </button>
          <button type="button" className={styles.heroCtaSecondary}>
            ▶ Watch 90s demo
          </button>
        </div>

        <p className={styles.heroNote}>
          ✓ Free 14-day trial · No credit card · Cancel anytime
        </p>
      </section>
    </div>
  );
}
