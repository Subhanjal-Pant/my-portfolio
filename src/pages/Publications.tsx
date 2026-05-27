import { useReveal, SectionLabel, SectionTitle, Divider, Card, Button } from '../components/Shared';
import { publications } from '../data/portfolio';

export default function Publications() {
  const ref = useReveal();
  const confRef = useReveal();

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionLabel>Publications</SectionLabel>
          <SectionTitle>Research & Publications</SectionTitle>
          <Divider />
        </div>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <span className="inline-block font-mono text-[0.7rem] text-[#00d4aa] bg-[rgba(0,212,170,0.12)] px-2 py-0.5 rounded mb-3" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                    {pub.type}
                  </span>
                  <h3 className="text-lg font-semibold leading-snug mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {pub.title}
                  </h3>
                  <p className="text-sm text-[#8b949e] mb-1">
                    <span className="text-[#00d4aa] font-medium">{pub.venue}</span> &middot; {pub.date}
                    {pub.page && ` · ${pub.page}`}
                  </p>
                </div>
                <Button href={pub.doi} variant="outline" className="flex-shrink-0 text-xs">DOI / Link</Button>
              </div>
              <div className="mt-4 pt-4 border-t border-[#30363d]">
                <p className="text-xs text-[#8b949e] mb-1 font-medium uppercase tracking-wider">Abstract</p>
                <p className="text-sm text-[#8b949e] leading-relaxed">{pub.abstract}</p>
              </div>
            </Card>
          ))}
        </div>

        <div ref={confRef} className="reveal mt-16">
          <SectionLabel>Presentations</SectionLabel>
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Conference Presentations</h3>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-[#1c2128] border border-[#30363d]">
              <h4 className="text-base font-semibold mb-1">University Scholar Conference 2025</h4>
              <p className="text-sm text-[#8b949e]">Presented ANVESAK system design and field trial results at Kathmandu University, November 2025.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#1c2128] border border-[#30363d]">
              <h4 className="text-base font-semibold mb-1">Nexus SSOChE Conference</h4>
              <p className="text-sm text-[#8b949e]">Presented findings on Kathmandu Valley flood management, February 2025.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
