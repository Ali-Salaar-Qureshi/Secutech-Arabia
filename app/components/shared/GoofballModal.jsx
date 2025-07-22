'use client';

import { useEffect, useState } from 'react';

export default function GoofballModal() {
  const [sequence, setSequence] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState('countdown');
  const [countdown, setCountdown] = useState(3);

  // Audio refs
  const siren = typeof Audio !== 'undefined' ? new Audio('/sounds/nuclear alarm.mp3') : null;
  // Inject confetti script once
  useEffect(() => {
    if (!window.confetti) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Handle key sequence sta
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = typeof e.key === 'string' ? e.key.toLowerCase() : '';
      const newSequence = [...sequence, key].slice(-3); 
      setSequence(newSequence);

      const cheatCode = ['s', 't', 'a'];
      if (newSequence.join(',') === cheatCode.join(',')) {
        setIsOpen(true);
        setSequence([]);
        setPhase('countdown');
        setCountdown(3);
        siren?.play();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence]);

  // Countdown logic
  useEffect(() => {
    if (isOpen && phase === 'countdown' && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (isOpen && phase === 'countdown' && countdown === 0) {
      setPhase('404');
      siren?.pause();
      siren.currentTime = 0;
    }
  }, [isOpen, phase, countdown]);

  const triggerConfetti = () => {
    if (!window.confetti) return;

    const colors = ['#0E5B96', '#F97316', '#10B981', '#EAB308'];

    window.confetti({
      particleCount: 1200,
      spread: 800,
      origin: { y: 0.6 },
      colors,
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    setSequence([]);
    setPhase('countdown');
    setCountdown(3);

    triggerConfetti(); // Trigger only on Go Back click
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white text-center px-4">
          {phase === 'countdown' ? (
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md text-center animate-fadeIn text-black">
              <h2 className="text-2xl font-extrabold text-[#DC2626] mb-3">Decrypting Your Security...</h2>
              <p className="text-lg">Secutech Arabia’s innovation in:</p>
              <p className="text-5xl font-bold text-red-600 mt-2">{countdown}</p>
            </div>
          ) : (
            <div className='flex flex-col items-center gap-3'>
              <img src="/images/Secutech logo.png" className='w-[30%]' alt="" />
              <p className="text-2xl font-semibold mb-4">Welcome to Secutech’s Hidden Protocol</p>
              <p className="text-[#ccc] max-w-md mx-auto">
                Our mission: to make security feel invisible but invincible.
              </p>
              <button
                onClick={handleClose}
                className="mt-8 px-6 py-3 bg-red-700 hover:bg-[#FF4136] transition duration-300 rounded-full text-white font-bold"
              >
                Exit Secure Mode
              </button>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
