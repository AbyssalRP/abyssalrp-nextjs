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

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <canvas ref={canvasRef} className="fixed inset-0 z-0" />
      <div className="fixed inset-0 z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-60" />

      {/* Navigation */}
      <nav className="absolute top-0 z-30 flex justify-center w-full py-6 space-x-10 text-xl font-semibold">
        {['Home', 'About Us', 'Join Us', 'Rules'].map((text, i) => (
          <Link key={i} href={`/${text === 'Home' ? '' : text.toLowerCase().replace(/ /g, '')}`}>
            <a className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
              {text}
            </a>
          </Link>
        ))}
      </nav>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen pt-40 text-center px-4">
        {activeSection ? (
          <>
            <h1 className="mb-6 text-6xl font-extrabold uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text">
              {activeSection}
            </h1>
            <p className="text-lg text-zinc-300 max-w-3xl">
              (This is placeholder content for <span className="text-purple-200 font-medium">{activeSection}</span>. Paste the full rule text here.)
            </p>
          </>
        ) : (
          <>
            <h1 className="mb-6 text-6xl font-extrabold uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text">
              Welcome to the Abyssal RP Rulebook
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl">
              Choose a category below to view detailed server rules.
            </p>
          </>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {rules.map((category, idx) => (
            <div key={idx} className="p-4 border border-purple-700 rounded-xl bg-black/50 hover:bg-black/70 transition shadow-lg">
              <h2 className="text-lg font-bold text-purple-300 mb-2 uppercase tracking-wide">
                {category.title}
              </h2>
              {category.sections.map((section, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setActiveSection(`${category.title} - ${section}`)}
                  className="block w-full text-left px-2 py-1 text-sm text-purple-100 hover:text-white hover:bg-purple-800/40 rounded"
                >
                  {section}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <footer className="relative z-20 w-full py-4 text-center text-sm text-white bg-black bg-opacity-60">
        © 2025 Abyssal RP. Designed for storytellers, built by players.
      </footer>
    </div>
  );
}