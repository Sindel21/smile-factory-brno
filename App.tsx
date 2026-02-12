import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Coffee,
  Tv,
  Users,
  Baby
} from 'lucide-react';
import { SERVICES, PRICES, TEAM, INSURANCES } from './constants';
import { ServiceItem } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#793f66] shadow-xl py-2' : 'bg-[#793f66]/90 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Zpět nahoru"
            >
              <div className="flex flex-col items-center">
                <img
                  src="https://raw.githubusercontent.com/Smile-Factory-Brno/web/main/logo-white.png"
                  alt="SMILE FACTORY Logo"
                  className="h-12 w-auto brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="flex flex-col items-center text-white">
                        <div class="flex gap-0.5 mb-0.5">
                          <span class="text-lg">☺☺☺☺</span>
                        </div>
                        <span class="text-xl font-bold tracking-tight leading-none">SMILE FACTORY</span>
                        <div class="w-full h-[1px] bg-white my-0.5"></div>
                        <span class="text-[8px] uppercase tracking-[0.3em] font-medium">Zubní klinika</span>
                      </div>
                    `;
                  }}
                />
              </div>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-white/90 hover:text-white transition-colors font-semibold">O nás</button>
              <button onClick={() => scrollToSection('team')} className="text-white/90 hover:text-white transition-colors font-semibold">Tým</button>
              <button onClick={() => scrollToSection('services')} className="text-white/90 hover:text-white transition-colors font-semibold">Služby</button>
              <button onClick={() => scrollToSection('prices')} className="text-white/90 hover:text-white transition-colors font-semibold">Ceník</button>
              <button onClick={() => scrollToSection('contact')} className="text-white/90 hover:text-white transition-colors font-semibold">Kontakt</button>
              <a href="tel:+420607027707" className="flex items-center gap-2 text-white font-bold border-l border-white/20 pl-8 ml-2">
                <Phone className="w-5 h-5 text-white/80" />
                607 027 707
              </a>
              <button onClick={() => scrollToSection('booking')} className="bg-white text-[#793f66] px-6 py-2.5 rounded-full font-bold hover:bg-slate-100 transition-all shadow-lg active:scale-95">
                Objednat se
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
                aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#793f66] border-t border-white/10 absolute top-full left-0 w-full shadow-2xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-4 text-base font-semibold text-white hover:bg-white/10">O nás</button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left px-3 py-4 text-base font-semibold text-white hover:bg-white/10">Tým</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-4 text-base font-semibold text-white hover:bg-white/10">Služby</button>
              <button onClick={() => scrollToSection('prices')} className="block w-full text-left px-3 py-4 text-base font-semibold text-white hover:bg-white/10">Ceník</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-4 text-base font-semibold text-white hover:bg-white/10">Kontakt</button>
              <div className="pt-4 flex flex-col gap-4">
                <a href="tel:+420607027707" className="flex items-center justify-center gap-2 text-white font-bold py-4 bg-white/10 rounded-xl">
                  <Phone className="w-5 h-5" />
                  607 027 707
                </a>
                <button onClick={() => scrollToSection('booking')} className="w-full bg-white text-[#793f66] py-4 rounded-xl font-bold text-lg">
                  Objednat online
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-[#fdf8fb] rounded-l-[100px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#f2e8ef] shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Přijímáme nové pacienty</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Zubní klinika, které <span className="text-[#793f66]">můžete důvěřovat</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Rodinná klinika SMILE FACTORY v centru Brna poskytuje komplexní moderní péči v příjemném prostředí s důrazem na vaše maximální pohodlí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('booking')} className="bg-[#793f66] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#613252] transition-all shadow-xl shadow-[#793f66]/30 flex items-center justify-center gap-2">
                  Rezervovat termín <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={() => scrollToSection('services')} className="bg-white text-slate-700 px-8 py-4 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center">
                  Naše služby
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-slate-700">Pojišťovny</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-slate-700">Centrum Brna</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-slate-700">Moderní technologie</span>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:w-1/2 relative">
              <div className="aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden rounded-[40px] shadow-2xl relative">
                <img
                  src="/hero.jpg"
                  alt="SMILE FACTORY Dental Clinic"
                  className="w-full h-full object-cover"
                  fetchpriority="high"
                  width="800"
                  height="1000"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                      <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100" alt="Doctor Profile" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">MDDr. Jana Beranovská</p>
                      <p className="text-xs text-slate-500 font-medium">Vedoucí lékařka SMILE FACTORY</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fdf8fb] rounded-full -z-10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#f2e8ef] rounded-full -z-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[32px] shadow-lg border border-slate-100 flex items-start gap-6 hover:translate-y-[-4px] transition-transform">
              <div className="w-14 h-14 bg-[#fdf8fb] rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-[#793f66]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Kde nás najdete</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Jakubská 156/2, Palác Chlumeckých<br />
                  602 00 Brno, Česká republika
                </p>
                <a href="https://maps.app.goo.gl/csivj7KUDtDXVDiL8" target="_blank" className="text-[#793f66] font-bold text-sm inline-flex items-center gap-1 group">
                  Otevřít v mapách <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-lg border border-slate-100 flex items-start gap-6 hover:translate-y-[-4px] transition-transform">
              <div className="w-14 h-14 bg-[#fdf8fb] rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-[#793f66]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ordinační hodiny</h3>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Po–Čt</span>
                    <span className="font-bold text-slate-900">07:00 – 21:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Pátek</span>
                    <span className="font-bold text-slate-900">07:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">So–Ne</span>
                    <span className="font-bold text-slate-900 italic">dle domluvy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-lg border border-slate-100 flex items-start gap-6 hover:translate-y-[-4px] transition-transform">
              <div className="w-14 h-14 bg-[#fdf8fb] rounded-2xl flex items-center justify-center shrink-0">
                <Users className="w-7 h-7 text-[#793f66]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Spolupráce</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Spolupracujeme s vybranými pojišťovnami (VZP, ZPMV, VOZP, ČPP, OZP).
                </p>
                <button onClick={() => scrollToSection('insurances')} className="text-[#793f66] font-bold text-sm inline-flex items-center gap-1 group">
                  Seznam pojišťoven <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#793f66] font-bold uppercase tracking-widest text-sm">Naše výkony</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
                Komplexní péče o váš úsměv pod jednou střechou
              </h2>
            </div>
            <button onClick={() => scrollToSection('booking')} className="bg-[#793f66] text-white px-10 py-4 rounded-full font-bold hover:bg-[#613252] transition-all shrink-0">
              Chci se objednat
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-[#f2e8ef] hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#fdf8fb] group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[#793f66] font-bold border-b-2 border-transparent group-hover:border-[#f2e8ef] transition-all cursor-pointer">
                  Zjistit více <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Comfort Section */}
      <section id="about" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-20">
            <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=400&h=300" alt="Dental Office Interior" className="rounded-[40px] shadow-lg w-full object-cover aspect-[4/3]" />
                  <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400&h=500" alt="Dental Care" className="rounded-[40px] shadow-lg w-full object-cover aspect-[4/5]" />
                </div>
                <div className="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400&h=500" alt="Medical Technology" className="rounded-[40px] shadow-lg w-full object-cover aspect-[4/5]" />
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=300" alt="Consultation Room" className="rounded-[40px] shadow-lg w-full object-cover aspect-[4/3]" />
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f2e8ef]/50 rounded-full blur-3xl"></div>
            </div>

            <div className="lg:w-1/2 space-y-10">
              <div>
                <span className="text-[#793f66] font-bold uppercase tracking-widest text-sm">Proč zvolit nás</span>
                <h2 className="text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
                  Klademe důraz na vaše pohodlí a bezstresový průběh
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Tv className="w-7 h-7 text-[#793f66]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Zábava během zákroku</h4>
                    <p className="text-slate-600">Nad každým křeslem máme televizi. Můžete sledovat svůj oblíbený film nebo pohádku pro děti.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Coffee className="w-7 h-7 text-[#793f66]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Relaxační zóna</h4>
                    <p className="text-slate-600">Vychutnejte si skvělou kávu v naší klidné zóně se zahradou přímo v historickém centru Brna.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Baby className="w-7 h-7 text-[#793f66]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Vstřícnost k dětem</h4>
                    <p className="text-slate-600">Máme trpělivý přístup k nejmenším pacientům. Vysvětlíme každý krok a postaráme se o klidný zážitek.</p>
                  </div>
                </div>
              </div>

              <button onClick={() => scrollToSection('team')} className="bg-white text-[#793f66] border-2 border-[#793f66] px-10 py-4 rounded-full font-bold hover:bg-[#fdf8fb] transition-all">
                Dozvědět se o našem týmu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-[#f9f8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#793f66] font-bold uppercase tracking-widest text-sm">Odborníci</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-4">Náš tým</h2>
            <div className="w-24 h-1 bg-[#793f66] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {TEAM.map((member, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center p-6 rounded-3xl hover:bg-white transition-all group shadow-sm hover:shadow-md">
                <div className="w-40 h-40 shrink-0 relative">
                  <div className="absolute inset-0 bg-[#793f66]/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full shadow-lg relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">{member.name}</h3>
                  <p className="text-[#793f66] font-extrabold uppercase text-sm tracking-widest">{member.role}</p>
                  <p className="text-slate-500 leading-relaxed text-sm italic">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section id="prices" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#793f66] font-bold uppercase tracking-widest text-sm">Transparentnost</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
              Ceník nejčastějších výkonů
            </h2>
            <p className="text-slate-500 mt-4 max-w-lg mx-auto">
              Uvedené ceny jsou orientační. Konečná cena závisí na individuálním léčebném plánu a použitých materiálech.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-[40px] shadow-2xl overflow-hidden">
            <div className="divide-y divide-slate-100">
              {PRICES.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-6 sm:p-8 hover:bg-slate-50 transition-colors">
                  <div className="font-bold text-slate-800 text-lg">{item.name}</div>
                  <div className="text-[#793f66] font-extrabold text-xl">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 p-8 text-center border-t border-slate-100">
              <p className="text-slate-500 text-sm mb-4">Máte dotaz k ceně jiného zákroku? Rádi vám sdělíme podrobnosti při konzultaci.</p>
              <button onClick={() => scrollToSection('contact')} className="text-[#793f66] font-bold hover:underline">Zobrazit úplný ceník v PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* Insurances Section */}
      <section id="insurances" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900">Smluvní zdravotní pojišťovny</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {INSURANCES.map((ins) => (
              <div key={ins.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-center h-24 hover:shadow-md transition-shadow">
                <span className="font-bold text-slate-600 text-sm leading-tight">{ins.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-16">
            <div className="lg:w-1/2 mb-16 lg:mb-0 space-y-12">
              <div>
                <span className="text-[#793f66] font-bold uppercase tracking-widest text-sm">Kontaktujte nás</span>
                <h2 className="text-4xl font-extrabold text-slate-900 mt-4">Kde nás najdete?</h2>
                <p className="text-slate-600 mt-4">Náš tým je připraven vám pomoci. Zavolejte nám nebo napište email.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#fdf8fb] rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#793f66]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Telefon</p>
                    <a href="tel:+420607027707" className="text-xl font-bold text-slate-900 hover:text-[#793f66] transition-colors">+420 607 027 707</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#fdf8fb] rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#793f66]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">E-mail</p>
                    <a href="mailto:info@smilefactory.cz" className="text-xl font-bold text-slate-900 hover:text-[#793f66] transition-colors">info@smilefactory.cz</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#fdf8fb] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#793f66]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Adresa</p>
                    <p className="text-xl font-bold text-slate-900 leading-snug">Jakubská 156/2, Palác Chlumeckých<br />602 00 Brno</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-[40px] text-white space-y-4">
                <h4 className="text-xl font-bold">V centru Brna</h4>
                <p className="text-slate-400">Nacházíme se mezi ulicí Česká a Náměstím Svobody. Parkování je možné v přilehlých parkovacích domech.</p>
                <div className="pt-4 flex gap-4">
                  <a
                    href="https://maps.app.goo.gl/csivj7KUDtDXVDiL8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 block h-48 rounded-3xl overflow-hidden shadow-inner group relative"
                  >
                    <img
                      src="/map.png"
                      alt="Mapa SMILE FACTORY Brno"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      Otevřít Mapy Google
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div id="booking" className="lg:w-1/2">
              <div className="bg-slate-50 p-8 sm:p-12 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-8">Rezervujte si termín</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-2">Vaše jméno</label>
                      <input id="name" type="text" placeholder="Jan Novák" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-[#793f66] focus:ring-4 focus:ring-[#793f66]/10 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-2">Telefonní číslo</label>
                      <input id="phone" type="tel" placeholder="+420 123 456 789" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-[#793f66] focus:ring-4 focus:ring-[#793f66]/10 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-2">Emailová adresa</label>
                    <input id="email" type="email" placeholder="vas@email.cz" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-[#793f66] focus:ring-4 focus:ring-[#793f66]/10 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-slate-700 ml-2">O jakou službu máte zájem?</label>
                    <select id="service" className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white focus:border-[#793f66] focus:ring-4 focus:ring-[#793f66]/10 outline-none transition-all appearance-none cursor-pointer">
                      <option>Vstupní vyšetření</option>
                      <option>Dentální hygiena</option>
                      <option>Bělení zubů</option>
                      <option>Estetická konzultace</option>
                      <option>Jiné ošetření</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-2">Vaše zpráva (volitelné)</label>
                    <textarea id="message" rows={4} placeholder="Doplňující informace pro lékaře..." className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-[#793f66] focus:ring-4 focus:ring-[#793f66]/10 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full bg-[#793f66] text-white py-5 rounded-2xl font-extrabold text-xl shadow-xl shadow-[#793f66]/30 hover:bg-[#613252] hover:translate-y-[-2px] active:scale-95 transition-all">
                    Odeslat poptávku
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    Odesláním formuláře souhlasíte se zpracováním osobních údajů. Ozveme se vám do 24 hodin s návrhem termínu.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6 text-center md:text-left">
              <button
                className="flex flex-col items-center md:items-start cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Zpět nahoru"
              >
                <img
                  src="https://raw.githubusercontent.com/Smile-Factory-Brno/web/main/logo-white.png"
                  alt="SMILE FACTORY Logo"
                  className="h-16 w-auto mb-4 brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="flex flex-col items-center md:items-start text-white">
                        <div class="flex gap-0.5 mb-1">
                          <span class="text-2xl">☺☺☺☺</span>
                        </div>
                        <span class="text-3xl font-bold tracking-tight leading-none">SMILE FACTORY</span>
                        <div class="w-full h-[1px] bg-white my-1"></div>
                        <span class="text-xs uppercase tracking-[0.4em] font-medium">Zubní klinika</span>
                      </div>
                    `;
                  }}
                />
              </button>
              <p className="text-slate-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                Rodinná zubní klinika v Brně poskytující špičkovou moderní péči v srdci města.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#793f66] transition-colors">f</a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#793f66] transition-colors">ig</a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Menu</h4>
              <ul className="space-y-4 text-slate-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-[#793f66] transition-colors">O klinice</button></li>
                <li><button onClick={() => scrollToSection('team')} className="hover:text-[#793f66] transition-colors">Tým</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-[#793f66] transition-colors">Služby</button></li>
                <li><button onClick={() => scrollToSection('prices')} className="hover:text-[#793f66] transition-colors">Ceník</button></li>
                <li><button className="hover:text-[#793f66] transition-colors">Slovník pojmů</button></li>
                <li><button className="hover:text-[#793f66] transition-colors">Kariéra</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Kontakt</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#793f66] shrink-0 mt-1" />
                  <span>Jakubská 156/2, Brno</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#793f66] shrink-0" />
                  <a href="tel:+420607027707" className="hover:text-white">+420 607 027 707</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#793f66] shrink-0" />
                  <a href="mailto:info@smilefactory.cz" className="hover:text-white">info@smilefactory.cz</a>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl space-y-4">
              <h4 className="text-lg font-bold">Odebírejte novinky</h4>
              <p className="text-sm text-slate-400">Dostávejte tipy na péči o zuby a informace o nových službách.</p>
              <div className="relative">
                <input type="email" placeholder="Emailová adresa" aria-label="Váš email pro newsletter" className="w-full bg-slate-700 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#793f66] outline-none" />
                <button aria-label="Přihlásit k odběru" className="absolute right-2 top-2 bottom-2 bg-[#793f66] text-white text-xs px-4 rounded-lg font-bold">OK</button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} SMILE FACTORY Brno. Všechna práva vyhrazena.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Ochrana údajů</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;