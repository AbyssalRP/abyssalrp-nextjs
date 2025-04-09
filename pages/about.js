import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AboutUs() {
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
  }, [canvasRef]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Nebula Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-60 filter blur-3xl"></div>

      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      {/* Navigation Tabs */}
      <nav className="absolute top-0 z-30 flex justify-center w-full py-6 space-x-8 text-xl font-semibold">
        <Link href="/" className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">Home</Link>
        <Link href="/about" className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">About Us</Link>
        <Link href="#" className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">Join Us</Link>
        <Link href="#" className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">Rules</Link>
      </nav>

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-8 py-32 text-center">
        <h1 className="mb-8 text-6xl font-bold uppercase drop-shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text">
          About Abyssal RP
        </h1>
        <p className="max-w-4xl mx-auto text-xl italic drop-shadow-md bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
          Welcome to Abyssal RP,<br/><br/>
          If you're here, chances are you've walked the same path many of us have. You've spent hours, days, even months searching for a city that truly feels like home—a city free from admin abuse, metagaming, and toxicity. Like you, we've grown tired of servers dominated by repetitive cop-and-criminal scenarios, neglecting the vibrant experiences that civilians crave.<br/><br/>
          At Abyssal RP, we're building something different. We're not just another GTA RP server—we're a thriving community built by roleplayers, for roleplayers. Our vision is clear: to foster a balanced ecosystem where every character has a meaningful story to tell. Whether you're a seasoned criminal mastermind, an upstanding officer of the law, or a civilian running a business or simply exploring your creativity, your story matters here.<br/><br/>
          We passionately believe that great roleplay isn't defined by power or status, but by rich interactions, immersive experiences, and fair play. Our team is dedicated to transparency, impartial moderation, and genuine community engagement, ensuring Abyssal RP is your escape from the frustrations you've encountered elsewhere.<br/><br/>
          Join us and become part of a city that values your narrative, respects your journey, and encourages you to thrive. Abyssal RP—more than just a city; it's your new home.
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 z-20 w-full py-4 text-center text-sm text-white bg-black bg-opacity-60">
        © 2025 Abyssal RP. Designed for storytellers, built by players.
      </footer>
    </div>
  );
}
