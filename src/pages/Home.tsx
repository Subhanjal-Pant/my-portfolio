import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useReveal, SectionLabel, SectionTitle, Divider, PlaceholderImage, Tag, TechPill } from '../components/Shared';
import { projects, testimonials } from '../data/portfolio';

const typingWords = ['Engineer', 'Maker', 'Researcher', 'Explorer'];

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
    { label: 'Publications', value: '2', path: '/publications' },
    { label: 'Awards', value: '6+', path: '/about' },
  ];
  return (
    <div ref={ref} className="reveal grid grid-cols-3 gap-4 max-w-2xl mx-auto">
      {items.map((item) => (
        <Link key={item.label} to={item.path} className="text-center p-6 rounded-xl bg-[#1c2128] border border-[#30363d] hover:border-[#00d4aa] transition-all duration-300 group">
          <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00d4aa' }}>{item.value}</div>
          <div className="text-sm text-[#8b949e] group-hover:text-[#e6edf3] transition-colors">{item.label}</div>
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
      <SectionLabel>Featured Project</SectionLabel>
      <SectionTitle>ANVESAK</SectionTitle>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlaceholderImage label="ANVESAK USV" className="h-64" />
        <div className="flex flex-col justify-center">
          <Tag>USV/Robotics</Tag>
          <p className="text-[#8b949e] mt-3 mb-4 leading-relaxed">{project.shortDesc}</p>
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
    { date: '2024 – Present', role: 'Research Engineer', org: 'Autonomous Systems Lab' },
    { date: '2023 – 2024', role: 'NAST Intern', org: 'Nepal Academy of Science & Technology' },
    { date: '2022 – 2023', role: 'HVAC Intern', org: 'Thermopharm Engineering' },
  ];
  return (
    <div ref={ref} className="reveal max-w-4xl mx-auto">
      <SectionLabel>Recent Experience</SectionLabel>
      <SectionTitle>Where I've Been</SectionTitle>
      <Divider />
      <div className="relative pl-8">
        <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-[#30363d]" />
        {experiences.map((exp, i) => (
          <div key={i} className="relative pb-6 last:pb-0">
            <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-[#0d1117] border-2 border-[#00d4aa] -translate-x-[5px]" />
            <p className="font-mono text-xs text-[#00d4aa] mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>{exp.date}</p>
            <h4 className="text-base font-semibold">{exp.role}</h4>
            <p className="text-sm text-[#8b949e]">{exp.org}</p>
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
              <blockquote className="text-lg text-[#8b949e] leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="text-sm font-semibold text-[#e6edf3]">{t.name}</p>
              <p className="text-xs text-[#8b949e]">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#00d4aa] w-6' : 'bg-[#30363d]'}`}
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
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p className="font-mono text-sm text-[#00d4aa] mb-4 opacity-0 animate-[fadeUp_0.8s_0.3s_forwards]" style={{ fontFamily: 'Space Grotesk, monospace' }}>
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 opacity-0 animate-[fadeUp_0.8s_0.5s_forwards]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Siddhant <span className="text-[#00d4aa]">Yadav</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8b949e] mb-2 opacity-0 animate-[fadeUp_0.8s_0.7s_forwards]">
            <TypingText />
          </p>
          <p className="text-base text-[#8b949e] mb-8 opacity-0 animate-[fadeUp_0.8s_0.8s_forwards]">
            Mechanical Engineering · Unmanned Systems · Space & Robotics
          </p>
          <div className="flex gap-4 opacity-0 animate-[fadeUp_0.8s_0.9s_forwards]">
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-[#00d4aa] text-[#0d1117] hover:bg-[#00eabb] hover:shadow-[0_0_24px_rgba(0,212,170,0.25)] transition-all duration-300 btn-ripple">
              View My Work
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-transparent text-[#e6edf3] border border-[#30363d] hover:border-[#00d4aa] hover:text-[#00d4aa] transition-all duration-300">
              About Me
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeUp_0.8s_1.2s_forwards]">
          <span className="text-[0.65rem] text-[#8b949e] tracking-[0.1em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#00d4aa] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
        </div>
        <style>{`
          @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes scrollPulse { 0%, 100% { opacity: 0.3; transform: scaleY(0.6); } 50% { opacity: 1; transform: scaleY(1); } }
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
