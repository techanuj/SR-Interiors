import React from 'react';
import { PageSection } from '../types';
import { FadeUp, SectionHeader, GoldButton, OutlineButton } from './UIComponents';
import { Play, CheckCircle2, ArrowRight } from 'lucide-react';

export const SectionRenderer: React.FC<{ section: PageSection }> = ({ section }) => {
  
  // -- Hero --
  if (section.type === 'HERO') {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
          style={{ backgroundImage: `url(${section.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 via-transparent to-black" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {section.subtitle && (
            <FadeUp>
              <h3 className="text-gold-400 tracking-[0.3em] uppercase mb-4 text-sm md:text-base font-bold">
                {section.subtitle}
              </h3>
            </FadeUp>
          )}
          <FadeUp delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
              {section.title}
            </h1>
          </FadeUp>
          {section.description && (
            <FadeUp delay={400}>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans font-light">
                {section.description}
              </p>
            </FadeUp>
          )}
          <FadeUp delay={600}>
             <div className="flex flex-col md:flex-row gap-4 justify-center">
               <GoldButton>Explore Projects</GoldButton>
               <OutlineButton>Contact Us</OutlineButton>
             </div>
          </FadeUp>
        </div>
      </section>
    );
  }

  // -- Marquee --
  if (section.type === 'MARQUEE') {
    return (
      <div className="bg-gold-500 py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="animate-marquee inline-block">
          {section.content.map((text: string, i: number) => (
             <span key={i} className="text-black font-bold uppercase tracking-widest mx-8 text-sm md:text-lg">
               • {text}
             </span>
          ))}
          {section.content.map((text: string, i: number) => (
             <span key={`dup-${i}`} className="text-black font-bold uppercase tracking-widest mx-8 text-sm md:text-lg">
               • {text}
             </span>
          ))}
        </div>
      </div>
    );
  }

  // -- Text Image Split --
  if (section.type === 'TEXT_IMAGE') {
    return (
      <section className="py-24 bg-obsidian relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative h-[500px] w-full group overflow-hidden border border-white/10 rounded-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${section.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          </FadeUp>
          <div>
            <SectionHeader title={section.title} subtitle={section.subtitle} />
            <FadeUp delay={200}>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                {section.description}
              </p>
              <button className="flex items-center text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-widest text-sm font-bold group">
                Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </FadeUp>
          </div>
        </div>
      </section>
    );
  }

  // -- Grid Cards (Services/Why Us) --
  if (section.type === 'GRID_CARDS') {
    return (
      <section className="py-24 bg-obsidian-light relative">
        <div className="container mx-auto px-6">
          <SectionHeader title={section.title} subtitle={section.subtitle} center />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {section.content.map((item: any, i: number) => (
              <FadeUp key={i} delay={i * 100}>
                <div className={`p-8 h-full border border-white/5 bg-white/5 hover:bg-gold-500/10 transition-colors duration-300 group ${section.theme === 'glass' ? 'glass-card' : ''}`}>
                  <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon && React.cloneElement(item.icon, { size: 40 })}
                  </div>
                  <h4 className="text-xl font-serif text-white mb-4">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // -- Stats --
  if (section.type === 'STATS') {
    return (
      <section className="py-20 bg-gold-900 border-y border-white/10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {section.content.map((stat: any, i: number) => (
            <FadeUp key={i} delay={i * 100}>
              <h3 className="text-4xl md:text-6xl font-serif text-gold-400 mb-2">{stat.value}</h3>
              <p className="text-white/60 uppercase tracking-widest text-xs md:text-sm">{stat.label}</p>
            </FadeUp>
          ))}
        </div>
      </section>
    );
  }

  // -- Gallery --
  if (section.type === 'GALLERY') {
    return (
      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6">
          <SectionHeader title={section.title} center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {section.content.map((imgSrc: string, i: number) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="aspect-square relative overflow-hidden group cursor-pointer">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-gold-900/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-serif italic text-2xl">View</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // -- Video --
  if (section.type === 'VIDEO') {
    return (
      <section className="py-24 bg-obsidian-light relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
          style={{ backgroundImage: `url(${section.backgroundImage})` }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full mx-auto mb-8 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform border border-white/20 animate-pulse-gold">
              <Play className="text-white fill-current ml-1" size={32} />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">{section.title}</h2>
            <p className="text-xl text-gray-300 font-light">{section.description}</p>
          </FadeUp>
        </div>
      </section>
    );
  }

  // -- Timeline --
  if (section.type === 'TIMELINE') {
    return (
      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6">
          <SectionHeader title={section.title} center />
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold-500 before:to-transparent">
            {section.content.map((item: any, i: number) => (
              <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gold-500 bg-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10">
                  <span className="text-gold-500 text-xs font-bold">{item.step}</span>
                </div>
                <FadeUp delay={i * 100} className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 border border-white/5 rounded-sm hover:border-gold-500/50 transition-colors">
                  <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // -- Testimonials --
  if (section.type === 'TESTIMONIALS') {
    return (
      <section className="py-24 bg-obsidian-light">
        <div className="container mx-auto px-6">
          <SectionHeader title={section.title} center />
          <div className="grid md:grid-cols-2 gap-8">
            {section.content.map((t: any, i: number) => (
               <FadeUp key={i} delay={i * 150} className="bg-black p-8 border-l-2 border-gold-500 relative">
                 <div className="text-gold-500 text-6xl font-serif absolute top-4 right-4 opacity-20">"</div>
                 <p className="text-gray-300 italic mb-6 text-lg relative z-10">{t.text}</p>
                 <div>
                   <h5 className="text-white font-bold font-serif">{t.name}</h5>
                   <p className="text-gold-500 text-sm uppercase tracking-widest">{t.role}</p>
                 </div>
               </FadeUp>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // -- Pricing --
  if (section.type === 'PRICING') {
    return (
      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6">
           <SectionHeader title="Design Packages" center />
           <div className="grid md:grid-cols-3 gap-8">
             {section.content.map((pkg: any, i: number) => (
               <FadeUp key={i} delay={i*100} className={`p-8 border ${i === 1 ? 'border-gold-500 bg-gold-900/10' : 'border-white/10 bg-white/5'} flex flex-col items-center text-center hover:scale-105 transition-transform duration-300`}>
                 <h4 className="text-xl font-serif text-white mb-4">{pkg.name}</h4>
                 <div className="text-3xl text-gold-400 font-bold mb-8">{pkg.price}</div>
                 <ul className="space-y-4 mb-8 w-full">
                   {pkg.features.map((f: string, j: number) => (
                     <li key={j} className="text-gray-400 text-sm flex items-center justify-center">
                       <CheckCircle2 size={16} className="text-gold-500 mr-2" /> {f}
                     </li>
                   ))}
                 </ul>
                 <OutlineButton>Choose Plan</OutlineButton>
               </FadeUp>
             ))}
           </div>
        </div>
      </section>
    );
  }
  
  // -- Team --
  if (section.type === 'TEAM') {
    return (
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
           <SectionHeader title={section.title} center />
           <div className="flex flex-wrap justify-center gap-12">
             {section.content.map((member: any, i: number) => (
               <FadeUp key={i} delay={i*100} className="text-center group">
                 <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-2 border-gold-500/30 group-hover:border-gold-500 transition-colors">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <h4 className="text-xl text-white font-serif">{member.name}</h4>
                 <p className="text-gold-500 text-xs uppercase tracking-widest mt-1">{member.role}</p>
               </FadeUp>
             ))}
           </div>
        </div>
      </section>
    );
  }
  
  // -- List Overview --
  if (section.type === 'LIST_OVERVIEW') {
     return (
       <section className="py-24 bg-obsidian-light">
          <div className="container mx-auto px-6">
            <SectionHeader title={section.title} center />
            <div className="flex flex-wrap justify-center gap-4">
              {section.content.map((item: string, i: number) => (
                <FadeUp key={i} delay={i * 50}>
                   <span className="px-6 py-3 border border-white/10 rounded-full text-gray-300 hover:border-gold-500 hover:text-gold-400 transition-colors cursor-default block">
                     {item}
                   </span>
                </FadeUp>
              ))}
            </div>
          </div>
       </section>
     )
  }

  // -- FAQ --
  if (section.type === 'FAQ') {
    return (
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader title={section.title} subtitle={section.subtitle} center />
          <div className="space-y-4">
            {section.content.map((item: any, i: number) => (
              <FadeUp key={i} delay={i * 50}>
                <details className="group bg-white/5 border border-white/5 open:border-gold-500/50 open:bg-white/10 transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-white">
                    {item.q}
                    <span className="ml-4 flex-shrink-0 text-gold-500 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // -- CTA --
  if (section.type === 'CTA') {
    return (
      <section className="py-32 bg-gold-600 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-black/80" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
         <div className="container mx-auto px-6 relative z-10">
           <FadeUp>
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">{section.title}</h2>
             <p className="text-xl text-gold-100 mb-10 max-w-2xl mx-auto">{section.description}</p>
             <GoldButton className="bg-white text-black hover:bg-gold-200">Start Your Journey</GoldButton>
           </FadeUp>
         </div>
      </section>
    );
  }
  
  // -- Contact Form --
  if (section.type === 'CONTACT_FORM') {
    return (
      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeader title={section.title} center />
          <FadeUp className="bg-white/5 p-8 border border-white/10 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="bg-black/50 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors w-full" />
                <input type="email" placeholder="Email" className="bg-black/50 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors w-full" />
              </div>
              <input type="text" placeholder="Subject" className="bg-black/50 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors w-full" />
              <textarea rows={5} placeholder="Message" className="bg-black/50 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors w-full"></textarea>
              <GoldButton className="w-full">Send Inquiry</GoldButton>
            </form>
          </FadeUp>
        </div>
      </section>
    )
  }

  return null;
};
