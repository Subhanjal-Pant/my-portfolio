import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg-primary) 95%, transparent)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--accent)' }}
        >
          SP
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:transition-all after:duration-300"
                style={{
                  color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                  ['--tw-after-bg' as string]: 'var(--accent)',
                }}
              >
                <span
                  className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                    location.pathname === link.path ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`}
                  style={{ ['--after-bg' as string]: 'var(--accent)' }}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Dark/Light toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 transition-colors text-lg"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[22px] h-[2px] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <span
              className={`block w-[22px] h-[2px] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <span
              className={`block w-[22px] h-[2px] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 backdrop-blur-xl p-6 flex flex-col gap-4 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{
          backgroundColor: 'color-mix(in srgb, var(--bg-primary) 97%, transparent)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-base font-medium transition-colors duration-200"
            style={{
              color: location.pathname === link.path ? 'var(--accent)' : 'var(--text-secondary)',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}