import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function RulesPage() {
  return (
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
          Rules Coming Soon
        </h1>
        <p className="text-center text-lg text-white">Stay tuned for more information about the server rules. We are working on them and will update you soon!</p>
      </div>

      <footer className="absolute bottom-0 z-20 w-full py-4 text-center text-sm text-purple-200 bg-black bg-opacity-60">
        © 2025 Abyssal RP. Designed for storytellers, built by players.
      </footer>
    </div>
  );
}