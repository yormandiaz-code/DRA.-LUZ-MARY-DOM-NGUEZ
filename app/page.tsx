"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Calendar, ArrowRight, Star, MapPin, Instagram, 
  Phone, ShieldCheck, Heart, Clock, Facebook, Youtube, MessageCircle 
} from 'lucide-react';

export default function DraLuzLanding() {
  // NÚMERO ACTUALIZADO PARA WEBZIO
  const WHATSAPP_NUMBER = "573046335166"; 
  const DIRECCION_EXACTA = "Edificio fábrica de sonrisas, Cl. 48 #26-94, Suroccidente, Barranquilla, Atlántico";
  
  const socialLinks = {
    instagram: "https://www.instagram.com/draluzmarydominguez_/",
    facebook: "https://www.facebook.com/draluzmarydominguez/",
    threads: "https://www.threads.net/@draluzmarydominguez_",
    youtube: "https://www.youtube.com/channel/UCt4IQFf2bNqhITjPts9kQ1w"
  };

  const backgroundImages = [
    "/foto para fondo.jpg",
    "/foto para fondo2.jpg",
    "/foto para fondo3.jpg",
    "/foto para fondo4.jpg",
    "/foto para fondo5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleBooking = (servicio = "") => {
    const msg = encodeURIComponent(`Hola Dra. Luz, vi su plataforma digital de Fábrica de Sonrisas y me interesa el servicio de: ${servicio}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const services = [
    { title: "Valoración Especializada", price: "$50.000", desc: "Diagnóstico completo con tecnología de punta.", icon: <ShieldCheck size={24} /> },
    { title: "Limpieza Profunda", price: "$120.000", desc: "Eliminación de cálculos y pulido dental profesional.", icon: <Sparkles size={24} /> },
    { title: "Limpieza + Airflow", price: "$200.000", desc: "Tecnología suiza para eliminar manchas sin dolor.", icon: <Star size={24} /> },
    { title: "Blanqueamiento Clínico", price: "$350.000", desc: "Aclara tu sonrisa varios tonos en una sesión LED.", icon: <Heart size={24} /> },
    { title: "Blanqueamiento Casero", price: "$250.000", desc: "Kit personalizado para resultados desde casa.", icon: <Clock size={24} /> },
    { title: "Diseño de Sonrisa", price: "Cotización Previa", desc: "Carillas de alta estética en resina o cerámica.", icon: <Sparkles size={24} /> },
    { title: "Ortodoncia Avanzada", price: "Bajo Valoración", desc: "Alineación dental con tecnología invisible.", icon: <ShieldCheck size={24} /> },
    { title: "Urgencias Odontológicas", price: "Consultar", desc: "Atención prioritaria para dolor o fracturas.", icon: <Phone size={24} /> }
  ];

  const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="bg-[#fcfcfc] text-[#1a1a1a] min-h-screen overflow-x-hidden font-sans">
      
      {/* BOTÓN WHATSAPP FLOTANTE */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => handleBooking("Contacto Directo")}
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></div>
        <MessageCircle size={28} fill="currentColor" />
      </motion.button>

      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }}
        className="fixed w-full z-50 flex justify-between items-center px-6 md:px-12 py-5 backdrop-blur-xl bg-white/70 border-b border-gray-100"
      >
        <div className="text-xl font-bold tracking-tighter text-[#b2945e]">DRA. LUZ MARY DOMÍNGUEZ</div>
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#servicios" className="hover:text-[#b2945e] transition self-center">Servicios</a>
            <a href="#resultados" className="hover:text-[#b2945e] transition self-center">Resultados</a>
          </div>
          <button onClick={() => handleBooking("Cita General")} className="bg-[#b2945e] text-white px-8 py-2.5 rounded-full hover:bg-black transition-all shadow-lg text-[11px] font-bold uppercase tracking-wider">Citar ahora</button>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={backgroundImages[currentImageIndex]} 
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" /> 
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} className="inline-block mb-6 px-4 py-1 border border-[#b2945e]/50 rounded-full bg-white/10">
            <span className="text-white font-bold tracking-[0.3em] uppercase text-[9px] flex items-center gap-2">
              <Star size={10} fill="#b2945e"/> DRA. LUZ MARY DOMÍNGUEZ - BARRANQUILLA
            </span>
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-light mb-8 tracking-tighter leading-none text-white">
            Tu sonrisa, <br /> <span className="italic font-serif text-[#b2945e]">nuestro arte.</span>
          </h1>
          <div className="flex flex-col gap-8 items-center">
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => handleBooking("Valoración")} className="bg-[#b2945e] text-white px-12 py-5 rounded-full font-bold shadow-2xl flex items-center gap-3 text-sm">
              AGENDAR CONSULTA <Calendar size={18} />
            </motion.button>
            <div className="flex gap-6 text-white/80">
                <a href={socialLinks.instagram} target="_blank" className="hover:text-[#b2945e] transition-all transform hover:scale-110"><Instagram size={24}/></a>
                <a href={socialLinks.facebook} target="_blank" className="hover:text-[#b2945e] transition-all transform hover:scale-110"><Facebook size={24}/></a>
                <a href={socialLinks.youtube} target="_blank" className="hover:text-[#b2945e] transition-all transform hover:scale-110"><Youtube size={24}/></a>
                <a href={socialLinks.threads} target="_blank" className="hover:text-[#b2945e] transition-all transform hover:scale-110 font-bold italic text-sm">Threads</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <motion.section 
        id="servicios" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-32 px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Servicios Exclusivos</h2>
            <p className="text-gray-400 text-xs tracking-[0.5em] uppercase font-bold">Excelencia en Odontología Estética</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 flex flex-col justify-between group transition-all">
              <div>
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-[#b2945e] group-hover:bg-[#b2945e] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight group-hover:text-[#b2945e] transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-8">{item.desc}</p>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                <span className="text-xl font-light text-[#b2945e]">{item.price}</span>
                <button onClick={() => handleBooking(item.title)} className="p-2 bg-gray-50 rounded-full group-hover:bg-[#b2945e] group-hover:text-white transition-all">
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECCIÓN RESULTADOS */}
      <section id="resultados" className="py-32 overflow-hidden relative min-h-[700px] flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={backgroundImages[currentImageIndex]} 
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" /> 
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-24 z-10"
        >
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4 text-[#b2945e]">Galería de Casos</h2>
            <p className="text-gray-400 text-[10px] tracking-[0.5em] uppercase font-bold">Movimiento Orbital 360°</p>
        </motion.div>

        <div className="relative z-10 w-full h-[400px] flex items-center justify-center" style={{ perspective: '1200px' }}>
          <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {galleryImages.map((id, index) => {
              const rotation = index * (360 / galleryImages.length);
              return (
                <motion.div key={id} className="absolute w-[200px] md:w-[280px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                  style={{ backfaceVisibility: 'hidden', transform: `rotateY(${rotation}deg) translateZ(400px)` }}
                >
                  <img src={`/resultado${id}.jpg`} alt={`Resultado ${id}`} className="w-full h-full object-cover" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-24 bg-white border-t border-gray-100 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
            <div>
                <h4 className="font-bold text-[#b2945e] mb-6 uppercase text-[10px] tracking-widest">Sede Principal</h4>
                <p className="flex gap-3 text-gray-500 text-sm leading-relaxed">
                    <MapPin size={32} className="text-[#b2945e] shrink-0"/> 
                    {DIRECCION_EXACTA}
                </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
                <h4 className="font-bold text-[#b2945e] mb-6 uppercase text-[10px] tracking-widest">Nuestras Redes</h4>
                <div className="flex gap-5">
                    <a href={socialLinks.instagram} target="_blank" className="p-3 bg-gray-50 rounded-full text-[#b2945e] hover:bg-[#b2945e] hover:text-white transition-all shadow-sm"><Instagram size={20}/></a>
                    <a href={socialLinks.facebook} target="_blank" className="p-3 bg-gray-50 rounded-full text-[#b2945e] hover:bg-[#b2945e] hover:text-white transition-all shadow-sm"><Facebook size={20}/></a>
                    <a href={socialLinks.youtube} target="_blank" className="p-3 bg-gray-50 rounded-full text-[#b2945e] hover:bg-[#b2945e] hover:text-white transition-all shadow-sm"><Youtube size={20}/></a>
                    <a href={socialLinks.threads} target="_blank" className="p-3 bg-gray-50 rounded-full text-[#b2945e] hover:bg-[#b2945e] hover:text-white transition-all shadow-sm flex items-center justify-center font-serif font-bold">@</a>
                </div>
                <p className="mt-6 flex items-center gap-2 text-gray-700 text-sm font-bold">
                    <Phone size={16} className="text-[#b2945e]"/> +57 304 633 5166
                </p>
            </div>

            <div className="flex flex-col items-center md:items-end justify-center">
                <div className="text-sm font-black tracking-tighter mb-2 italic text-gray-800">WEBZIO<span className="text-[#b2945e] not-italic">.lat</span></div>
                <p className="text-gray-400 text-[9px] uppercase tracking-widest text-right">CREADOPOR: Yorman Diaz</p>
            </div>
        </div>
      </motion.footer>
    </div>
  );
}