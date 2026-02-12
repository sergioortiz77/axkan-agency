import Link from 'next/link';
import { ArrowRight, Shield, Zap, Eye, Sparkles, Users, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-purple-600/15 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-[20%] w-[20%] h-[20%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <header className="relative z-20 border-b border-white/[0.04]">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 animate-pulse opacity-40 blur-sm" />
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Axkan
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <Link href="/acerca" className="hover:text-white transition-colors">Acerca de</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
          </div>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-sm font-semibold text-white hover:from-cyan-400 hover:to-cyan-500 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            Iniciar
            <ArrowRight size={14} />
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 lg:pt-36 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-8">
            <Sparkles size={12} />
            Consultoría de Estrategia Digital con IA
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Tu Arquitecto de
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Estrategia Digital
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Axkan diagnostica tus necesidades y prescribe las herramientas y estrategias
            perfectas para tu negocio. Sin humo, sin alucinaciones — solo recomendaciones
            verificadas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-base font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_4px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_40px_rgba(6,182,212,0.5)] hover:scale-[1.02]"
            >
              Comenzar Diagnóstico
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/acerca"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-base text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200"
            >
              Conocer más
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-4">
            ¿Por qué Axkan?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            No somos otro chatbot. Somos un sistema de consultoría basado en datos verificados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: 'Base Certificada',
              description: 'Cada herramienta ha sido verificada manualmente. Incluimos datos de seguridad, cumplimiento GDPR/LFPDPPP y costos reales.',
              gradient: 'from-cyan-500/20 to-blue-500/20',
              iconColor: 'text-cyan-400',
            },
            {
              icon: Zap,
              title: 'Estrategias Probadas',
              description: 'Flujos de trabajo documentados paso a paso, con fuentes verificadas y las herramientas exactas que necesitas.',
              gradient: 'from-amber-500/20 to-orange-500/20',
              iconColor: 'text-amber-400',
            },
            {
              icon: Eye,
              title: 'Transparencia Total',
              description: 'Nuestras recomendaciones se basan en criterios objetivos. Divulgamos abiertamente nuestro modelo de afiliación.',
              gradient: 'from-purple-500/20 to-pink-500/20',
              iconColor: 'text-purple-400',
            },
            {
              icon: BookOpen,
              title: 'Cumplimiento Legal',
              description: 'Filtros automáticos de GDPR y LFPDPPP. Si manejas datos sensibles, Axkan prioriza herramientas seguras.',
              gradient: 'from-emerald-500/20 to-teal-500/20',
              iconColor: 'text-emerald-400',
            },
            {
              icon: Sparkles,
              title: 'Prescribir, No Ejecutar',
              description: 'Axkan te recomienda la herramienta correcta y te guía. Tú mantienes el control total de la implementación.',
              gradient: 'from-blue-500/20 to-indigo-500/20',
              iconColor: 'text-blue-400',
            },
            {
              icon: Users,
              title: 'Comunidad MxWithMe',
              description: 'Publica tu proyecto en la comunidad y conecta con otros emprendedores y desarrolladores que construyen con tecnología.',
              gradient: 'from-rose-500/20 to-red-500/20',
              iconColor: 'text-rose-400',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                <feature.icon size={20} className={feature.iconColor} />
              </div>
              <h3 className="text-base font-semibold text-white/90 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="relative rounded-3xl border border-white/[0.06] bg-gradient-to-br from-cyan-500/[0.05] to-purple-500/[0.05] p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-4">
            ¿Listo para encontrar tu herramienta ideal?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Describe tu desafío y recibe una prescripción personalizada en segundos.
            Sin registro requerido para tu primer diagnóstico.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-base font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_4px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_40px_rgba(6,182,212,0.5)]"
          >
            Iniciar Diagnóstico Gratuito
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] mt-10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Axkan</span>
              </div>
              <p className="text-xs text-gray-600 max-w-xs leading-relaxed">
                Consultoría de Estrategia Digital con Inteligencia Artificial.
                Parte del ecosistema MxWithMe.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Plataforma</h4>
                <nav className="flex flex-col gap-2 text-sm text-gray-500">
                  <Link href="/dashboard" className="hover:text-gray-300 transition-colors">Dashboard</Link>
                  <Link href="/acerca" className="hover:text-gray-300 transition-colors">Acerca de</Link>
                </nav>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Legal</h4>
                <nav className="flex flex-col gap-2 text-sm text-gray-500">
                  <Link href="/privacidad" className="hover:text-gray-300 transition-colors">Política de Privacidad</Link>
                  <Link href="/terminos" className="hover:text-gray-300 transition-colors">Términos y Condiciones</Link>
                </nav>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Comunidad</h4>
                <nav className="flex flex-col gap-2 text-sm text-gray-500">
                  <a href="https://mxwithme.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">MxWithMe</a>
                  <a href="mailto:hola@mxwithme.com" className="hover:text-gray-300 transition-colors">Contacto</a>
                </nav>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-700">
              © {new Date().getFullYear()} Axkan. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-700">
              Hecho en México 🇲🇽
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
