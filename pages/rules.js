import { useState, useEffect, useRef } from 'react';
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
      <div className="fixed inset-0 z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-60 blur-3xl" />

      <nav className="absolute top-0 z-30 flex justify-center w-full py-6 space-x-8 text-xl font-semibold bg-black bg-opacity-40 backdrop-blur-md">
        <Link href="/"><a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 hover:opacity-80 transition-opacity">Home</a></Link>
        <Link href="/about"><a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 hover:opacity-80 transition-opacity">About Us</a></Link>
        <Link href="/join"><a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 hover:opacity-80 transition-opacity">Join Us</a></Link>
        <Link href="/rules"><a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 hover:opacity-80 transition-opacity">Rules</a></Link>
      </nav>

      <div className="relative z-20 flex w-full min-h-screen pt-32">
        <aside className="w-72 bg-black bg-opacity-80 border-r border-purple-600 shadow-lg overflow-y-auto">
          <div className="p-5 text-2xl font-bold tracking-wide text-purple-300">Rules</div>
          <nav className="space-y-1 px-4 pb-8">
            {rules.map((category, index) => (
              <div key={index}>
                <div className="text-sm text-purple-500 uppercase font-bold mt-4 mb-2 tracking-widest">
                  {category.title}
                </div>
                {category.sections.map((section, sIndex) => (
                  <button
                    key={sIndex}
                    onClick={() => setActiveSection(`${category.title} - ${section}`)}
                    className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-purple-900/40 transition text-purple-100"
                  >
                    {section}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 px-8 pt-12 overflow-y-auto backdrop-blur-md text-white">
          {activeSection ? (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text mb-6 drop-shadow">
                {activeSection}
              </h2>
              <p className="text-lg leading-relaxed text-zinc-200/90">
                (This is placeholder content for <span className="text-purple-300 font-semibold">{activeSection}</span>. Paste the full rule text here.)
              </p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto text-center mt-20">
              <h1 className="text-4xl font-bold text-purple-400 mb-4">Welcome to the Abyssal RP Rulebook</h1>
              <p className="text-lg text-zinc-300">Choose a category from the left to view detailed server rules.</p>
            </div>
          )}
        </main>
      </div>

      <footer className="relative z-20 w-full py-4 text-center text-sm text-white bg-black bg-opacity-60">
        © 2025 Abyssal RP. Designed for storytellers, built by players.
      </footer>
    </div>
  );
}