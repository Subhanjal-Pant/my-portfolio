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
    <p className="font-mono text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: 'Space Grotesk, monospace', color: '#00d4aa' }}>
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6edf3' }}>
      {children}
    </h2>
  );
}

export function Divider() {
  return <div className="w-12 h-[3px] rounded bg-[#00d4aa] mb-8" />;
}

export function PlaceholderImage({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`bg-[#1c2128] border border-[#30363d] rounded-lg flex items-center justify-center text-[#8b949e] text-sm ${className}`}>
      {label}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-mono text-[0.7rem] text-[#00d4aa] bg-[rgba(0,212,170,0.12)] px-2 py-0.5 rounded" style={{ fontFamily: 'Space Grotesk, monospace' }}>
      {children}
    </span>
  );
}

export function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[0.7rem] text-[#8b949e] bg-[rgba(139,148,158,0.1)] px-2 py-0.5 rounded border border-[rgba(48,54,61,0.6)]" style={{ fontFamily: 'Space Grotesk, monospace' }}>
      {children}
    </span>
  );
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#1c2128] border border-[#30363d] rounded-xl p-6 card-lift hover:border-[#00d4aa] ${className}`}>
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
  const styles = variant === 'primary'
    ? `${base} bg-[#00d4aa] text-[#0d1117] hover:bg-[#00eabb] hover:shadow-[0_0_24px_rgba(0,212,170,0.25)]`
    : `${base} bg-transparent text-[#e6edf3] border border-[#30363d] hover:border-[#00d4aa] hover:text-[#00d4aa]`;

  if (to) {
    return <a href={to} className={styles}>{children}</a>;
  }
  if (href) {
    return <a href={href} className={styles}>{children}</a>;
  }
  return <button onClick={onClick} className={styles}>{children}</button>;
}
