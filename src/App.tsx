import { Dumbbell, Clock, MapPin, Phone, Mail, X, Users, Pill, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b-2 border-red-600">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/Screenshot_2025-10-28-19-16-29-550_com.instagram.android-edit.jpg"
              alt="Lu-Ka Fitness Club Logo"
              className="h-20 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-8 text-gray-900 font-semibold text-lg">
            <a href="#uvod" className="hover:text-red-600 transition">ÚVOD</a>
            <a href="#info" className="hover:text-red-600 transition">INFORMACE</a>
            <a href="#galerie" className="hover:text-red-600 transition">FOTKY</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="uvod"
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: 'url(/Screenshot_2025-10-28-18-39-28-729_com.instagram.android-edit.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl py-32">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider uppercase headline">
            Tvrdá dřina není nikdy špatné rozhodnutí
          </h1>
          <p className="text-xl md:text-2xl text-red-500 font-bold uppercase tracking-wide">
            Nejlépe vybavené fitko v Novém Jičíně
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16 uppercase">
            Informace
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Opening Hours */}
            <div className="bg-white p-8 border-2 border-red-600 transition-all duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900 uppercase">Otevírací doba</h3>
              </div>
              <div className="space-y-3 text-gray-700 text-lg">
                <p className="flex justify-between">
                  <span className="font-semibold">Po-Pá:</span>
                  <span>9:00 - 21:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">So-Ne:</span>
                  <span>9:00 - 13:00</span>
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white p-8 border-2 border-red-600 transition-all duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <Dumbbell className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900 uppercase">Ceník</h3>
              </div>
              <div className="space-y-3 text-gray-700 text-lg">
                <p className="flex justify-between">
                  <span className="font-semibold">1 vstup:</span>
                  <span className="text-red-600 font-bold">100 Kč</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Měsíční členství:</span>
                  <span className="text-red-600 font-bold">900 Kč</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">10 vstupů:</span>
                  <span className="text-red-600 font-bold">900 Kč</span>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-8 border-2 border-red-600 transition-all duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900 uppercase">Adresa</h3>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                Šrámkova 19<br />
                Nový Jičín
              </p>
              <button
                onClick={() => window.open('https://www.google.com/maps/search/Lu-Ka+fitness+club+Novy+Jicin/@49.5977427,18.0139626,18z', '_blank')}
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 transition-all duration-300 flex items-center gap-2 uppercase"
              >
                <MapPin className="w-5 h-5" />
                Zobrazit na mapě
              </button>
            </div>

            {/* Contact */}
            <div className="bg-white p-8 border-2 border-red-600 transition-all duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900 uppercase">Kontakt</h3>
              </div>
              <div className="space-y-4 text-gray-700 text-lg">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>Telefon</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span>Email</span>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/luka_fitness_club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/lukafitnessclub/?locale=cs_CZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Description */}
          <div className="max-w-4xl mx-auto mt-12 bg-white p-8 border-2 border-red-600 transition-all duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Vybavení</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Naše posilovna je vybavená posilovacími stoji pro každý sval, dokonce jako jediná posilovna v Novém Jičíně máme stroje na přitahování s oporou a to dokonce dva! Tyto speciální stroje trénují zádové svaly, také máme samozdřejmě kardio sekci která obsahuje běžecké pásy, nekonečné schody, cyklistické stoje a dokonce i rotopedy, samozdřejmě máme také sekci k volnými váhami jako jednoručky 2-50kg, dvojručky 10-50kg, osy a kotouče a samozdřejmě bench press a stanici na dřepy a mrtvé tahy.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Trainers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16 uppercase">
            Osobní trenéři
          </h2>

          <div className="max-w-6xl mx-auto">
            {/* Trainer Photos */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden border-2 border-red-600 transition-all duration-300 group-hover:border-red-400 group-hover:shadow-lg group-hover:shadow-red-600/30">
                  <img
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Personal Trainer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden border-2 border-red-600 transition-all duration-300 group-hover:border-red-400 group-hover:shadow-lg group-hover:shadow-red-600/30">
                  <img
                    src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Personal Trainer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden border-2 border-red-600 transition-all duration-300 group-hover:border-red-400 group-hover:shadow-lg group-hover:shadow-red-600/30">
                  <img
                    src="https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Personal Trainer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-red-600 transition-all duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-1 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900 uppercase">Profesionální tréninky</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Nabízíme individuální tréninky s profesionálními trenéry, kteří vám pomohou dosáhnout vašich fitness cílů. Naši trenéři mají bohaté zkušenosti a vytvoří vám tréninkový plán šitý na míru.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 border border-red-600/50">
                  <h4 className="text-xl font-bold text-red-600 mb-3">Co nabízíme:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Individuální tréninkové plány</li>
                    <li>• Výživové poradenství</li>
                    <li>• Technická korekce cviků</li>
                    <li>• Motivace a podpora</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 border border-red-600/50">
                  <h4 className="text-xl font-bold text-red-600 mb-3">Ceny za osobní trénink:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex justify-between">
                      <span>1 trénink:</span>
                      <span className="text-red-600 font-bold">400 Kč</span>
                    </li>
                    <li className="flex justify-between">
                      <span>5 tréninků:</span>
                      <span className="text-red-600 font-bold">1800 Kč</span>
                    </li>
                    <li className="flex justify-between">
                      <span>10 tréninků:</span>
                      <span className="text-red-600 font-bold">3500 Kč</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16 uppercase">
            Doplňky stravy
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 border-2 border-red-600 transition-all duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <Pill className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900 uppercase">Kvalitní doplňky stravy</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                V našem fitness studiu prodáváme pouze doplňky stravy nejvyšší kvality od renomovaných výrobců. Máme v nabídce širokou řadu produktů pro všechny vaše fitness a zdravotní potřeby.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 border border-red-600/50">
                  <h4 className="text-xl font-bold text-red-600 mb-4">Produkty v nabídce:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span>Proteiny a whey shake</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>Kreatiny a aminokyseliny</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>Vitaminy a minerály</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>Energetické nápoje a pre-workout</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 border border-red-600/50">
                  <h4 className="text-xl font-bold text-red-600 mb-4">Proč si koupit u nás:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span>Ověřené a certifikované produkty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>Profesionální poradenství od trenérů</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>Konkurenceschopné ceny</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>Výběr dle vašich cílů a potřeb</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 text-lg mt-8 text-center font-semibold">
                Navštivte nás a konzultujte si výběr doplňků se zkušeným personálem!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16 uppercase">
            Fotky fitness vybavení a prostorů
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {[...Array(10)].map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className="aspect-square bg-gray-100 border-2 border-red-600 flex items-center justify-center hover:border-red-700 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className="text-gray-500 text-sm">Fotka {i + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <div className="relative max-w-5xl w-full">
            <div className="aspect-square bg-gray-100 border-4 border-red-600 flex items-center justify-center">
              <span className="text-gray-400 text-2xl">Fotka {selectedImage + 1}</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-red-600">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Lu-Ka Fitness Club. Nový Jičín.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
