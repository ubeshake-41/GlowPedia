import { useParams, Link } from 'react-router-dom';
import { comparisons } from '../data/comparisons';
import styles from './ComparePage.module.css';

export default function ComparePage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the comparison by slug
  const comparison = comparisons.find(c => {
    const compSlug = `${c.product_a.toLowerCase()}-vs-${c.product_b.toLowerCase()}`.replace(/\s+/g, '-');
    return compSlug === slug;
  });

  if (!comparison) {
    return (
      <div className={styles.notFound}>
        <h1>Comparison not found</h1>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.comparePage}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.vsPill}>VS</div>
          <h1>
            {comparison.product_a} <span>vs</span> {comparison.product_b}
          </h1>
          <p>A side-by-side comparison to help you choose</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Side-by-side descriptions */}
        <div className={styles.descriptionsGrid}>
          <div className={styles.descriptionCard}>
            <h2>{comparison.product_a}</h2>
            {comparison.description_a.split('\n\n').map((paragraph, index) => {
              // Check if paragraph contains **text** pattern
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={index}>
                  {parts.map((part, i) => {
                    const boldMatch = part.match(/^\*\*(.+?)\*\*$/);
                    if (boldMatch) {
                      return <strong key={i}>{boldMatch[1]}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>
          <div className={styles.descriptionCard}>
            <h2>{comparison.product_b}</h2>
            {comparison.description_b.split('\n\n').map((paragraph, index) => {
              // Check if paragraph contains **text** pattern
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={index}>
                  {parts.map((part, i) => {
                    const boldMatch = part.match(/^\*\*(.+?)\*\*$/);
                    if (boldMatch) {
                      return <strong key={i}>{boldMatch[1]}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className={styles.tableSection}>
          <h2 className={styles.sectionLabel}>DETAILED COMPARISON</h2>
          <div className={styles.comparisonTable}>
            <div className={styles.tableHeader}>
              <div className={styles.tableCell}></div>
              <div className={styles.tableCell}>{comparison.product_a}</div>
              <div className={styles.tableCell}>{comparison.product_b}</div>
            </div>
            {comparison.comparison_table.map((row, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.tableCell}>
                  <strong>{row.attribute}</strong>
                </div>
                <div className={styles.tableCell}>{row.product_a_value}</div>
                <div className={styles.tableCell}>{row.product_b_value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Verdict */}
        <div className={styles.verdictSection}>
          <h2 className={styles.sectionLabel}>THE VERDICT</h2>
          <div className={styles.verdictCard}>
            {comparison.verdict.split('\n\n').map((paragraph, index) => {
              // Check if paragraph starts with **text** pattern
              const boldMatch = paragraph.match(/^\*\*(.+?)\*\*/);
              if (boldMatch) {
                // Extract the bold text and the rest
                const boldText = boldMatch[1];
                const restOfText = paragraph.substring(boldMatch[0].length).trim();
                return (
                  <div key={index}>
                    <p><strong>{boldText}</strong> {restOfText}</p>
                  </div>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>

        {/* Learn More Links */}
        <div className={styles.learnMore}>
          <h3>Want to learn more?</h3>
          <div className={styles.learnMoreLinks}>
            <Link to={`/product/${comparison.product_a.toLowerCase()}`} className={styles.learnMoreCard}>
              <span>Read about {comparison.product_a}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to={`/product/${comparison.product_b.toLowerCase()}`} className={styles.learnMoreCard}>
              <span>Read about {comparison.product_b}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
