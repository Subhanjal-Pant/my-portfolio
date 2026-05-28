import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useReveal, SectionLabel, SectionTitle, Divider, PlaceholderImage, Tag, TechPill } from '../components/Shared';
import { projects, testimonials } from '../data/portfolio';

const typingWords = ['Engineer', 'Researcher', 'Builder', 'Roboticist', 'Programmer'];

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[wordIndex];
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
        return;
      }
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span>
      {typingWords[wordIndex].substring(0, charIndex)}
      <span className="typing-cursor" />
    </span>
  );
}

function HighlightsStrip() {
  const ref = useReveal();
  const items = [
    { label: 'Projects', value: '5+', path: '/projects' },
    { label: 'Research Projects', value: '2+', path: '/publications' },
    { label: 'Honors & Awards', value: '2+', path: '/about' },
  ];
  return (
    <div ref={ref} className="reveal grid grid-cols-3 gap-4 max-w-2xl mx-auto">
      {items.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className="text-center p-6 rounded-xl border hover:border-[#00d4aa] transition-all duration-300 group"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00d4aa' }}>{item.value}</div>
          <div className="text-sm transition-colors group-hover:text-[#00d4aa]" style={{ color: 'var(--text-secondary)' }}>{item.label}</div>
        </Link>
      ))}
    </div>
  );
}

function FeaturedProject() {
  const ref = useReveal();
  const project = projects[0];
  return (
    <div ref={ref} className="reveal max-w-4xl mx-auto">
      <SectionLabel>Featured Projects</SectionLabel>
      <SectionTitle>Autonomous Navigation and Active Perception</SectionTitle>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlaceholderImage label="ANVESAK USV" className="h-64" />
        <div className="flex flex-col justify-center">
          <Tag>Robotics</Tag>
          <p className="mt-3 mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.shortDesc}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((t) => <TechPill key={t}>{t}</TechPill>)}
          </div>
          <Link to="/projects/anvesak" className="inline-flex items-center gap-2 text-sm font-medium text-[#00d4aa] hover:underline">
            View Details <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function RecentExperience() {
  const ref = useReveal();
  const experiences = [
    { date: '2024 – Present', role: 'Research Engineer', org: 'Self Research' },
    { date: '2023 – 2024', role: 'NAST Intern', org: 'Nepal Academy of Science & Technology' },
    { date: '2022 – 2023', role: 'NIC', org: 'National Innovation Center' },
  ];
  return (
    <div ref={ref} className="reveal max-w-4xl mx-auto">
      <SectionLabel>Recent Experience</SectionLabel>
      <SectionTitle>Where I've Been</SectionTitle>
      <Divider />
      <div className="relative pl-8">
        <div className="absolute left-0 top-2 bottom-2 w-[2px]" style={{ backgroundColor: 'var(--border)' }} />
        {experiences.map((exp, i) => (
          <div key={i} className="relative pb-6 last:pb-0">
            <div
              className="absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 border-[#00d4aa] -translate-x-[5px]"
              style={{ backgroundColor: 'var(--bg-primary)' }}
            />
            <p className="font-mono text-xs text-[#00d4aa] mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>{exp.date}</p>
            <h4 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{exp.role}</h4>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{exp.org}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const ref = useReveal();

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div ref={ref} className="reveal max-w-3xl mx-auto text-center">
      <SectionLabel>Testimonials</SectionLabel>
      <SectionTitle>What People Say</SectionTitle>
      <Divider />
      <div className="relative overflow-hidden">
        <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-full px-4">
              <blockquote className="text-lg leading-relaxed mb-4 italic" style={{ color: 'var(--text-secondary)' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{t.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#00d4aa] w-6' : ''}`}
            style={i !== current ? { backgroundColor: 'var(--border)' } : {}}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        <div className="sonar-container">
          <div className="sonar-ring" />
          <div className="sonar-ring" />
          <div className="sonar-ring" />
          <div className="sonar-ring" />
          <div className="sonar-ring" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* Left: text */}
          <div className="flex-1">
            <p className="font-mono text-sm text-[#00d4aa] mb-4 opacity-0 animate-[fadeUp_0.8s_0.3s_forwards]" style={{ fontFamily: 'Space Grotesk, monospace' }}>
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 opacity-0 animate-[fadeUp_0.8s_0.5s_forwards]" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>
              Subhanjal <span className="text-[#00d4aa]">Pant</span>
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-0 animate-[fadeUp_0.8s_0.7s_forwards]" style={{ color: 'var(--text-secondary)' }}>
              <TypingText />
            </p>
            <p className="text-base mb-8 opacity-0 animate-[fadeUp_0.8s_0.8s_forwards]" style={{ color: 'var(--text-secondary)' }}>
              Mechanical Engineering · Autonomous Systems · Robotics and AI
            </p>
            <div className="flex gap-4 opacity-0 animate-[fadeUp_0.8s_0.9s_forwards]">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-[#00d4aa] text-[#0d1117] hover:bg-[#00eabb] hover:shadow-[0_0_24px_rgba(0,212,170,0.25)] transition-all duration-300 btn-ripple"
              >
                View My Work
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-transparent hover:text-[#00d4aa] hover:border-[#00d4aa] transition-all duration-300"
                style={{ color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Right: profile picture */}
          <div className="flex-shrink-0 opacity-0 animate-[fadeUp_0.8s_0.6s_forwards]">
            <div className="relative w-52 h-52 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full border-2 border-[#00d4aa] opacity-20 scale-110 pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-dashed border-[#00d4aa] opacity-25 pointer-events-none animate-[spin_20s_linear_infinite]" />
              <img
                src="/profile.jpg"
                alt="Subhanjal Pant"
                className="w-full h-full rounded-full object-cover object-top"
                style={{ border: '2px solid var(--border)' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  document.getElementById('profile-fallback').style.display = 'flex';
                }}
              />
              <div
                id="profile-fallback"
                className="absolute inset-0 rounded-full items-center justify-center text-xs tracking-wide hidden"
                style={{ backgroundColor: 'var(--bg-card)', border: '2px solid var(--border)', color: 'var(--text-secondary)' }}
              >
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeUp_0.8s_1.2s_forwards]">
          <span className="text-[0.65rem] tracking-[0.1em] uppercase" style={{ color: 'var(--text-secondary)' }}>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#00d4aa] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
        </div>

        <style>{`
          @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes scrollPulse { 0%, 100% { opacity: 0.3; transform: scaleY(0.6); } 50% { opacity: 1; transform: scaleY(1); } }
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}</style>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6">
        <HighlightsStrip />
      </section>

      {/* Featured Project */}
      <section className="py-20 px-6">
        <FeaturedProject />
      </section>

      {/* Recent Experience */}
      <section className="py-20 px-6">
        <RecentExperience />
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <TestimonialsCarousel />
      </section>
    </>
  );
}