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
  // Add all other sections here...
];

export default function RulesPage() {
  const [activeId, setActiveId] = useState('');
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

      stars.forEach((star) => {
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

        <canvas ref={canvasRef} className="absolute inset-0 z-10" />

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

          {sections.map((section) => (
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