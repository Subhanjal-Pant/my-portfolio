import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal, SectionLabel, SectionTitle, Divider, PlaceholderImage, Tag, TechPill } from '../components/Shared';
import { projects } from '../data/portfolio';

const categories = ['All', 'USV/Robotics', 'Energy', 'Education', 'Space'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const ref = useReveal();
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionLabel>Projects</SectionLabel>
          <SectionTitle>My Work</SectionTitle>
          <Divider />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#00d4aa] text-[#0d1117]'
                  : 'bg-[#1c2128] text-[#8b949e] border border-[#30363d] hover:border-[#00d4aa] hover:text-[#e6edf3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="block bg-[#1c2128] border border-[#30363d] rounded-xl overflow-hidden card-lift hover:border-[#00d4aa] group"
            >
              <PlaceholderImage label={project.title} className="h-48 rounded-none border-0 rounded-t-xl" />
              <div className="p-6">
                <Tag>{project.category}</Tag>
                <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-[#00d4aa] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-sm text-[#8b949e] leading-relaxed mb-3">{project.shortDesc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((t) => <TechPill key={t}>{t}</TechPill>)}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[#00d4aa] group-hover:underline">
                  View Details <span>&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
