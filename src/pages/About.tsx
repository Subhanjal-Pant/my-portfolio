import { useReveal, SectionLabel, SectionTitle, Divider, PlaceholderImage, Card, Button } from '../components/Shared';

const stackCategories = [
  {
    icon: '⚙',
    title: 'Mechanical',
    skills: [
      { label: 'SolidWorks', accent: true },
      { label: 'ANSYS Static Structural', accent: true },
      { label: 'AutoCAD', accent: false },
      { label: 'FEM', accent: true },
      { label: 'Welding', accent: false },
      { label: 'Lathe machining', accent: false },
      { label: 'Drilling & assembly', accent: false },
      { label: 'Chassis fabrication', accent: false },
    ],
  },
  {
    icon: '🔌',
    title: 'Electronics',
    skills: [
      { label: 'Arduino', accent: true },
      { label: 'ESP-32', accent: true },
      { label: 'Raspberry Pi', accent: true },
      { label: 'IMU (MPU-6050)', accent: false },
      { label: 'ToF (VL53L0X)', accent: false },
      { label: 'Sensor wiring', accent: false },
    ],
  },
  {
    icon: '💻',
    title: 'Programming',
    skills: [
      { label: 'C', accent: true },
      { label: 'C++', accent: true },
      { label: 'Python', accent: true },
      { label: 'MATLAB', accent: false },
    ],
  },
  {
    icon: '📊',
    title: 'Data Analysis',
    skills: [
      { label: 'NumPy', accent: true },
      { label: 'Pandas', accent: true },
      { label: 'Matplotlib', accent: false },
      { label: 'Seaborn', accent: false },
      { label: 'Plotly', accent: true },
    ],
  },
  {
    icon: '🧠',
    title: 'Machine Learning',
    skills: [
      { label: 'Linear regression', accent: false },
      { label: 'Logistic regression', accent: false },
      { label: 'KNN', accent: false },
      { label: 'Naïve Bayes', accent: false },
      { label: 'Normalisation', accent: false },
      { label: 'Standardisation', accent: false },
    ],
  },
  {
    icon: '🤖',
    title: 'Robotics',
    skills: [
      { label: 'ROS / ROS2', accent: true },
      { label: 'Gazebo', accent: true },
      { label: 'Nav2', accent: true },
      { label: 'MoveIt', accent: false },
      { label: 'ros2_control', accent: false },
      { label: 'EKF localisation', accent: true },
      { label: 'ORB-SLAM3', accent: false },
    ],
  },
  {
    icon: '🔍',
    title: 'Familiarity',
    skills: [
      { label: 'Factor graphs', accent: false },
      { label: 'Docker', accent: false },
      { label: 'STM32', accent: false },
      { label: 'Linux', accent: false },
      { label: 'Git', accent: false },
    ],
  },
];

function StackCategory({ icon, title, skills }) {
  return (
    <div className="group p-4 rounded-xl bg-[#1c2128] border border-[#30363d] hover:border-[#00d4aa] transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[rgba(0,212,170,0.12)] flex items-center justify-center text-lg">
            {icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="text-xs text-[#8b949e]">{skills.length} skills</p>
          </div>
        </div>
        <svg
          className="w-4 h-4 text-[#8b949e] transition-transform duration-200 group-hover:rotate-180"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40">
        <div className="mt-4 pt-4 border-t border-[#30363d] flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.label}
              className={`text-xs px-3 py-1 rounded-full border transition-all duration-150 ${
                skill.accent
                  ? 'bg-[rgba(0,212,170,0.12)] text-[#00d4aa] border-transparent'
                  : 'bg-transparent text-[#8b949e] border-[#30363d]'
              }`}
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const education = [
  {
    degree: 'B.E. in Mechanical Engineering',
    institution: 'Institute of Engineering, Pulchowk Campus',
    period: '2021 – 2025',
    detail:
      'Final-year student with focus on Autonomous systems. Active in research related to autonomous navigation and active perception',
  },
  {
    degree: 'Higher Secondary (10+2)',
    institution: 'Nepal Mega College, Nepal',
    period: '2019 – 2021',
    detail: 'Physics, Chemistry, Mathematics and Computer',
  },
];

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Nepali', level: 'Native' },
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
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
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
              I am a Mechanical Engineer graduated from the Institute of Engineering, Pulchowk Campus,
              Nepal. My passion lies at the intersection of mechanical design, electronics, and
              intelligent systems that includes building autonomous systems that operate in challenging
              real-world environments.
            </p>
            <p className="text-[#8b949e] leading-relaxed mb-4">
              From fabricating pneumatic testbeds and integrating IMU and ToF sensors for real-time
              state estimation, to deploying autonomous navigation in simulation using ROS2 and the Nav2
              stack, I build across the full stack robotics stack from hardware to algorithms. My
              current focus is sensor fusion and EKF-based localisation for GPS-denied field robotics.
            </p>
            <p className="text-[#8b949e] leading-relaxed mb-6">
              Beyond engineering, I am drawn to the broader questions: how machines learn to trust their
              own perception, and what it means to build systems that operate where humans cannot. I am
              actively working toward graduate research in field and space robotics.
            </p>
            <Button href="/Subhanjal_CV.pdf" variant="primary" download>
              Download CV
            </Button>
          </div>

          <div ref={skillsRef} className="reveal">
            <SectionLabel>Skills</SectionLabel>
            <SectionTitle>Technical Stack</SectionTitle>
            <Divider />
            <div className="flex flex-col gap-3">
              {stackCategories.map((cat) => (
                <StackCategory key={cat.title} {...cat} />
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
                <p
                  className="font-mono text-xs text-[#00d4aa] mb-1"
                  style={{ fontFamily: 'Space Grotesk, monospace' }}
                >
                  {edu.period}
                </p>
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
                    style={{
                      width:
                        lang.level === 'Native' ? '100%' : lang.level === 'Fluent' ? '85%' : '60%',
                    }}
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