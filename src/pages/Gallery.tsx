import { useState } from 'react';
import { useReveal, SectionLabel, SectionTitle, Divider, PlaceholderImage } from '../components/Shared';

const categories = ['All', 'ANVESAK', 'SEDS', 'Events', 'Fieldwork'];

const galleryItems = [
  { id: 1, label: 'ANVESAK Launch Day', category: 'ANVESAK', height: 'h-48' },
  { id: 2, label: 'SONAR Installation', category: 'ANVESAK', height: 'h-64' },
  { id: 3, label: 'CanSat Assembly', category: 'SEDS', height: 'h-40' },
  { id: 4, label: 'Team at River Trial', category: 'Fieldwork', height: 'h-56' },
  { id: 5, label: 'MechTRIX Exhibition', category: 'Events', height: 'h-44' },
  { id: 6, label: 'LiDAR Point Cloud', category: 'ANVESAK', height: 'h-52' },
  { id: 7, label: 'CanSat Launch', category: 'SEDS', height: 'h-60' },
  { id: 8, label: 'Workshop Session', category: 'Events', height: 'h-40' },
  { id: 9, label: 'River Survey Setup', category: 'Fieldwork', height: 'h-48' },
  { id: 10, label: 'Planetarium Event', category: 'Events', height: 'h-56' },
  { id: 11, label: 'USV in Water', category: 'ANVESAK', height: 'h-44' },
  { id: 12, label: 'Field Data Collection', category: 'Fieldwork', height: 'h-52' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useReveal();

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);
  const navigate = (dir: number) => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((item) => item.id === lightbox);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next].id);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionLabel>Gallery</SectionLabel>
          <SectionTitle>Photo Gallery</SectionTitle>
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

        <div className="masonry">
          {filtered.map((item) => (
            <div key={item.id} className="masonry-item cursor-pointer" onClick={() => openLightbox(item.id)}>
              <PlaceholderImage label={item.label} className={`${item.height} hover:border-[#00d4aa] transition-all duration-300 hover:scale-[1.02]`} />
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeLightbox} className="absolute -top-12 right-0 text-[#8b949e] hover:text-[#e6edf3] text-2xl transition-colors">&times;</button>
            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-[-3rem] top-1/2 -translate-y-1/2 text-[#8b949e] hover:text-[#00d4aa] text-3xl transition-colors">&lsaquo;</button>
            <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[#8b949e] hover:text-[#00d4aa] text-3xl transition-colors">&rsaquo;</button>
            <PlaceholderImage
              label={filtered.find((item) => item.id === lightbox)?.label || ''}
              className="h-[60vh] rounded-xl"
            />
            <p className="text-center text-sm text-[#8b949e] mt-4">
              {filtered.find((item) => item.id === lightbox)?.label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
