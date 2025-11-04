import { Activity, Users, Calendar } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your fitness goals and abilities.'
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Join our energetic group sessions and train with a community.'
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book sessions that fit your busy lifestyle with our easy scheduling system.'
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
