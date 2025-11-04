import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-3 text-emerald-500" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-slate-300">info@lukafitness.com</p>
          </div>
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-3 text-emerald-500" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-slate-300">(555) 123-4567</p>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-emerald-500" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-slate-300">123 Fitness Ave</p>
          </div>
        </div>
      </div>
    </section>
  );
}
