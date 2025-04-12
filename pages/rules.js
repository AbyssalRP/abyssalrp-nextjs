import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const rules = [
  { title: '1. Support & Reporting', sections: ['Support System', 'Types of Tickets', 'Reporting Protocol'] },
  { title: '2. Community Conduct', sections: ['Discord Rules', 'Voice Chat Rules', 'Hate Speech & Discrimination'] },
  { title: '3. Roleplay Standards', sections: ['RDM & VDM', 'Breaking Character', 'Combat Logging', 'Fail RP', 'Metagaming', 'Gun Fear & Valuing Life'] },
  { title: '4. EMS, NLR & Death', sections: ['EMS Revives & New Life Rule', 'Suicide RP'] },
  { title: '5. Zone & Location Rules', sections: ['Revealing Locations', 'Green Zone'] },
  { title: '6. Criminal RP & Heists', sections: ['General Heist Rules', 'Hostage Rules', 'Negotiations', 'Escape & Chases', 'PD Limitations', 'Cooldowns', 'Interference', 'Final Word'] },
  { title: '7. Gangs & Turf', sections: ['Gang Creation Requirements', 'Gang Structure', 'Gang Wars', 'Bleeding Out & Switching Gangs', 'Interaction with PD', 'Gang Disbandment'] },
  { title: '8. Staff & Developer Conduct', sections: ['Developer Rules'] },
  { title: '9. AFK & Queue Holding', sections: ['AFK & Queue Abuse'] },
  { title: '10. Key RP Terms', sections: ['Fail RP', 'Bleed Out', 'Powergaming', 'On-sight', 'Combat Logging', 'Stream Sniping'] },
];

export default function RulesPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [openCategories, setOpenCategories] = useState({});
  const [search, setSearch] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileRulesOpen, setMobileRulesOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let stars = [];
    const createStars = () => {
      stars = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        alpha: Math.random(),
        delta: Math.random() * 0.015 + 0.005,
      }));
    };
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };
    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
      });
      requestAnimationFrame(animateStars);
    };
    resizeCanvas();
    animateStars();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const toggleCategory = (idx) => {
    setOpenCategories(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const filteredRules = rules.filter(cat =>
    cat.title.toLowerCase().includes(search.toLowerCase()) ||
    cat.sections.some(sec => sec.toLowerCase().includes(search.toLowerCase()))
  );

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Join Us', href: '/join' },
    { name: 'Rules', href: '/rules' },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-black overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 z-0" />
      <div className="fixed inset-0 z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-60" />

      {/* Top Nav */}
      <nav className="absolute top-0 z-30 w-full px-6 py-3 text-xl font-semibold">
        <div className="flex justify-between items-center md:hidden">
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="text-white bg-purple-800 hover:bg-purple-700 px-3 py-2 rounded"
          >
            ☰ Menu
          </button>
        </div>
        <div className="hidden md:flex justify-center space-x-10">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href}>
              <a className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileNavOpen && (
          <div className="md:hidden mt-4 space-y-3 bg-black/80 p-4 rounded-lg">
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href}>
                <a
                  onClick={() => setMobileNavOpen(false)}
                  className="block text-purple-300 hover:text-white transition"
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <button
              onClick={() => setMobileRulesOpen(!mobileRulesOpen)}
              className="w-full text-left text-pink-400 font-bold uppercase text-sm mt-2"
            >
              {mobileRulesOpen ? 'Hide Rules Index' : 'Show Rules Index'}
            </button>
            {mobileRulesOpen && (
              <div className="mt-2 space-y-4">
                {rules.map((category, idx) => (
                  <div key={idx}>
                    <button
                      onClick={() => toggleCategory(idx)}
                      className="text-left w-full text-purple-300 font-medium"
                    >
                      {category.title}
                    </button>
                    <div className={`overflow-hidden transition-all ${openCategories[idx] ? 'max-h-[300px]' : 'max-h-0'}`}>
                      {category.sections.map((section, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            setActiveSection(`${category.title} - ${section}`);
                            setMobileNavOpen(false);
                            setMobileRulesOpen(false);
                          }}
                          className={`block text-left text-sm px-2 py-1 w-full rounded ${
                            activeSection === `${category.title} - ${section}`
                              ? 'bg-purple-700 text-white font-semibold'
                              : 'text-purple-200 hover:bg-purple-900'
                          }`}
                        >
                          {section}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Layout */}
      <div className="relative z-20 flex-1 flex flex-col md:flex-row pt-20 pb-20">
        <aside className="hidden md:block bg-black/70 border-r border-purple-800 p-4 md:w-72 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
          <h2 className="text-xl text-purple-300 font-bold mb-4">Rule Categories</h2>
          {filteredRules.map((category, idx) => (
            <div key={idx} className="mb-4">
              <button
                onClick={() => toggleCategory(idx)}
                className="w-full text-left font-semibold text-pink-400 hover:text-white uppercase text-sm mb-2"
              >
                {category.title}
              </button>
              <div
                className={`ml-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  openCategories[idx] ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                {category.sections.map((section, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => {
                      setActiveSection(`${category.title} - ${section}`);
                    }}
                    className={`block w-full text-left px-3 py-1 text-sm rounded transition ${
                      activeSection === `${category.title} - ${section}`
                        ? 'bg-purple-700 text-white font-semibold'
                        : 'text-purple-100 hover:text-white hover:bg-purple-800/30'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 pt-6 pb-10">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search rules..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-lg px-4 py-2 bg-black border border-purple-600 text-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
            />
          </div>

          {activeSection ? (
            <>
              <h1 className="mb-6 text-5xl font-extrabold uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text">
                {activeSection}
              </h1>
              <p className="text-lg text-zinc-300 max-w-3xl">
                (This is placeholder content for{' '}
                <span className="text-purple-200 font-medium">{activeSection}</span>. Paste the full rule text here.)
              </p>
            </>
          ) : (
            <>
              <h1 className="mb-6 text-5xl font-extrabold uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text">
                Welcome to the Abyssal RP Rulebook
              </h1>
              <p className="text-lg text-zinc-300 max-w-2xl">
                Use the sidebar or search to explore detailed server rules.
              </p>
            </>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-20 w-full py-4 text-center text-sm text-white bg-black bg-opacity-60">
        © 2025 Abyssal RP. Designed for storytellers, built by players.
      </footer>
    </div>
  );
}
