import { useReveal, SectionLabel, SectionTitle, Divider, PlaceholderImage, Card, Button } from '../components/Shared';

const skills = ['CAD', 'Python', 'MATLAB', 'Arduino', 'Raspberry Pi', 'ANSYS', 'SolidWorks', 'AutoCAD'];

const education = [
  { degree: 'B.E. in Mechanical Engineering', institution: 'Institute of Engineering, Pulchowk Campus', period: '2021 – 2025 (Expected)', detail: 'Final-year student with focus on unmanned systems and robotics. Active in research and campus innovation programs.' },
  { degree: 'Higher Secondary (10+2)', institution: 'Science Stream, Nepal', period: '2019 – 2021', detail: 'Physics, Chemistry, Mathematics with focus on engineering fundamentals.' },
];

const languages = [
  { name: 'Nepali', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Conversational' },
];

export default function About() {
  const heroRef = useReveal();
  const bioRef = useReveal();
  const skillsRef = useReveal();
  const eduRef = useReveal();
  const langRef = useReveal();

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="reveal relative py-24 px-6 overflow-hidden">
        <PlaceholderImage label="Profile Photo" className="w-full h-64 md:h-80 rounded-xl" />
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            About <span className="text-[#00d4aa]">Me</span>
          </h1>
        </div>
      </section>

      {/* Bio + Skills */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={bioRef} className="reveal">
            <SectionLabel>Biography</SectionLabel>
            <SectionTitle>Who I Am</SectionTitle>
            <Divider />
            <p className="text-[#8b949e] leading-relaxed mb-4">
              I am a final-year Mechanical Engineering student at the Institute of Engineering, Pulchowk Campus, Nepal. My passion lies at the intersection of mechanical design, electronics, and intelligent systems — building autonomous platforms that operate in challenging real-world environments.
            </p>
            <p className="text-[#8b949e] leading-relaxed mb-4">
              From designing unmanned surface vehicles for river bathymetry to developing micro-hydro power systems for off-grid communities, I thrive on engineering solutions that create tangible impact. My research spans SONAR-based mapping, LiDAR integration, and autonomous navigation.
            </p>
            <p className="text-[#8b949e] leading-relaxed mb-6">
              Beyond engineering, I am passionate about space exploration, science communication, and making technology accessible. I actively organize planetarium events and participate in space-related hackathons and competitions.
            </p>
            <Button href="#" variant="primary">Download CV</Button>
          </div>

          <div ref={skillsRef} className="reveal">
            <SectionLabel>Skills</SectionLabel>
            <SectionTitle>Technical Stack</SectionTitle>
            <Divider />
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3 p-3 rounded-lg bg-[#1c2128] border border-[#30363d] hover:border-[#00d4aa] transition-all duration-300">
                  <div className="w-8 h-8 rounded-md bg-[rgba(0,212,170,0.12)] flex items-center justify-center text-[#00d4aa] text-xs font-bold" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                    {skill.charAt(0)}
                  </div>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6">
        <div ref={eduRef} className="reveal max-w-4xl mx-auto">
          <SectionLabel>Education</SectionLabel>
          <SectionTitle>Academic Background</SectionTitle>
          <Divider />
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-[#30363d]" />
            {education.map((edu, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-[#0d1117] border-2 border-[#00d4aa] -translate-x-[5px]" />
                <p className="font-mono text-xs text-[#00d4aa] mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>{edu.period}</p>
                <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                <p className="text-sm text-[#8b949e] mb-2">{edu.institution}</p>
                <p className="text-sm text-[#8b949e] leading-relaxed">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 px-6">
        <div ref={langRef} className="reveal max-w-4xl mx-auto">
          <SectionLabel>Languages</SectionLabel>
          <SectionTitle>Language Proficiency</SectionTitle>
          <Divider />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <Card key={lang.name}>
                <h4 className="text-base font-semibold mb-2">{lang.name}</h4>
                <p className="text-sm text-[#8b949e]">{lang.level}</p>
                <div className="mt-3 h-1.5 bg-[#30363d] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00d4aa] rounded-full transition-all duration-700"
                    style={{ width: lang.level === 'Native' ? '100%' : lang.level === 'Fluent' ? '85%' : '60%' }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
