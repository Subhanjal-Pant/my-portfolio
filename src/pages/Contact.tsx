import { useState } from 'react';
import { useReveal, SectionLabel, SectionTitle, Divider, Card, Button } from '../components/Shared';

export default function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = 'w-full px-4 py-3 rounded-lg bg-[#1c2128] border border-[#30363d] text-[#e6edf3] text-sm focus:outline-none focus:border-[#00d4aa] transition-colors duration-300 placeholder:text-[#8b949e]';

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle>Get in Touch</SectionTitle>
          <Divider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-[rgba(0,212,170,0.12)] border border-[#00d4aa] text-[#00d4aa] text-sm">
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#8b949e] mb-1.5">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#8b949e] mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#8b949e] mb-1.5">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#8b949e] mb-1.5">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} h-32 resize-none`}
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button variant="primary" onClick={() => {}} className="w-full justify-center">Send Message</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <h4 className="text-base font-semibold mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#00d4aa] mt-0.5">&#9993;</span>
                  <div>
                    <p className="text-xs text-[#8b949e] mb-0.5">Email</p>
                    <a href="mailto:siddhant@example.com" className="text-sm text-[#e6edf3] hover:text-[#00d4aa] transition-colors">siddhant@example.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00d4aa] mt-0.5">&#9742;</span>
                  <div>
                    <p className="text-xs text-[#8b949e] mb-0.5">Phone</p>
                    <p className="text-sm text-[#e6edf3]">+977-XXXXXXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00d4aa] mt-0.5">&#9679;</span>
                  <div>
                    <p className="text-xs text-[#8b949e] mb-0.5">Location</p>
                    <p className="text-sm text-[#e6edf3]">Lalitpur, Nepal</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-[#1c2128] border border-[#30363d] rounded-xl h-48 flex items-center justify-center text-[#8b949e] text-sm">
              Google Maps Placeholder
            </div>

            <Card>
              <h4 className="text-base font-semibold mb-3">Social Links</h4>
              <div className="flex gap-4">
                {['LinkedIn', 'GitHub', 'Instagram'].map((s) => (
                  <a key={s} href="#" className="text-sm text-[#8b949e] hover:text-[#00d4aa] transition-colors duration-200">{s}</a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
