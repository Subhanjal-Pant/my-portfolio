import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#30363d] bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00d4aa' }}>
              SY
            </Link>
            <p className="text-[#8b949e] text-sm mt-3 leading-relaxed">
              Mechanical Engineering student from Nepal, building autonomous systems for the real world.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'About', path: '/about' },
                { label: 'Projects', path: '/projects' },
                { label: 'Publications', path: '/publications' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-[#8b949e] hover:text-[#00d4aa] transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-3">Connect</h4>
            <div className="flex gap-4">
              {['LinkedIn', 'GitHub', 'Instagram'].map((s) => (
                <a key={s} href="#" className="text-sm text-[#8b949e] hover:text-[#00d4aa] transition-colors duration-200">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#30363d] pt-6 text-center">
          <p className="text-xs text-[#8b949e]">Designed & built by Siddhant Yadav</p>
        </div>
      </div>
    </footer>
  );
}
