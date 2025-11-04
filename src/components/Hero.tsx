import { Dumbbell } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <Dumbbell className="w-16 h-16 mb-6 text-emerald-500" />
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
          Lu-Ka Fitness
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 text-center max-w-2xl">
          Transform Your Body, Transform Your Life
        </p>
        <button className="mt-8 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300">
          Get Started Today
        </button>
      </div>
    </section>
  );
}
