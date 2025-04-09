import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const RuleSection = ({ title, children, id, activeId }) => {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const shouldOpen = activeId === id;
    setOpen(shouldOpen);

    if (shouldOpen && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeId, id]);

  return (
    <div ref={sectionRef} className="border border-purple-500 rounded-2xl overflow-hidden mb-6 shadow-xl backdrop-blur-md bg-gradient-to-br from-black/60 via-purple-900/40 to-blue-900/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 hover:opacity-90 transition font-semibold text-lg text-white tracking-wide"
      >
        {title}
      </button>
      {open && (
        <div className="px-6 py-6 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 text-purple-100 space-y-6 italic leading-relaxed tracking-wide font-light text-lg">
          {children}
        </div>
      )}
    </div>
  );
};

const sections = [
  { id: "support-system", label: "Support System" },
  { id: "ticket-types", label: "Types of Tickets" },
  { id: "reporting-protocol", label: "Reporting Protocol" },
  { id: "discord-rules", label: "Discord Rules" },
  { id: "voice-chat-rules", label: "Voice Chat Rules" },
  { id: "rdm-vdm", label: "RDM and VDM" },
  { id: "breaking-character", label: "Breaking Character" },
  { id: "combat-logging", label: "Combat Logging" },
  { id: "fail-rp", label: "Fail RP" },
  { id: "metagaming", label: "Metagaming" },
  { id: "hate-speech", label: "Hate Speech, Slurs, and Discrimination" },
  { id: "gun-fear", label: "Gun Fear and Valuing Life" },
  { id: "staff-interaction", label: "Staff Interaction" },
  { id: "ems-nlr", label: "EMS Revives and New Life Rule" },
  { id: "revealing-locations", label: "Revealing Locations" },
  { id: "suicide-rp", label: "Suicide RP" },
  { id: "exploiting-cheating", label: "Exploiting, Cheating, or Using Macros" },
  { id: "leo-ems", label: "LEO / EMS Rules" },
  { id: "criminal-rp", label: "Criminal RP and PvP Limits" },
  { id: "tsunami-restrictions", label: "Tsunami Restrictions" },
  { id: "continuity-gang-turf", label: "Continuity and Gang Turf" },
  { id: "robbery-looting", label: "Robbery Rules and Looting" },
  { id: "whitelisted-jobs", label: "Whitelisted Jobs" },
  { id: "powergaming", label: "Powergaming" },
  { id: "heist-rules", label: "Heist Rules" },
  { id: "hostage-rules", label: "Hostage Rules" },
  { id: "heist-negotiations", label: "Heist Negotiations" },
  { id: "escape-chases", label: "Escape and Chases" },
  { id: "pd-limitations", label: "PD Limitations" },
  { id: "heist-cooldowns", label: "Heist Cooldowns" },
  { id: "heist-interference", label: "Heist Interference" },
  { id: "final-word", label: "Final Word on Heists" },
];

export default function RulesPage() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveId(window.location.hash.replace('#', ''));
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <div className="pt-20 relative w-full min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-60 filter blur-3xl"></div>

        <nav className="absolute top-0 z-30 flex justify-center w-full py-6 space-x-8 text-xl font-semibold">
          <Link href="/" className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">Home</Link>
          <Link href="/about" className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">About Us</Link>
          <Link href="/join" className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">Join Us</Link>
          <Link href="/rules" className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">Rules</Link>
        </nav>

        <div className="relative z-20 max-w-5xl mx-auto px-4 py-10 text-purple-100" id="rules-top">
          <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
            Abyssal RP — Official Server Rules
          </h1>

          {sections.map(section => (
            <RuleSection key={section.id} id={section.id} title={section.label} activeId={activeId}>
              <p>Detailed rules and information about {section.label}.</p>
            </RuleSection>
          ))}
        </div>

        <footer className="absolute bottom-0 z-20 w-full py-4 text-center text-sm text-purple-200 bg-black bg-opacity-60">
          © 2025 Abyssal RP. Designed for storytellers, built by players.
        </footer>
      </div>
    </>
  );
}
