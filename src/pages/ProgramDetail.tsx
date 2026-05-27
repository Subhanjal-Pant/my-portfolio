import { useParams, Link } from 'react-router-dom';
import { useReveal, SectionLabel, PlaceholderImage, Tag } from '../components/Shared';
import { programs } from '../data/portfolio';

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);
  const ref = useReveal();

  if (!program) {
    return (
      <section className="py-24 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Program not found</h2>
        <Link to="/programs" className="text-[#00d4aa] hover:underline">Back to Programs</Link>
      </section>
    );
  }

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <Link to="/programs" className="inline-flex items-center gap-2 text-sm text-[#8b949e] hover:text-[#00d4aa] transition-colors mb-8">
          &larr; Back to Programs
        </Link>

        <PlaceholderImage label={`${program.title} Banner`} className="w-full h-64 md:h-80 mb-8" />

        <div className="flex flex-wrap gap-2 mb-4">
          {program.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {program.title}
        </h1>

        <div className="space-y-8 mt-8">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <p className="text-[#8b949e] leading-relaxed">{program.overview}</p>
          </div>

          <div>
            <SectionLabel>Objectives</SectionLabel>
            <ul className="space-y-2">
              {program.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-[#8b949e]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00d4aa] flex-shrink-0" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionLabel>Methodology</SectionLabel>
            <p className="text-[#8b949e] leading-relaxed">{program.methodology}</p>
          </div>

          <div>
            <SectionLabel>Outcomes</SectionLabel>
            <p className="text-[#8b949e] leading-relaxed">{program.outcomes}</p>
          </div>

          <div>
            <SectionLabel>Gallery</SectionLabel>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <PlaceholderImage key={i} label={`${program.title} ${i}`} className="h-32" />
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Team</SectionLabel>
            <div className="flex flex-wrap gap-4">
              {program.team.map((member) => (
                <div key={member} className="flex items-center gap-3 p-3 rounded-lg bg-[#1c2128] border border-[#30363d]">
                  <div className="w-10 h-10 rounded-full bg-[#30363d] flex items-center justify-center text-[#8b949e] text-xs">
                    {member.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span className="text-sm font-medium">{member}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/programs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-transparent text-[#e6edf3] border border-[#30363d] hover:border-[#00d4aa] hover:text-[#00d4aa] transition-all duration-300">
            &larr; Back to Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
