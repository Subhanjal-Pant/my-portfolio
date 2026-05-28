import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p 
      className="font-mono text-xs tracking-[0.15em] uppercase mb-2 transition-colors duration-200" 
      style={{ fontFamily: 'var(--font-display), monospace', color: 'var(--accent)' }}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 
      className="text-3xl md:text-4xl font-bold tracking-tight mb-3 transition-colors duration-200" 
      style={{ fontFamily: 'var(--font-display), sans-serif', color: 'var(--text-primary)' }}
    >
      {children}
    </h2>
  );
}

export function Divider() {
  return <div className="w-12 h-[3px] rounded bg-[var(--accent)] mb-8 transition-colors duration-200" />;
}

export function PlaceholderImage({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] text-sm transition-all duration-200 ${className}`}>
      {label}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span 
      className="inline-block font-mono text-[0.7rem] px-2 py-0.5 rounded transition-all duration-200" 
      style={{ 
        fontFamily: 'var(--font-display), monospace', 
        color: 'var(--accent)', 
        backgroundColor: 'var(--accent-dim)' 
      }}
    >
      {children}
    </span>
  );
}

export function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span 
      className="font-mono text-[0.7rem] text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded border border-[var(--border)] transition-all duration-200" 
      style={{ fontFamily: 'var(--font-display), monospace' }}
    >
      {children}
    </span>
  );
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 card-lift hover:border-[var(--accent)] transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
}

export function Button({ children, to, href, onClick, variant = 'primary', className = '' }: {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}) {
  const base = `inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 btn-ripple ${className}`;
  
  // Custom theme styling applied dynamically via style objects or utility variables
  const styles = variant === 'primary'
    ? `${base} text-[var(--bg-primary)]`
    : `${base} bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]`;

  const primaryStyle = variant === 'primary' ? {
    backgroundColor: 'var(--accent)',
    boxShadow: '0 0 24px var(--accent-glow)'
  } : undefined;

  if (to) {
    return <a href={to} className={styles} style={primaryStyle}>{children}</a>;
  }
  if (href) {
    return <a href={href} className={styles} style={primaryStyle}>{children}</a>;
  }
  return <button onClick={onClick} className={styles} style={primaryStyle}>{children}</button>;
}