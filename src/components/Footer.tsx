import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--bg-primary)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link 
              to="/" 
              className="text-2xl font-bold tracking-tight transition-colors duration-200" 
              style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
            >
              SY
            </Link>
            <p className="text-[var(--text-secondary)] text-sm mt-3 leading-relaxed transition-colors duration-200">
              Mechanical Engineer from Nepal, building autonomous systems for the real world.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 transition-colors duration-200">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'About', path: '/about' },
                { label: 'Projects', path: '/projects' },
                { label: 'Publications', path: '/publications' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 transition-colors duration-200">Connect</h4>
            <div className="flex gap-4">
              {['LinkedIn', 'GitHub', 'Instagram'].map((s) => (
                <a 
                  key={s} 
                  href="#" 
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--border)] pt-6 text-center transition-colors duration-200">
          <p className="text-xs text-[var(--text-secondary)]">Designed & built by Siddhant Yadav</p>
        </div>
      </div>
    </footer>
  );
}