/**
 * Landing Page Bellawave - Otimizada para Alta Conversão
 * Design Style: Warm Glow - Estética Acolhedora e Feminina
 * Estrutura: AIDA (Atenção → Interesse → Desejo → Ação)
 */

import { Button } from "@/components/ui/button";
import { 
  Check, 
  Truck, 
  Shield, 
  Award, 
  Clock, 
  Sparkles,
  ChevronDown,
  Star,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

// Links de checkout Kiwify
const CHECKOUT_LINKS = {
  kit30: "https://pay.kiwify.com.br/RRxdpnT",
  kit60: "https://pay.kiwify.com.br/ILPmFpT",
  kit90: "https://pay.kiwify.com.br/pLNJNDM",
};

// Preços (para o teste, usar R$150)
const PRICES = {
  kit30: { original: 249, current: 150, installment: 14.97 },
  kit60: { original: 395, current: 250, installment: 24.97 },
  kit90: { original: 597, current: 350, installment: 34.97 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.98_0.02_60)]">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trust Bar */}
      <TrustBar />
      
      {/* Pricing Section - SUBIU PARA CIMA! */}
      <PricingSection />
      
      {/* Social Proof - Results */}
      <ResultsSection />
      
      {/* How It Works */}
      <HowItWorksSection />
      
      {/* Benefits */}
      <BenefitsSection />
      
      {/* Second CTA */}
      <SecondCTASection />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Float Button */}
      <WhatsAppButton />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.98_0.02_60)] to-[oklch(0.95_0.04_55)]">
      <div className="container py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.65_0.18_25)] flex items-center justify-center text-white text-xs font-bold">M</div>
                <div className="w-8 h-8 rounded-full bg-[oklch(0.70_0.15_145)] flex items-center justify-center text-white text-xs font-bold">A</div>
                <div className="w-8 h-8 rounded-full bg-[oklch(0.55_0.08_55)] flex items-center justify-center text-white text-xs font-bold">C</div>
              </div>
              <span className="text-sm font-medium text-[oklch(0.45_0.08_55)]">
                <Star className="w-4 h-4 inline text-yellow-500 fill-yellow-500" /> +1.000 mulheres já experimentaram
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.35_0.08_55)] leading-tight mb-6">
              Pele Radiante em{" "}
              <span className="text-[oklch(0.65_0.18_25)]">até 30 dias</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[oklch(0.50_0.06_55)] mb-8 max-w-xl mx-auto lg:mx-0">
              Sérum facial com <strong>Ácido Hialurônico</strong> e <strong>Niacinamida</strong>. 
              Fórmula dermatológica de alta performance.
            </p>

            {/* Urgency Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="inline-flex items-center gap-2 bg-[oklch(0.70_0.15_145)]/10 text-[oklch(0.55_0.15_145)] px-4 py-2 rounded-full text-sm font-semibold">
                <Truck className="w-4 h-4" /> Frete Grátis
              </span>
              <span className="inline-flex items-center gap-2 bg-[oklch(0.65_0.18_25)]/10 text-[oklch(0.55_0.18_25)] px-4 py-2 rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4" /> Desconto de Lançamento
              </span>
            </div>

            <a 
              href="#precos" 
              className="btn-cta inline-flex items-center gap-2 text-lg"
            >
              Quero minha pele radiante
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-fade-in-up animation-delay-200">
            <div className="relative">
              <img 
                src="/images/mulher-hero.jpg" 
                alt="Mulher com pele radiante usando Bellawave"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
              
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50C360 100 1080 0 1440 50V100H0V50Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

function TrustBar() {
  const trustItems = [
    { icon: Truck, text: "Frete Grátis para todo Brasil" },
    { icon: Award, text: "Dermatologicamente Testado" },
    { icon: Award, text: "Fórmula Premium" },
    { icon: Check, text: "Pagamento 100% Seguro" },
  ];

  return (
    <section className="bg-white py-6 border-b border-[oklch(0.92_0.02_60)]">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-[oklch(0.45_0.08_55)]">
              <item.icon className="w-5 h-5 text-[oklch(0.70_0.15_145)]" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="precos" className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.35_0.08_55)] mb-4">
            Escolha seu Protocolo de Tratamento
          </h2>
          <p className="text-lg text-[oklch(0.50_0.06_55)] max-w-2xl mx-auto">
            Quanto mais tempo de tratamento, melhores os resultados. 
            Escolha o kit ideal para sua transformação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Kit 30 dias */}
          <PricingCard
            title="Protocolo 30 dias"
            subtitle="1 unidade do sérum facial"
            originalPrice={PRICES.kit30.original}
            currentPrice={PRICES.kit30.current}
            installment={PRICES.kit30.installment}
            checkoutLink={CHECKOUT_LINKS.kit30}
            gradient="from-[oklch(0.85_0.08_55)] to-[oklch(0.80_0.10_55)]"
            delay="0"
          />

          {/* Kit 60 dias - DESTAQUE */}
          <PricingCard
            title="Protocolo 60 dias"
            subtitle="2 unidades do sérum facial"
            originalPrice={PRICES.kit60.original}
            currentPrice={PRICES.kit60.current}
            installment={PRICES.kit60.installment}
            checkoutLink={CHECKOUT_LINKS.kit60}
            gradient="from-[oklch(0.70_0.15_35)] to-[oklch(0.65_0.18_25)]"
            featured={true}
            delay="200"
          />

          {/* Kit 90 dias */}
          <PricingCard
            title="Protocolo 90 dias"
            subtitle="3 unidades do sérum facial"
            originalPrice={PRICES.kit90.original}
            currentPrice={PRICES.kit90.current}
            installment={PRICES.kit90.installment}
            checkoutLink={CHECKOUT_LINKS.kit90}
            gradient="from-[oklch(0.65_0.18_25)] to-[oklch(0.55_0.20_25)]"
            delay="400"
          />
        </div>

        {/* Guarantee Badge */}
        <div className="text-center mt-10 animate-fade-in-up animation-delay-600">
          <div className="inline-flex items-center gap-3 bg-[oklch(0.70_0.15_145)]/10 px-6 py-3 rounded-full">
            <Truck className="w-6 h-6 text-[oklch(0.60_0.15_145)]" />
            <span className="text-[oklch(0.45_0.08_55)] font-medium">
              Entrega rápida para todo o Brasil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  originalPrice: number;
  currentPrice: number;
  installment: number;
  checkoutLink: string;
  gradient: string;
  featured?: boolean;
  delay: string;
}

function PricingCard({ 
  title, 
  subtitle, 
  originalPrice, 
  currentPrice, 
  installment, 
  checkoutLink, 
  gradient,
  featured = false,
  delay
}: PricingCardProps) {
  return (
    <div 
      className={`relative rounded-3xl overflow-hidden card-hover animate-fade-in-up ${
        featured ? 'ring-4 ring-[oklch(0.65_0.18_25)] scale-105 z-10' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 bg-[oklch(0.65_0.18_25)] text-white text-center py-2 text-sm font-bold">
          MAIS VENDIDO
        </div>
      )}
      
      <div className={`bg-gradient-to-br ${gradient} p-8 ${featured ? 'pt-14' : ''} text-white text-center`}>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-white/80 text-sm mb-6">{subtitle}</p>

        {/* Price */}
        <div className="mb-6">
          <p className="text-white/60 text-sm line-through">
            De R${originalPrice.toFixed(2).replace('.', ',')} por 12x
          </p>
          <p className="text-4xl font-bold">
            R${installment.toFixed(2).replace('.', ',')}
          </p>
          <p className="text-white/80 text-sm">por 12x</p>
          <p className="text-white/90 text-lg mt-2">
            ou <strong>R${currentPrice.toFixed(2).replace('.', ',')}</strong> à vista
          </p>
        </div>

        {/* CTA Button */}
        <a 
          href={checkoutLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
            featured 
              ? 'bg-white text-[oklch(0.65_0.18_25)] hover:bg-[oklch(0.95_0.02_60)] shadow-lg hover:shadow-xl' 
              : 'bg-[oklch(0.70_0.15_145)] text-white hover:bg-[oklch(0.60_0.18_145)] shadow-lg hover:shadow-xl'
          }`}
        >
          Comprar com Frete Grátis
        </a>
      </div>
    </div>
  );
}

function ResultsSection() {
  return (
    <section className="bg-[oklch(0.98_0.02_60)] py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.35_0.08_55)] mb-4">
            Resultados Reais em até 30 dias
          </h2>
          <p className="text-lg text-[oklch(0.50_0.06_55)] max-w-2xl mx-auto">
            Veja a transformação de quem já usa o Sérum Bellawave
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before/After 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl card-hover animate-fade-in-up">
            <img 
              src="/images/antes.jpg" 
              alt="Antes - Pele com manchas"
              className="w-full h-64 object-cover object-top"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-[oklch(0.45_0.08_55)] italic">
                "Minha pele nunca esteve tão uniforme. Em 3 semanas já vi diferença!"
              </p>
              <p className="text-sm text-[oklch(0.55_0.06_55)] mt-2 font-medium">
                — Maria Clara, 32 anos
              </p>
            </div>
          </div>

          {/* Before/After 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl card-hover animate-fade-in-up animation-delay-200">
            <img 
              src="/images/depois.jpg" 
              alt="Depois - Pele radiante"
              className="w-full h-64 object-cover object-top"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-[oklch(0.45_0.08_55)] italic">
                "Os poros diminuíram muito e a textura da pele ficou incrível!"
              </p>
              <p className="text-sm text-[oklch(0.55_0.06_55)] mt-2 font-medium">
                — Juliana Santos, 28 anos
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a 
            href="#precos" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Quero esses resultados
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Fórmula Inteligente",
      description: "Ácido Hialurônico + Niacinamida + Vitamina E em concentração ideal para resultados visíveis.",
      color: "oklch(0.65_0.18_25)"
    },
    {
      icon: Clock,
      title: "Absorção Rápida",
      description: "Textura leve e não oleosa, ideal para uso diário. Absorve em segundos sem deixar resíduos.",
      color: "oklch(0.70_0.15_145)"
    },
    {
      icon: Award,
      title: "Testado e Aprovado",
      description: "Dermatologicamente testado, sem parabenos, sem sulfatos. Seguro para todos os tipos de pele.",
      color: "oklch(0.55_0.08_55)"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.35_0.08_55)] mb-4">
            Por que o Bellawave funciona?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-3xl bg-[oklch(0.98_0.02_60)] card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl font-bold text-[oklch(0.35_0.08_55)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[oklch(0.50_0.06_55)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    "Hidratação profunda que dura o dia todo",
    "Redução visível de linhas finas",
    "Pele mais firme e com mais elasticidade",
    "Clareamento de manchas e uniformização do tom",
    "Controle da oleosidade sem ressecar",
    "Proteção contra radicais livres"
  ];

  return (
    <section className="bg-[oklch(0.98_0.02_60)] py-16 md:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/testimonial-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.35_0.08_55)] mb-4">
              O que você vai sentir na primeira semana
            </h2>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl animate-fade-in-up animation-delay-200">
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[oklch(0.70_0.15_145)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[oklch(0.45_0.08_55)]">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a 
                href="#precos" 
                className="btn-primary inline-flex items-center gap-2"
              >
                Começar meu tratamento
                <ChevronDown className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondCTASection() {
  return (
    <section className="bg-gradient-to-br from-[oklch(0.65_0.18_25)] to-[oklch(0.55_0.20_25)] py-16 md:py-20 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Pronta para transformar sua pele?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
            Aproveite o desconto de lançamento + frete grátis. 
            Oferta por tempo limitado!
          </p>
          
          <a 
            href="#precos" 
            className="inline-flex items-center gap-2 bg-white text-[oklch(0.65_0.18_25)] font-bold px-10 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400"
          >
            Ver ofertas especiais
            <ChevronDown className="w-5 h-5" />
          </a>

          {/* Urgency */}
          <p className="mt-6 text-white/80 text-sm animate-fade-in-up animation-delay-600">
            <Truck className="w-4 h-4 inline mr-1" />
            Últimas unidades com frete grátis
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "A maioria das clientes percebe os primeiros resultados em 7 a 14 dias de uso contínuo. Resultados mais significativos são visíveis após 30 dias de tratamento."
    },
    {
      question: "Serve para todos os tipos de pele?",
      answer: "Sim! A fórmula do Bellawave foi desenvolvida para ser segura e eficaz em todos os tipos de pele: seca, oleosa, mista ou sensível."
    },
    {
      question: "Posso usar durante o dia?",
      answer: "Sim, o sérum pode ser usado de manhã e à noite. Durante o dia, recomendamos aplicar protetor solar após o sérum."
    },
    {
      question: "Quanto tempo dura um frasco?",
      answer: "Cada frasco de 30ml dura aproximadamente 30 dias com uso regular (manhã e noite)."
    },
    {
      question: "Onde comprar com segurança?",
      answer: "O Bellawave é vendido exclusivamente pelo site oficial. Comprando aqui, você tem garantia de produto original, frete grátis e suporte direto."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.35_0.08_55)] mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[oklch(0.98_0.02_60)] rounded-2xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[oklch(0.96_0.02_60)] transition-colors"
                >
                  <span className="font-semibold text-[oklch(0.35_0.08_55)]">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[oklch(0.65_0.18_25)] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-[oklch(0.50_0.06_55)]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.35_0.08_55)] text-white py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="text-center mb-10 pb-10 border-b border-white/20">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-4 rounded-2xl mb-4">
              <Truck className="w-8 h-8 text-[oklch(0.70_0.15_145)]" />
              <div className="text-left">
                <p className="font-bold">Frete Grátis</p>
                <p className="text-sm text-white/80">Entrega para todo o Brasil</p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-bold mb-3">Bellawave</h4>
              <p className="text-white/70 text-sm">
                Sérum facial de alta performance para uma pele radiante e saudável.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contato</h4>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-3">Segurança</h4>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Shield className="w-4 h-4 text-[oklch(0.70_0.15_145)]" />
                <span className="text-white/70 text-sm">Site 100% Seguro</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-10 pt-6 border-t border-white/20 text-white/50 text-sm">
            © 2026 Bellawave. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[oklch(0.55_0.20_145)] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
