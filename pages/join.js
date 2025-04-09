import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function JoinUs() {
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
        <Link href="/"><a className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">Home</a></Link>
        <Link href="/about"><a className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">About Us</a></Link>
        <Link href="/join"><a className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">Join Us</a></Link>
        <Link href="/rules"><a className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">Rules</a></Link>
      </nav>

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-8 py-32 text-center">
        <h1 className="mb-8 text-6xl font-bold uppercase drop-shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text">
          Welcome to Abyssal RP!
        </h1>
        <p className="max-w-4xl mx-auto text-xl italic drop-shadow-md bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
          We're excited to have you! To join our immersive community, please follow these simple steps:
          <br /><br />
          1. Join our Discord server.<br /><br />
          <a href="https://discord.gg/PCtfNK99zT" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-white shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110">
            Join Our Discord
          </a><br /><br />
          2. Read the server rules carefully.<br /><br />
          3. React with a checkmark to acknowledge you've read and agreed to the rules.<br /><br />
          4. Submit a whitelist application ticket in our Discord, and we'll help you from there.<br /><br />
          We're looking forward to your stories!
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 z-20 w-full py-4 text-center text-sm text-white bg-black bg-opacity-60">
        © 2025 Abyssal RP. Designed for storytellers, built by players.
      </footer>
    </div>
  );
}