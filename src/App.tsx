/**
 * =============================================================================
 * DELUXE AUTO CARE — DETALLADO PROFESIONAL
 * Single-Page Web Application for High-End Automotive Detailing in Ensenada, B.C.
 * 
 * Slogan: "Transformamos tu auto a nivel premium"
 * 
 * -----------------------------------------------------------------------------
 * HOW TO EDIT BUSINESS CONFIGURATION:
 * 1. Business details, phone/WhatsApp, social links, opening hours, and image
 *    paths are located in the `SITE_CONFIG` object directly below.
 * 2. Set `SITE_CONFIG.contact.whatsapp` (e.g. "526461234567") to activate
 *    the WhatsApp buttons and direct contact cards. Any social or phone link
 *    with a "[...]" placeholder or empty string is automatically hidden.
 * 3. Before/After images can be modified in `SITE_CONFIG.images`.
 * 4. All texts for Spanish (Mexico) and English are in `SITE_CONFIG.translations`.
 * =============================================================================
 */

import React, { useState, useEffect, useRef, useId } from 'react';
import {
  Sparkles,
  Shield,
  Car,
  MapPin,
  Calendar,
  Clock,
  Send,
  Copy,
  Check,
  ChevronRight,
  Menu,
  X,
  Phone,
  MessageSquare,
  Instagram,
  Facebook,
  Mail,
  Home,
  Star,
  Sliders,
  Award,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';

/* =============================================================================
   1. SITE CONFIGURATION (EDIT DETAILS HERE)
   ============================================================================= */
export const SITE_CONFIG = {
  brandName: "Deluxe Auto Care",
  subtitle: "Detallado Profesional",
  slogan: "Transformamos tu auto a nivel premium",
  location: "Ensenada, B.C. (Baja California), México",
  city: "Ensenada, B.C.",
  serviceType: "Servicio a Domicilio y Taller",

  // CONTACT & SOCIAL MEDIA
  // Tip: Replace "[WHATSAPP]" with your 10 or 12-digit number (e.g., "526461234567")
  // Social links and phone cards left empty or with "[...]" are automatically hidden!
  contact: {
    whatsapp: "[WHATSAPP]", // e.g. "526461234567"
    phone: "[WHATSAPP]",    // e.g. "+52 (646) 123-4567"
    email: "",              // e.g. "contacto@deluxeautocare.com"
    instagram: "",          // e.g. "deluxeautocare_ensenada"
    facebook: "",           // e.g. "deluxeautocaremex"
    tiktok: "",             // e.g. "deluxeautocare"
    schedule: "Lunes a Sábado: 8:00 AM – 6:00 PM (Previa Cita)",
  },

  // SHOWCASE & BEFORE/AFTER IMAGES
  images: {
    beforePaint: "/src/assets/images/before_car_paint_1790977948841.jpg",
    afterPaint: "/src/assets/images/after_car_paint_1790977961576.jpg",
    studioShowcase: "/src/assets/images/detailing_studio_showcase_1790977972855.jpg",
  },

  // CORE SERVICES (All eligible for home service in Ensenada)
  services: [
    {
      id: "interior",
      name: { es: "Detallado Interior", en: "Interior Detailing" },
      shortDesc: {
        es: "Limpieza profunda de tapicería, vestiduras en piel o tela, desinfección con vapor y acondicionamiento anti-UV para plásticos.",
        en: "Deep steam cleaning for leather or cloth upholstery, sanitation, and premium matte UV dressing for all dashboard panels."
      },
      highlights: {
        es: ["Inyección y extracción de alfombras", "Hidratación de piel", "Eliminación de olores y bacterias"],
        en: ["Carpet injection & extraction", "Leather conditioning", "Odor & bacteria elimination"]
      },
      icon: "car-seat",
    },
    {
      id: "exterior",
      name: { es: "Detallado Exterior", en: "Exterior Detailing" },
      shortDesc: {
        es: "Descontaminación química y mecánica de pintura, limpieza minuciosa de rines, tolvas, cristales y sellador hidrofóbico.",
        en: "Chemical & mechanical paint decontamination, deep wheel and arch cleaning, glass polishing and hydrophobic sealants."
      },
      highlights: {
        es: ["Descontaminación con clay bar", "Limpieza de rines y tolvas al detalle", "Sellado sintético de alta duración"],
        en: ["Clay bar decontamination", "Wheel arch & rim deep clean", "High-durability synthetic sealant"]
      },
      icon: "sparkle-shield",
    },
    {
      id: "completo",
      name: { es: "Detallado Completo", en: "Full Signature Detailing" },
      shortDesc: {
        es: "La experiencia premium total: rejuvenecimiento integral tanto del habitáculo como de la carrocería en un solo servicio.",
        en: "The definitive premium experience: complete interior rejuvenation paired with multi-step exterior restoration."
      },
      highlights: {
        es: ["Interior y exterior al 100%", "Bahía de motor detallada", "Protección completa de molduras"],
        en: ["100% interior & exterior coverage", "Detailed engine bay touch", "Complete trim UV protection"]
      },
      icon: "shield-star",
      featured: true,
    },
    {
      id: "lavado-premium",
      name: { es: "Lavado Premium", en: "Premium Safe Wash" },
      shortDesc: {
        es: "Lavado artesanal con método de dos cubetas, foam lance de pH neutro y secado con microfibras de alta absorción sin micro-rayones.",
        en: "Two-bucket hand wash with pH-neutral foam cannon and ultra-plush microfiber drying to prevent swirl marks."
      },
      highlights: {
        es: ["Espuma activa lubricada", "Cero micro-rayones garantizado", "Acondicionador cerámico rápido"],
        en: ["High-lubricity snow foam", "Zero-scratch technique", "Ceramic spray booster"]
      },
      icon: "droplet",
    },
    {
      id: "pulido",
      name: { es: "Pulido y Encerado", en: "Correction & Wax Polish" },
      shortDesc: {
        es: "Corrección de pintura para eliminar marcas de lavado (swirls), rayones superficiales y oxidación, devolviendo el brillo espejo.",
        en: "Machine paint correction to eliminate swirl marks, light defects and oxidation, unlocking deep glossy mirror reflections."
      },
      highlights: {
        es: ["Eliminación de microrayones", "Brillo profundo efecto mojado", "Cera de carnauba o polímero de alta gama"],
        en: ["Swirl & haze removal", "Wet mirror finish", "High-grade carnauba or polymer wax"]
      },
      icon: "buffer",
    },
    {
      id: "domicilio",
      name: { es: "Servicio a Domicilio", en: "Mobile Detailing Service" },
      shortDesc: {
        es: "Llevamos nuestro equipo profesional directamente a la comodidad de tu hogar o lugar de trabajo en Ensenada, B.C.",
        en: "We bring our fully equipped mobile detailing unit directly to your home or office throughout Ensenada, B.C."
      },
      highlights: {
        es: ["Cobertura en Ensenada, B.C.", "Comodidad total sin traslados", "Disponible para todos los paquetes"],
        en: ["Ensenada area coverage", "Total convenience at your door", "Available on all service tiers"]
      },
      icon: "home-car",
      badge: { es: "Aplica en todos los servicios", en: "Applies to all services" }
    }
  ],

  // BILINGUAL CONTENT TRANSLATIONS
  translations: {
    es: {
      langToggle: "EN",
      nav: {
        home: "Inicio",
        services: "Servicios",
        comparison: "Antes y Después",
        about: "Nosotros",
        book: "Reservar",
        contact: "Contacto",
        ctaQuote: "Cotizar Cita",
      },
      hero: {
        badgeDirect: "Contacto Directo",
        badgeHome: "Servicio a Domicilio",
        badgeLocation: "Ensenada, B.C.",
        headline: "DELUXE AUTO CARE",
        subtitle: "Detallado Profesional",
        slogan: "Transformamos tu auto a nivel premium",
        btnWhatsapp: "Cotiza por WhatsApp",
        btnServices: "Ver Servicios",
        scrollPrompt: "Desliza para explorar",
        trustBar: "Interior y exterior • Servicio a domicilio • Ensenada, B.C. • Contacto directo",
      },
      servicesSection: {
        tag: "Nuestros Servicios",
        title: "Excelencia y Precisión en Cada Detalle",
        desc: "Cada vehículo recibe un trato personalizado con técnicas artesanales y productos de alta gama. Solicita tu cotización a medida.",
        quoteBtn: "Cotizar este servicio",
        homeBannerTitle: "Vamos a ti. Servicio a domicilio en Ensenada, B.C.",
        homeBannerDesc: "Realizamos el detallado en tu cochera o lugar de preferencia con el mismo estándar de calidad y cuidado.",
      },
      comparisonSection: {
        tag: "Resultados Visibles",
        title: "El Poder de la Transformación",
        desc: "Observa la diferencia entre una pintura desgastada con micro-rayones de lavado y el acabado espejo de máxima profundidad que logramos.",
        beforeLabel: "Antes",
        afterLabel: "Después",
        dragHint: "Arrastra el deslizador para comparar",
        customNote: "Reemplaza con tus fotos reales de antes y después (Configurable en SITE_CONFIG.images).",
      },
      aboutSection: {
        tag: "Sobre Nosotros",
        title: "Transformación A Nivel Premium",
        p1: "En Deluxe Auto Care entendemos que tu automóvil es mucho más que un medio de transporte: es una inversión, una pasión y un reflejo de tu estilo. Por ello, abordamos cada detalle con paciencia obsesiva, utilizando productos de la más alta calidad y técnicas seguras que preservan la integridad de tus acabados.",
        p2: "Nacidos en Ensenada, Baja California, brindamos la conveniencia de nuestro servicio a domicilio. Cuidamos cada rincón de tu vehículo —desde la limpieza profunda y acondicionamiento del habitáculo hasta la corrección y sellado de pintura exterior— entregando un acabado impecable que supera las expectativas.",
        features: [
          { title: "Interior y Exterior", desc: "Tratamiento completo en cabina, carrocería y rines." },
          { title: "Servicio a Domicilio", desc: "La comodidad de recibir el servicio en tu casa o trabajo." },
          { title: "Acabado Premium", desc: "Brillo profundo, protección UV y sensación de auto nuevo." },
          { title: "Ensenada, B.C.", desc: "Atención directa y cercana para clientes locales." }
        ],
        processTag: "Proceso Sencillo",
        processTitle: "¿Cómo Funciona?",
        steps: [
          { num: "01", title: "Escríbenos por WhatsApp", desc: "Comparte la marca, modelo y estado general de tu auto." },
          { num: "02", title: "Recibe tu Cotización", desc: "Te orientamos con el paquete ideal y agendamos tu día preferido." },
          { num: "03", title: "Vamos a tu Domicilio", desc: "Llegamos puntuales a tu ubicación en Ensenada con el equipo listo." },
          { num: "04", title: "Disfruta tu Nivel Premium", desc: "Recibe tu auto reluciente, protegido y con aroma a nuevo." },
        ]
      },
      bookingSection: {
        tag: "Reserva Tu Cita",
        title: "Solicita Tu Cotización Directa",
        desc: "Completa el formulario y generaremos al instante tu solicitud personalizada para enviarla directamente por WhatsApp sin intermediarios ni esperas.",
        disclaimer: "Confirmamos todas las citas por WhatsApp. Sin pagos por adelantado en el sitio.",
        fields: {
          name: "Nombre completo",
          namePlaceholder: "Ej. Roberto Morales",
          phone: "Teléfono / WhatsApp",
          phonePlaceholder: "Ej. 646 123 4567",
          car: "Marca y modelo del auto",
          carPlaceholder: "Ej. BMW Serie 3 2021 / Mazda CX-5",
          service: "Servicio de interés",
          servicePlaceholder: "Selecciona un servicio",
          address: "Dirección o Colonia (Ensenada)",
          addressPlaceholder: "Ej. Col. Valle Dorado / Chapultepec",
          date: "Fecha preferida",
          timeSlot: "Horario preferido",
          timeOptions: {
            morning: "Mañana (8:00 AM – 1:00 PM)",
            afternoon: "Tarde (1:00 PM – 6:00 PM)"
          },
          notes: "Comentarios o requerimientos adicionales",
          notesPlaceholder: "¿Algún detalle especial? (Ej. manchas de café, pelo de mascota, rayones en cofre...)",
        },
        submitBtn: "Generar y Enviar Cotización",
        errors: {
          nameReq: "Por favor ingresa tu nombre completo.",
          phoneReq: "Ingresa un número de teléfono o WhatsApp válido.",
          carReq: "Indica la marca, modelo o año aproximado de tu vehículo.",
          serviceReq: "Por favor selecciona el servicio que te interesa.",
          addressReq: "Indica tu colonia o zona en Ensenada para coordinar el traslado.",
        },
        success: {
          title: "¡Solicitud Lista para Enviar!",
          subtitle: "Revisa el resumen de tu cotización para enviarla por WhatsApp:",
          summaryHeader: "Resumen de Solicitud:",
          sendWhatsapp: "Enviar por WhatsApp",
          copiedToast: "¡Mensaje copiado al portapapeles!",
          copyMessage: "Copiar Mensaje",
          openInstagram: "Escribir por Instagram",
          newQuote: "Llenar otra cotización",
          noteConfirmation: "Te responderemos a la brevedad con la disponibilidad y costo exacto para tu auto."
        }
      },
      contactSection: {
        tag: "Contacto Directo",
        title: "Hablemos de Tu Auto",
        desc: "Estamos listos para transformar tu vehículo. Contáctanos por el canal de tu preferencia para resolver cualquier duda.",
        cards: {
          whatsapp: "WhatsApp Directo",
          whatsappSub: "Respuesta rápida y cotizaciones",
          phone: "Teléfono de Contacto",
          phoneSub: "Llamada directa",
          instagram: "Instagram Oficial",
          instagramSub: "Mira nuestros trabajos recientes",
          facebook: "Página de Facebook",
          facebookSub: "Comunidad y actualizaciones",
          tiktok: "TikTok",
          tiktokSub: "Videos de transformaciones",
          email: "Correo Electrónico",
          emailSub: "Consultas y presupuestos",
          location: "Área de Cobertura",
          locationSub: "Servicio a domicilio en Ensenada, B.C.",
        },
        serviceAreaTitle: "Servicio a Domicilio en Ensenada, B.C.",
        serviceAreaDesc: "Nos trasladamos a toda la mancha urbana de Ensenada, Valle Dorado, Maneadero, San Antonio de las Minas, El Sauzal y zonas aledañas.",
        scheduleBadge: "Horario de Atención",
        ctaBanner: {
          title: "¿Listo Para Un Nivel Premium?",
          subtitle: "Devuelve a tu vehículo la presencia y el brillo de exhibición que merece.",
          button: "Cotiza por WhatsApp Ahora"
        }
      },
      footer: {
        rights: "Todos los derechos reservados.",
        madeIn: "Ensenada, Baja California, México",
        privacyNote: "Servicio profesional de detallado automotriz a domicilio.",
      }
    },

    en: {
      langToggle: "ES",
      nav: {
        home: "Home",
        services: "Services",
        comparison: "Before & After",
        about: "About Us",
        book: "Book Now",
        contact: "Contact",
        ctaQuote: "Get Quote",
      },
      hero: {
        badgeDirect: "Direct Contact",
        badgeHome: "Mobile Service",
        badgeLocation: "Ensenada, B.C.",
        headline: "DELUXE AUTO CARE",
        subtitle: "Professional Detailing",
        slogan: "We transform your car to a premium level",
        btnWhatsapp: "Quote via WhatsApp",
        btnServices: "Explore Services",
        scrollPrompt: "Scroll to explore",
        trustBar: "Interior & Exterior • Mobile Service • Ensenada, B.C. • Direct Contact",
      },
      servicesSection: {
        tag: "Our Services",
        title: "Precision & Excellence in Every Detail",
        desc: "Every vehicle receives bespoke treatment with artisanal craftsmanship and professional-grade products. Request your tailor-made quote.",
        quoteBtn: "Quote this service",
        homeBannerTitle: "We come to you. Mobile service in Ensenada, B.C.",
        homeBannerDesc: "We perform full detailing in your driveway or preferred parking space with uncompromised quality.",
      },
      comparisonSection: {
        tag: "Visible Results",
        title: "The Power of Transformation",
        desc: "See the striking contrast between dull paint dulled by wash swirls and the deep, glass-like reflection we deliver.",
        beforeLabel: "Before",
        afterLabel: "After",
        dragHint: "Drag slider to compare results",
        customNote: "Replace with your real before/after photos (Configurable in SITE_CONFIG.images).",
      },
      aboutSection: {
        tag: "About Us",
        title: "Premium Level Transformation",
        p1: "At Deluxe Auto Care, we know your automobile is much more than transport: it represents personal pride and investment. That is why we treat every vehicle with obsessive patience, utilizing safe techniques and top-tier formulations.",
        p2: "Proudly based in Ensenada, Baja California, we offer the convenience of full mobile detailing. From deep interior carpet extraction and leather nourishment to exterior paint correction and hydrophobic protection, we consistently exceed expectations.",
        features: [
          { title: "Interior & Exterior", desc: "Complete attention to upholstery, paintwork and wheels." },
          { title: "Mobile Convenience", desc: "We arrive directly at your home or workplace." },
          { title: "Premium Finish", desc: "Deep mirror gloss, UV preservation and new-car freshness." },
          { title: "Ensenada, B.C.", desc: "Dedicated, direct service for local car owners." }
        ],
        processTag: "Easy Process",
        processTitle: "How It Works",
        steps: [
          { num: "01", title: "Message us on WhatsApp", desc: "Share your car make, model and current condition." },
          { num: "02", title: "Receive your Quote", desc: "We recommend the ideal package and schedule your preferred date." },
          { num: "03", title: "We Come to You", desc: "We arrive on time in Ensenada with full professional equipment." },
          { num: "04", title: "Enjoy Your Ride", desc: "Enjoy your gleaming, protected car with that new-vehicle feel." },
        ]
      },
      bookingSection: {
        tag: "Book Your Slot",
        title: "Request Your Direct Quote",
        desc: "Fill in the details below and we will automatically build a ready-to-send WhatsApp quotation message without delays or extra steps.",
        disclaimer: "All appointments are confirmed via WhatsApp. No upfront payments on site.",
        fields: {
          name: "Full Name",
          namePlaceholder: "E.g. Robert Smith",
          phone: "Phone / WhatsApp",
          phonePlaceholder: "E.g. +52 646 123 4567",
          car: "Car Make & Model",
          carPlaceholder: "E.g. 2021 BMW 3 Series / Mazda CX-5",
          service: "Desired Service",
          servicePlaceholder: "Select a service package",
          address: "Address or Neighborhood (Ensenada)",
          addressPlaceholder: "E.g. Valle Dorado / Chapultepec",
          date: "Preferred Date",
          timeSlot: "Preferred Time",
          timeOptions: {
            morning: "Morning (8:00 AM – 1:00 PM)",
            afternoon: "Afternoon (1:00 PM – 6:00 PM)"
          },
          notes: "Additional Notes or Requests",
          notesPlaceholder: "Any special requirements? (e.g. pet hair, deep leather stains, hood scratch...)",
        },
        submitBtn: "Generate & Send Quote",
        errors: {
          nameReq: "Please enter your full name.",
          phoneReq: "Please enter a valid phone or WhatsApp number.",
          carReq: "Please provide your car brand and model.",
          serviceReq: "Please choose a detailing service.",
          addressReq: "Please provide your location or neighborhood in Ensenada.",
        },
        success: {
          title: "Quotation Ready to Send!",
          subtitle: "Review your customized quote summary to send via WhatsApp:",
          summaryHeader: "Quote Summary:",
          sendWhatsapp: "Send via WhatsApp",
          copiedToast: "Message copied to clipboard!",
          copyMessage: "Copy Message",
          openInstagram: "Message on Instagram",
          newQuote: "Create Another Quote",
          noteConfirmation: "We will promptly confirm availability and exact pricing for your vehicle."
        }
      },
      contactSection: {
        tag: "Direct Contact",
        title: "Let's Talk About Your Car",
        desc: "Ready to elevate your vehicle's look? Reach out through your preferred channel for fast personalized assistance.",
        cards: {
          whatsapp: "Direct WhatsApp",
          whatsappSub: "Fast replies & direct quotes",
          phone: "Phone Line",
          phoneSub: "Direct call",
          instagram: "Official Instagram",
          instagramSub: "Check out our recent projects",
          facebook: "Facebook Page",
          facebookSub: "Community and updates",
          tiktok: "TikTok",
          tiktokSub: "Before & after videos",
          email: "Email Support",
          emailSub: "Inquiries & corporate fleets",
          location: "Service Coverage",
          locationSub: "Mobile service in Ensenada, B.C.",
        },
        serviceAreaTitle: "Mobile Detailing in Ensenada, B.C.",
        serviceAreaDesc: "Serving all residential and commercial zones across Ensenada, Valle Dorado, Maneadero, San Antonio de las Minas, El Sauzal and surrounding areas.",
        scheduleBadge: "Operating Hours",
        ctaBanner: {
          title: "Ready For Premium Detailing?",
          subtitle: "Bring back the showroom depth and protection your car deserves.",
          button: "Quote on WhatsApp Now"
        }
      },
      footer: {
        rights: "All rights reserved.",
        madeIn: "Ensenada, Baja California, Mexico",
        privacyNote: "Professional mobile automotive detailing services.",
      }
    }
  }
};

/* =============================================================================
   2. HELPER FUNCTIONS
   ============================================================================= */

/**
 * Checks if a config string is actually filled and not just a placeholder like "[WHATSAPP]"
 */
const isConfigured = (val?: string): boolean => {
  if (!val) return false;
  const trimmed = val.trim();
  if (trimmed === '') return false;
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) return false;
  return true;
};

/**
 * Clean phone number for WhatsApp wa.me link
 */
const formatWhatsappLink = (phoneVal: string, text: string): string => {
  const cleanPhone = phoneVal.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(text);
  if (!cleanPhone || cleanPhone === '') {
    // If not configured yet, fallback to generic WhatsApp web prompt
    return `https://wa.me/?text=${encodedText}`;
  }
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};

/* =============================================================================
   3. ICON & MOTIF COMPONENTS
   ============================================================================= */

/**
 * Star divider motif with thin brushed gold lines: —— ★ ——
 */
const GoldDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-400/80" />
    <span className="text-amber-300 text-xs sm:text-sm select-none">★</span>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-400/80" />
  </div>
);

/**
 * The Signature Heraldic Shield Crest with brushed-gold double borders,
 * carbon fiber fill, aerodynamic sports car silhouette, "DELUXE AUTO",
 * and "— ★ CARE ★ —" label.
 */
interface ShieldLogoProps {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  showText?: boolean;
}

const ShieldLogo: React.FC<ShieldLogoProps> = ({
  size = "md",
  className = "",
  showText = true,
}) => {
  const gradientId = useId();
  const innerGradId = useId();
  const carbonPatternId = useId();

  // Dimensions based on size
  const dim = {
    sm: { width: 44, height: 52 },
    md: { width: 56, height: 66 },
    lg: { width: 110, height: 130 },
    hero: { width: 220, height: 260 },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <svg
        width={dim.width}
        height={dim.height}
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_8px_24px_rgba(217,169,58,0.22)]"
        aria-label="Deluxe Auto Care Heraldic Shield Crest"
      >
        <defs>
          {/* Carbon texture in SVG */}
          <pattern
            id={carbonPatternId}
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <rect width="8" height="8" fill="#0c0c0e" />
            <path
              d="M0 0L4 4M4 4L8 0M0 8L4 4M4 4L8 8"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.8"
            />
          </pattern>

          {/* Brushed Gold Gradient */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1C1" />
            <stop offset="25%" stopColor="#FFE9A3" />
            <stop offset="55%" stopColor="#D9A93A" />
            <stop offset="85%" stopColor="#9B701A" />
            <stop offset="100%" stopColor="#755010" />
          </linearGradient>

          {/* Secondary Delicate Gold Gradient */}
          <linearGradient id={innerGradId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A6414" />
            <stop offset="50%" stopColor="#FFE9A3" />
            <stop offset="100%" stopColor="#D9A93A" />
          </linearGradient>
        </defs>

        {/* Outer Shield Base Shadow */}
        <path
          d="M100 8 L184 38 C184 148 100 226 100 226 C100 226 16 148 16 38 Z"
          fill="#000000"
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
        />

        {/* Inner Carbon Texture Shield */}
        <path
          d="M100 18 L174 44 C174 142 100 214 100 214 C100 214 26 142 26 44 Z"
          fill={`url(#${carbonPatternId})`}
          stroke={`url(#${innerGradId})`}
          strokeWidth="2.5"
          strokeDasharray="4 2"
        />

        {/* Delicate Golden Inner Accent Ridge */}
        <path
          d="M100 28 L162 52 C162 136 100 198 100 198 C100 198 38 136 38 52 Z"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="1"
          opacity="0.45"
        />

        {/* Sports Car Aerodynamic Silhouette in Brushed Gold */}
        <g transform="translate(42, 60)">
          {/* Car body path: sleek coupe silhouette with spoiler and cabin line */}
          <path
            d="M 12 40 
               C 16 34, 25 32, 38 31 
               C 46 22, 58 15, 78 15 
               C 92 15, 102 24, 108 30 
               C 114 31, 118 36, 120 40 
               L 110 40 
               C 107 36, 100 34, 94 34 
               C 88 34, 82 38, 80 40 
               L 42 40 
               C 40 36, 34 34, 28 34 
               C 22 34, 16 38, 14 40 Z"
            fill={`url(#${gradientId})`}
          />
          {/* Car window glass */}
          <path
            d="M 44 29 
               C 52 23, 62 19, 76 19 
               C 88 19, 95 24, 99 29 
               Z"
            fill="#08080a"
            stroke={`url(#${innerGradId})`}
            strokeWidth="0.8"
          />
          {/* Wheel Arch & Wheels */}
          <circle cx="28" cy="40" r="7" fill="#050505" stroke={`url(#${gradientId})`} strokeWidth="2" />
          <circle cx="28" cy="40" r="3" fill={`url(#${gradientId})`} />
          <circle cx="94" cy="40" r="7" fill="#050505" stroke={`url(#${gradientId})`} strokeWidth="2" />
          <circle cx="94" cy="40" r="3" fill={`url(#${gradientId})`} />
          {/* Aerodynamic highlight streak */}
          <path
            d="M 10 39 Q 60 36 122 39"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Brand Text Inside Shield: DELUXE AUTO */}
        <text
          x="100"
          y="142"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Cinzel, Georgia, serif"
          fontWeight="800"
          fontSize="17"
          letterSpacing="2.5"
        >
          DELUXE
        </text>
        <text
          x="100"
          y="162"
          textAnchor="middle"
          fill={`url(#${gradientId})`}
          fontFamily="Cinzel, Georgia, serif"
          fontWeight="800"
          fontSize="15"
          letterSpacing="3"
        >
          AUTO
        </text>

        {/* Small CARE Label with Thin Gold Lines and Central Star */}
        <line x1="42" y1="180" x2="68" y2="180" stroke={`url(#${gradientId})`} strokeWidth="1" />
        <polygon
          points="76,177 78,181 83,181 79,184 81,188 76,185 72,188 74,184 70,181 75,181"
          fill={`url(#${gradientId})`}
        />
        <text
          x="100"
          y="184"
          textAnchor="middle"
          fill="#FFE9A3"
          fontFamily="Montserrat, sans-serif"
          fontWeight="600"
          fontSize="8.5"
          letterSpacing="3.5"
        >
          CARE
        </text>
        <polygon
          points="124,177 126,181 131,181 127,184 129,188 124,185 120,188 122,184 118,181 123,181"
          fill={`url(#${gradientId})`}
        />
        <line x1="132" y1="180" x2="158" y2="180" stroke={`url(#${gradientId})`} strokeWidth="1" />
      </svg>

      {showText && size !== "hero" && (
        <div className="mt-1 text-center">
          <div className="text-[13px] font-extrabold tracking-widest text-white uppercase font-heading">
            DELUXE AUTO
          </div>
          <div className="text-[9px] tracking-[0.25em] text-amber-300/90 uppercase font-medium flex items-center justify-center gap-1">
            <span className="w-2 h-[1px] bg-amber-400/60"></span>
            CARE
            <span className="w-2 h-[1px] bg-amber-400/60"></span>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Service Card Custom SVG Icon inside a Shield-shaped Gold Frame
 */
const ServiceIcon: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <div className="relative w-14 h-16 flex items-center justify-center shrink-0">
      {/* Mini Shield Frame */}
      <svg
        viewBox="0 0 100 120"
        className="absolute inset-0 w-full h-full filter drop-shadow-[0_2px_8px_rgba(217,169,58,0.2)]"
      >
        <path
          d="M50 4 L92 20 C92 75 50 112 50 112 C50 112 8 75 8 20 Z"
          fill="#121214"
          stroke="url(#iconGoldGrad)"
          strokeWidth="3"
        />
        <path
          d="M50 10 L84 24 C84 68 50 100 50 100 C50 100 16 68 16 24 Z"
          fill="none"
          stroke="#FFE9A3"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="iconGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1C1" />
            <stop offset="50%" stopColor="#D9A93A" />
            <stop offset="100%" stopColor="#8A6414" />
          </linearGradient>
        </defs>
      </svg>

      {/* Render Icon Content */}
      <div className="relative z-10 text-amber-300">
        {icon === "car-seat" && <Car className="w-6 h-6 text-amber-300" />}
        {icon === "sparkle-shield" && <Sparkles className="w-6 h-6 text-amber-300" />}
        {icon === "shield-star" && <Award className="w-6 h-6 text-amber-300" />}
        {icon === "droplet" && <Shield className="w-6 h-6 text-amber-300" />}
        {icon === "buffer" && <Sliders className="w-6 h-6 text-amber-300" />}
        {icon === "home-car" && <Home className="w-6 h-6 text-amber-300" />}
      </div>
    </div>
  );
};

/* =============================================================================
   4. BEFORE & AFTER INTERACTIVE COMPARISON SLIDER
   ============================================================================= */
interface BeforeAfterProps {
  beforeImg: string;
  afterImg: string;
  t: (typeof SITE_CONFIG.translations)["es"];
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImg, afterImg, t }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Slider Container with Brushed-Gold Double Border */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-neutral-950 border-2 border-amber-500/50 shadow-[0_12px_40px_rgba(0,0,0,0.8)] ring-1 ring-amber-400/20"
      >
        {/* AFTER IMAGE (Bottom Layer: Full width glossy paint) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={afterImg}
            alt="Detallado Automotriz Después - Acabado Espejo Deluxe Auto Care"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {/* After Tag */}
          <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-md bg-neutral-950/80 backdrop-blur-md border border-amber-400/60 text-amber-200 text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t.comparisonSection.afterLabel}
          </div>
        </div>

        {/* BEFORE IMAGE (Top Layer: Clipped to sliderPos) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div
            className="absolute inset-0 h-full"
            style={{
              width: containerRef.current
                ? `${containerRef.current.clientWidth}px`
                : "100%",
            }}
          >
            <img
              src={beforeImg}
              alt="Pintura con micro-rayones y desgaste Antes - Deluxe Auto Care"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Before Tag */}
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-neutral-300 text-xs font-semibold tracking-wider uppercase shadow-lg">
            {t.comparisonSection.beforeLabel}
          </div>
        </div>

        {/* DIVIDER HANDLE LINE */}
        <div
          className="absolute top-0 bottom-0 z-20 w-[3px] bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 shadow-[0_0_12px_rgba(217,169,58,0.8)]"
          style={{ left: `calc(${sliderPos}% - 1.5px)` }}
        >
          {/* Center Grip Button with Gold Shield & Star */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 p-[2px] shadow-[0_4px_20px_rgba(0,0,0,0.9)] transition-transform active:scale-110">
            <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center text-amber-300">
              <span className="text-xs">★</span>
            </div>
          </div>
        </div>
      </div>

      {/* Helper caption */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-3 text-xs text-neutral-400 gap-2 px-1">
        <span className="flex items-center gap-1.5 text-neutral-400">
          <Info className="w-3.5 h-3.5 text-amber-400" />
          {t.comparisonSection.dragHint}
        </span>
        <span className="text-neutral-400 italic text-[11px]">
          {t.comparisonSection.customNote}
        </span>
      </div>
    </div>
  );
};

/* =============================================================================
   5. MAIN APPLICATION COMPONENT
   ============================================================================= */
export default function App() {
  // BILINGUAL STATE: Spanish default
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = SITE_CONFIG.translations[lang];

  // ACTIVE SECTION SCROLLSPY
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [navScrolled, setNavScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // CURSOR GLOW FOR DESKTOP
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });

  // BOOKING FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    serviceId: "completo",
    address: "",
    date: "",
    timeSlot: "morning",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<any | null>(null);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  // MOUSEMOVE TRACKER FOR GLOW EFFECT
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // SCROLL LISTENER FOR NAVBAR & SCROLLSPY
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 40);

      const sections = ["inicio", "servicios", "comparativa", "nosotros", "reservar", "contacto"];
      const scrollPos = window.scrollY + 160;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PRE-SELECT SERVICE AND SMOOTH SCROLL FROM SERVICE CARD
  const handleSelectServiceFromCard = (serviceId: string) => {
    setFormData((prev) => ({ ...prev, serviceId }));
    const target = document.getElementById("reservar");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // VALIDATION & SUBMISSION
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = t.bookingSection.errors.nameReq;
    if (!formData.phone.trim()) errors.phone = t.bookingSection.errors.phoneReq;
    if (!formData.car.trim()) errors.car = t.bookingSection.errors.carReq;
    if (!formData.serviceId) errors.serviceId = t.bookingSection.errors.serviceReq;
    if (!formData.address.trim()) errors.address = t.bookingSection.errors.addressReq;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // Find readable service name
    const chosenService = SITE_CONFIG.services.find((s) => s.id === formData.serviceId);
    const serviceName = chosenService ? chosenService.name[lang] : formData.serviceId;
    const timeSlotLabel = formData.timeSlot === "morning"
      ? t.bookingSection.fields.timeOptions.morning
      : t.bookingSection.fields.timeOptions.afternoon;

    // Build friendly Spanish WhatsApp message
    const formattedMessage =
`🚗 *SOLICITUD DE COTIZACIÓN — ${SITE_CONFIG.brandName.toUpperCase()}* 🚗
━━━━━━━━━━━━━━━━━━━━
👤 *Cliente:* ${formData.name.trim()}
📱 *Teléfono:* ${formData.phone.trim()}
🚘 *Auto:* ${formData.car.trim()}
✨ *Servicio:* ${serviceName}
📍 *Ubicación / Colonia:* ${formData.address.trim()} (Ensenada, B.C.)
📅 *Fecha preferida:* ${formData.date || "Por acordar"}
⏰ *Horario:* ${timeSlotLabel}
${formData.notes.trim() ? `💬 *Comentarios:* ${formData.notes.trim()}\n` : ""}━━━━━━━━━━━━━━━━━━━━
_Enviado desde el sitio web oficial de Deluxe Auto Care_`;

    setSubmittedBooking({
      ...formData,
      serviceName,
      timeSlotLabel,
      formattedMessage,
    });
  };

  // CLIPBOARD COPY
  const handleCopyMessage = async () => {
    if (!submittedBooking) return;
    try {
      await navigator.clipboard.writeText(submittedBooking.formattedMessage);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3200);
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  // WHATSAPP REDIRECT HELPER
  const openWhatsAppWithText = (text: string) => {
    const url = formatWhatsappLink(SITE_CONFIG.contact.whatsapp, text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen bg-black text-neutral-100 bg-carbon-weave overflow-x-hidden">
      {/* Subtle Gold Cursor Glow (Desktop Only) */}
      <div
        className="fixed w-[450px] h-[450px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 opacity-20 blur-[90px] transition-transform duration-75 hidden lg:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          background: "radial-gradient(circle, rgba(255,233,163,0.3) 0%, rgba(217,169,58,0.1) 45%, transparent 70%)",
        }}
      />

      {/* =======================================================================
          1. NAVBAR (Transparent, becoming blurred black with gold bottom border)
          ======================================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navScrolled
            ? "bg-neutral-950/90 backdrop-blur-md border-b border-amber-500/30 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.85)]"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <ShieldLogo size="sm" showText={false} />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-wider text-white font-heading group-hover:text-amber-300 transition-colors">
                {SITE_CONFIG.brandName}
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] text-amber-300/80 uppercase font-medium -mt-1">
                {SITE_CONFIG.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {[
              { id: "inicio", label: t.nav.home },
              { id: "servicios", label: t.nav.services },
              { id: "comparativa", label: t.nav.comparison },
              { id: "nosotros", label: t.nav.about },
              { id: "reservar", label: t.nav.book },
              { id: "contacto", label: t.nav.contact },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors py-1 relative ${
                  activeSection === link.id
                    ? "text-amber-300 font-semibold"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Action Zone: Language Toggle + CTA Button + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Language Toggle ES | EN */}
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              aria-label="Cambiar idioma / Toggle language"
              className="px-2.5 py-1 text-xs font-semibold rounded-md border border-neutral-700 hover:border-amber-400/60 bg-neutral-900/60 text-neutral-300 hover:text-amber-200 transition-all cursor-pointer"
            >
              <span className={lang === "es" ? "text-amber-400 font-bold" : "text-neutral-400"}>ES</span>
              <span className="mx-1 text-neutral-600">|</span>
              <span className={lang === "en" ? "text-amber-400 font-bold" : "text-neutral-400"}>EN</span>
            </button>

            {/* Desktop Gold CTA Button */}
            <a
              href="#reservar"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg text-black bg-gradient-to-r from-[#FFF1C1] via-[#D9A93A] to-[#8A6414] hover:brightness-110 active:scale-95 transition-all shadow-[0_2px_15px_rgba(217,169,58,0.3)] animate-glint"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{t.nav.ctaQuote}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900/80 border border-neutral-800 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[60px] bg-neutral-950/95 backdrop-blur-xl border-b border-amber-500/30 px-6 py-8 flex flex-col gap-4 shadow-2xl transition-all">
            {[
              { id: "inicio", label: t.nav.home },
              { id: "servicios", label: t.nav.services },
              { id: "comparativa", label: t.nav.comparison },
              { id: "nosotros", label: t.nav.about },
              { id: "reservar", label: t.nav.book },
              { id: "contacto", label: t.nav.contact },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 border-b border-neutral-900 flex items-center justify-between ${
                  activeSection === link.id ? "text-amber-400 font-bold" : "text-neutral-200"
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#reservar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider rounded-lg text-black bg-gradient-to-r from-[#FFF1C1] via-[#D9A93A] to-[#8A6414] shadow-lg"
              >
                {t.nav.ctaQuote}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =======================================================================
          2. LANDING / HERO SECTION
          ======================================================================= */}
      <section
        id="inicio"
        className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Ambient Golden Spotlight & Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] bg-gradient-to-b from-amber-500/15 via-amber-700/5 to-transparent blur-[120px] pointer-events-none" />

        {/* Slow light streaks across carbon texture */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,169,58,0.25),rgba(255,255,255,0))]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Animated Hero Shield Crest Logo */}
          <div className="mb-6 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-600/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            <ShieldLogo size="hero" showText={false} className="relative z-10" />
          </div>

          {/* Subtitle with Star Divider */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-amber-300 uppercase mb-2">
            <span className="w-8 sm:w-12 h-[1px] bg-amber-400/60" />
            <span>★ {SITE_CONFIG.subtitle} ★</span>
            <span className="w-8 sm:w-12 h-[1px] bg-amber-400/60" />
          </div>

          {/* Heavy Display Font Headline with Brushed Gold Gradient */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 font-heading text-balance">
            <span className="gold-text-gradient drop-shadow-[0_2px_12px_rgba(217,169,58,0.3)]">
              {SITE_CONFIG.brandName}
            </span>
          </h1>

          {/* Slogan */}
          <p className="text-lg sm:text-2xl text-neutral-200 font-light max-w-2xl mb-6 tracking-wide text-balance">
            "{SITE_CONFIG.slogan}"
          </p>

          {/* Badges strip (Clean typography with borders) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-amber-500/30">
              <Car className="w-4 h-4 text-amber-400" />
              <span>Detallado interior y exterior</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-amber-500/30">
              <Home className="w-4 h-4 text-amber-400" />
              <span>{t.hero.badgeHome}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-amber-500/30">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{t.hero.badgeLocation}</span>
            </div>
          </div>

          {/* Two Primary Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                const message = `Hola Deluxe Auto Care, me interesa solicitar una cotización de detallado automotriz en Ensenada, B.C.`;
                openWhatsAppWithText(message);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-black bg-gradient-to-r from-[#FFF1C1] via-[#D9A93A] to-[#8A6414] hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_25px_rgba(217,169,58,0.4)] flex items-center justify-center gap-2.5 animate-glint cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>{t.hero.btnWhatsapp}</span>
            </button>

            <a
              href="#servicios"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold uppercase tracking-wider text-xs sm:text-sm text-amber-200 border-2 border-amber-500/60 hover:border-amber-400 hover:bg-amber-500/10 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>{t.hero.btnServices}</span>
              <ChevronRight className="w-4 h-4 text-amber-300" />
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-14 pt-6 border-t border-neutral-800/80 w-full max-w-2xl flex items-center justify-center text-xs tracking-wider text-neutral-400 font-medium">
            <p className="flex items-center justify-center flex-wrap gap-2 text-center">
              <span>Interior y exterior</span>
              <span className="text-amber-500">★</span>
              <span>Servicio a domicilio</span>
              <span className="text-amber-500">★</span>
              <span>Ensenada, B.C.</span>
              <span className="text-amber-500">★</span>
              <span>Contacto directo</span>
            </p>
          </div>
        </div>
      </section>

      {/* =======================================================================
          3. SERVICES SECTION
          ======================================================================= */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-400 mb-2">
            <span>{t.servicesSection.tag}</span>
          </div>
          <GoldDivider className="mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-heading text-balance">
            {t.servicesSection.title}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed text-balance">
            {t.servicesSection.desc}
          </p>
        </div>

        {/* Highlighted Banner: Home Service in Ensenada */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-amber-500/40 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 shrink-0">
                <Home className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    Ensenada, B.C.
                  </span>
                  <span className="text-xs text-neutral-400">★ Cobertura Local</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {t.servicesSection.homeBannerTitle}
                </h3>
                <p className="text-sm text-neutral-300 mt-1 max-w-2xl">
                  {t.servicesSection.homeBannerDesc}
                </p>
              </div>
            </div>

            <a
              href="#reservar"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 hover:brightness-110 transition-all shrink-0 shadow-md whitespace-nowrap"
            >
              {t.nav.ctaQuote}
            </a>
          </div>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.services.map((service) => {
            const isSignature = service.featured;
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  isSignature
                    ? "bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 border-2 border-amber-400/80 shadow-[0_10px_35px_rgba(217,169,58,0.2)]"
                    : "bg-carbon-card border border-neutral-800 hover:border-amber-500/50 shadow-lg"
                }`}
              >
                {/* Subtle Card Glint Sweep on Hover */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-amber-300/5 to-transparent" />
                </div>

                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <ServiceIcon icon={service.icon} />
                    {service.badge ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500/15 border border-amber-400/40 text-amber-300">
                        {service.badge[lang]}
                      </span>
                    ) : isSignature ? (
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-amber-400 text-black">
                        ★ Signature
                      </span>
                    ) : null}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading group-hover:text-amber-300 transition-colors">
                    {service.name[lang]}
                  </h3>

                  {/* Short Honest Description */}
                  <p className="text-neutral-300 text-sm leading-relaxed mb-5">
                    {service.shortDesc[lang]}
                  </p>

                  {/* Highlights Checklist */}
                  <ul className="space-y-2 mb-6 text-xs text-neutral-300">
                    {service.highlights[lang].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => handleSelectServiceFromCard(service.id)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isSignature
                      ? "text-black bg-gradient-to-r from-[#FFF1C1] via-[#D9A93A] to-[#8A6414] hover:brightness-110 shadow-md"
                      : "text-amber-300 bg-neutral-900 border border-amber-500/30 hover:border-amber-400 hover:bg-neutral-800"
                  }`}
                >
                  <span>{t.servicesSection.quoteBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* =======================================================================
          4. BEFORE & AFTER SECTION
          ======================================================================= */}
      <section id="comparativa" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-400 mb-2">
            <span>{t.comparisonSection.tag}</span>
          </div>
          <GoldDivider className="mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-heading text-balance">
            {t.comparisonSection.title}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed text-balance">
            {t.comparisonSection.desc}
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <BeforeAfterSlider
          beforeImg={SITE_CONFIG.images.beforePaint}
          afterImg={SITE_CONFIG.images.afterPaint}
          t={t}
        />
      </section>

      {/* =======================================================================
          5. ABOUT SECTION (Split layout + Features + How it works timeline)
          ======================================================================= */}
      <section id="nosotros" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Premium Honest Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-400 mb-2">
              <span>{t.aboutSection.tag}</span>
            </div>
            <div className="h-[1px] w-16 bg-gradient-to-r from-amber-400 to-transparent mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-heading text-balance">
              {t.aboutSection.title}
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>{t.aboutSection.p1}</p>
              <p>{t.aboutSection.p2}</p>
            </div>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.aboutSection.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                    <span className="text-xs">★</span>
                    <h4>{feat.title}</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-normal">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-[0_12px_45px_rgba(0,0,0,0.85)] group">
              <img
                src={SITE_CONFIG.images.studioShowcase}
                alt="Deluxe Auto Care - Detallado de autos de lujo en Ensenada"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold tracking-widest uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ensenada, Baja California</span>
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  {SITE_CONFIG.brandName}
                </h3>
                <p className="text-xs text-neutral-300">
                  {SITE_CONFIG.slogan}
                </p>
              </div>
            </div>

            {/* Photo placeholder label for the user */}
            <div className="mt-2 text-center">
              <span className="text-[11px] text-neutral-400 italic">
                Agrega aquí tu foto de trabajo (Configurable en SITE_CONFIG.images.studioShowcase)
              </span>
            </div>
          </div>
        </div>

        {/* "CÓMO FUNCIONA" Animated Timeline */}
        <div className="mt-16 pt-12 border-t border-neutral-900">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              {t.aboutSection.processTag}
            </span>
            <GoldDivider className="my-3" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              {t.aboutSection.processTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.aboutSection.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-carbon-card border border-neutral-800 hover:border-amber-400/50 transition-all group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400/30 group-hover:text-amber-400 font-heading transition-colors mb-3">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-white mb-2 font-heading group-hover:text-amber-200 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================================
          6. BOOKING SECTION (No backend, simple WhatsApp quotation generator)
          ======================================================================= */}
      <section id="reservar" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-400 mb-2">
            <span>{t.bookingSection.tag}</span>
          </div>
          <GoldDivider className="mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-heading text-balance">
            {t.bookingSection.title}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed text-balance">
            {t.bookingSection.desc}
          </p>
        </div>

        {/* Booking Card Container */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-neutral-950/90 backdrop-blur-xl border-2 border-amber-500/40 shadow-[0_15px_50px_rgba(0,0,0,0.85)] ring-1 ring-amber-400/20">
          {!submittedBooking ? (
            /* BOOKING INPUT FORM */
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Nombre Completo */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.bookingSection.fields.name} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.bookingSection.fields.namePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      formErrors.name ? "border-rose-500/80" : "border-neutral-800"
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-xs text-rose-400 mt-1 block">{formErrors.name}</span>
                  )}
                </div>

                {/* 2. Teléfono / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.bookingSection.fields.phone} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.bookingSection.fields.phonePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      formErrors.phone ? "border-rose-500/80" : "border-neutral-800"
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-xs text-rose-400 mt-1 block">{formErrors.phone}</span>
                  )}
                </div>

                {/* 3. Marca y Modelo del Auto */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.bookingSection.fields.car} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.car}
                    onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                    placeholder={t.bookingSection.fields.carPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      formErrors.car ? "border-rose-500/80" : "border-neutral-800"
                    }`}
                  />
                  {formErrors.car && (
                    <span className="text-xs text-rose-400 mt-1 block">{formErrors.car}</span>
                  )}
                </div>

                {/* 4. Servicio Deseado */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.bookingSection.fields.service} <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  >
                    {SITE_CONFIG.services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name[lang]} {s.featured ? "(★ Recomendado)" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 5. Dirección o Colonia en Ensenada */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.bookingSection.fields.address} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder={t.bookingSection.fields.addressPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      formErrors.address ? "border-rose-500/80" : "border-neutral-800"
                    }`}
                  />
                  {formErrors.address && (
                    <span className="text-xs text-rose-400 mt-1 block">{formErrors.address}</span>
                  )}
                </div>

                {/* 6. Fecha Preferida */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    {t.bookingSection.fields.date}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* 7. Horario Preferido (Radio pills) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  {t.bookingSection.fields.timeSlot}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.timeSlot === "morning"
                        ? "border-amber-400 bg-amber-500/10 text-amber-200"
                        : "border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name="timeSlot"
                      value="morning"
                      checked={formData.timeSlot === "morning"}
                      onChange={() => setFormData({ ...formData, timeSlot: "morning" })}
                      className="accent-amber-400"
                    />
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="text-xs sm:text-sm font-medium">
                      {t.bookingSection.fields.timeOptions.morning}
                    </span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.timeSlot === "afternoon"
                        ? "border-amber-400 bg-amber-500/10 text-amber-200"
                        : "border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name="timeSlot"
                      value="afternoon"
                      checked={formData.timeSlot === "afternoon"}
                      onChange={() => setFormData({ ...formData, timeSlot: "afternoon" })}
                      className="accent-amber-400"
                    />
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="text-xs sm:text-sm font-medium">
                      {t.bookingSection.fields.timeOptions.afternoon}
                    </span>
                  </label>
                </div>
              </div>

              {/* 8. Comentarios adicionales */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  {t.bookingSection.fields.notes}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t.bookingSection.fields.notesPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none"
                />
              </div>

              {/* Disclaimer */}
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.bookingSection.disclaimer}</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl text-sm font-extrabold uppercase tracking-widest text-black bg-gradient-to-r from-[#FFF1C1] via-[#D9A93A] to-[#8A6414] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_6px_30px_rgba(217,169,58,0.35)] flex items-center justify-center gap-2.5 animate-glint cursor-pointer"
              >
                <Send className="w-4 h-4 text-black" />
                <span>{t.bookingSection.submitBtn}</span>
              </button>
            </form>
          ) : (
            /* ANIMATED SUCCESS STATE CARD */
            <div className="py-4 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-amber-300 to-amber-600 p-[2px] mx-auto mb-4 animate-bounce">
                <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center">
                  <Check className="w-8 h-8 text-amber-300" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-2">
                {t.bookingSection.success.title}
              </h3>
              <p className="text-neutral-300 text-sm max-w-md mx-auto mb-6">
                {t.bookingSection.success.subtitle}
              </p>

              {/* Summary Card with formatted message preview */}
              <div className="max-w-xl mx-auto mb-8 p-5 rounded-2xl bg-neutral-900/90 border border-amber-500/40 text-left font-mono text-xs sm:text-sm text-neutral-200 whitespace-pre-line leading-relaxed shadow-inner">
                {submittedBooking.formattedMessage}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-6">
                <button
                  onClick={() => openWhatsAppWithText(submittedBooking.formattedMessage)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-black bg-gradient-to-r from-[#FFF1C1] via-[#D9A93A] to-[#8A6414] hover:brightness-110 shadow-[0_4px_20px_rgba(217,169,58,0.35)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.bookingSection.success.sendWhatsapp}</span>
                </button>

                <button
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-amber-200 bg-neutral-900 border border-amber-500/40 hover:bg-neutral-800 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Copy className="w-4 h-4 text-amber-400" />
                  <span>{copiedToast ? t.bookingSection.success.copiedToast : t.bookingSection.success.copyMessage}</span>
                </button>
              </div>

              {/* If Instagram is set in config, show Instagram direct write */}
              {isConfigured(SITE_CONFIG.contact.instagram) && (
                <div className="mb-4">
                  <a
                    href={`https://instagram.com/${SITE_CONFIG.contact.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-2 text-xs text-amber-400 hover:underline"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>{t.bookingSection.success.openInstagram}</span>
                  </a>
                </div>
              )}

              <p className="text-xs text-neutral-400 max-w-md mx-auto mb-6">
                {t.bookingSection.success.noteConfirmation}
              </p>

              <button
                onClick={() => setSubmittedBooking(null)}
                className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
              >
                {t.bookingSection.success.newQuote}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =======================================================================
          7. CONTACT SECTION (Cards hidden if config is empty or placeholder)
          ======================================================================= */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-400 mb-2">
            <span>{t.contactSection.tag}</span>
          </div>
          <GoldDivider className="mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-heading text-balance">
            {t.contactSection.title}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed text-balance">
            {t.contactSection.desc}
          </p>
        </div>

        {/* Contact Cards Grid: ONLY show cards if configured! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Card 1: WhatsApp (Only if configured) */}
          {isConfigured(SITE_CONFIG.contact.whatsapp) && (
            <a
              href={formatWhatsappLink(SITE_CONFIG.contact.whatsapp, "Hola Deluxe Auto Care, quisiera información y cotización.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-carbon-card border border-neutral-800 hover:border-amber-400/60 transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {t.contactSection.cards.whatsapp}
                </h4>
                <p className="text-xs text-neutral-400 mt-1">{t.contactSection.cards.whatsappSub}</p>
                <span className="inline-flex items-center gap-1 text-xs text-amber-400 mt-2 font-semibold">
                  <span>Chatear ahora</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          )}

          {/* Card 2: Phone Direct (Only if configured) */}
          {isConfigured(SITE_CONFIG.contact.phone) && (
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="p-6 rounded-2xl bg-carbon-card border border-neutral-800 hover:border-amber-400/60 transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {t.contactSection.cards.phone}
                </h4>
                <p className="text-xs text-neutral-400 mt-1">{t.contactSection.cards.phoneSub}</p>
                <span className="inline-block text-xs text-amber-400 mt-2 font-semibold">
                  {SITE_CONFIG.contact.phone}
                </span>
              </div>
            </a>
          )}

          {/* Card 3: Instagram (Only if configured) */}
          {isConfigured(SITE_CONFIG.contact.instagram) && (
            <a
              href={`https://instagram.com/${SITE_CONFIG.contact.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-carbon-card border border-neutral-800 hover:border-amber-400/60 transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {t.contactSection.cards.instagram}
                </h4>
                <p className="text-xs text-neutral-400 mt-1">{t.contactSection.cards.instagramSub}</p>
                <span className="inline-flex items-center gap-1 text-xs text-amber-400 mt-2 font-semibold">
                  <span>@{SITE_CONFIG.contact.instagram}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          )}

          {/* Card 4: Facebook (Only if configured) */}
          {isConfigured(SITE_CONFIG.contact.facebook) && (
            <a
              href={`https://facebook.com/${SITE_CONFIG.contact.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-carbon-card border border-neutral-800 hover:border-amber-400/60 transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors shrink-0">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {t.contactSection.cards.facebook}
                </h4>
                <p className="text-xs text-neutral-400 mt-1">{t.contactSection.cards.facebookSub}</p>
                <span className="inline-flex items-center gap-1 text-xs text-amber-400 mt-2 font-semibold">
                  <span>Visitar página</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          )}

          {/* Card 5: Email (Only if configured) */}
          {isConfigured(SITE_CONFIG.contact.email) && (
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="p-6 rounded-2xl bg-carbon-card border border-neutral-800 hover:border-amber-400/60 transition-all group flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {t.contactSection.cards.email}
                </h4>
                <p className="text-xs text-neutral-400 mt-1">{t.contactSection.cards.emailSub}</p>
                <span className="inline-block text-xs text-amber-400 mt-2 font-semibold">
                  {SITE_CONFIG.contact.email}
                </span>
              </div>
            </a>
          )}

          {/* Card 6: Service Area & Location (Always shown since Ensenada is verified) */}
          <div className="p-6 rounded-2xl bg-carbon-card border border-neutral-800 hover:border-amber-400/60 transition-all flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-heading">
                {t.contactSection.cards.location}
              </h4>
              <p className="text-xs text-neutral-400 mt-1">{t.contactSection.cards.locationSub}</p>
              <span className="inline-block text-xs text-amber-300 font-semibold mt-2">
                {SITE_CONFIG.location}
              </span>
            </div>
          </div>
        </div>

        {/* Stylized Service Area Panel with Gold Pin and Soft Ring Pulses */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950/80 border border-amber-500/30 relative overflow-hidden mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-6">
              {/* Animated Pin Graphic */}
              <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 rounded-full border border-amber-400/30 animate-ping" />
                <div className="absolute inset-2 rounded-full border border-amber-400/40 animate-pulse" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 flex items-center justify-center shadow-[0_0_20px_rgba(217,169,58,0.5)]">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {t.contactSection.serviceAreaTitle}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                  {t.contactSection.serviceAreaDesc}
                </p>
              </div>
            </div>

            <div className="px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-center shrink-0">
              <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400 mb-1">
                {t.contactSection.scheduleBadge}
              </div>
              <div className="text-xs text-neutral-300 font-medium">
                {SITE_CONFIG.contact.schedule}
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-amber-500/50 shadow-[0_12px_40px_rgba(217,169,58,0.15)] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFE9A3_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="text-amber-400 text-xl mb-3">★ ★ ★</div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading mb-3">
              {t.contactSection.ctaBanner.title}
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base mb-8">
              {t.contactSection.ctaBanner.subtitle}
            </p>
            <button
              onClick={() => {
                const message = "Hola Deluxe Auto Care, me gustaría recibir una cotización para mi auto en Ensenada.";
                openWhatsAppWithText(message);
              }}
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFF1C1] via-[#D9A93A] to-[#8A6414] hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_30px_rgba(217,169,58,0.4)] inline-flex items-center gap-3 animate-glint cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>{t.contactSection.ctaBanner.button}</span>
            </button>
          </div>
        </div>
      </section>

      {/* =======================================================================
          8. FOOTER
          ======================================================================= */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <ShieldLogo size="sm" showText={false} />
            <div>
              <div className="text-base font-bold text-white font-heading">
                {SITE_CONFIG.brandName}
              </div>
              <div className="text-xs text-neutral-400">
                {SITE_CONFIG.subtitle} • {t.footer.madeIn}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <a href="#inicio" className="hover:text-amber-300 transition-colors">{t.nav.home}</a>
            <a href="#servicios" className="hover:text-amber-300 transition-colors">{t.nav.services}</a>
            <a href="#comparativa" className="hover:text-amber-300 transition-colors">{t.nav.comparison}</a>
            <a href="#nosotros" className="hover:text-amber-300 transition-colors">{t.nav.about}</a>
            <a href="#reservar" className="hover:text-amber-300 transition-colors">{t.nav.book}</a>
            <a href="#contacto" className="hover:text-amber-300 transition-colors">{t.nav.contact}</a>
          </div>

          {/* Copyright with Dynamic Year */}
          <div className="text-xs text-neutral-500">
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* =======================================================================
          9. FLOATING BUTTON (DESKTOP) & STICKY BOTTOM BAR (MOBILE)
          ======================================================================= */}
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={() => {
            const message = "Hola Deluxe Auto Care, quisiera cotizar el detallado de mi vehículo en Ensenada.";
            openWhatsAppWithText(message);
          }}
          aria-label="Cotizar por WhatsApp"
          className="p-3.5 rounded-full bg-gradient-to-r from-[#FFF1C1] via-[#D9A93A] to-[#8A6414] text-black shadow-[0_6px_25px_rgba(217,169,58,0.45)] hover:scale-110 active:scale-95 transition-all flex items-center gap-2 font-bold text-xs uppercase tracking-wider group cursor-pointer"
        >
          <MessageSquare className="w-5 h-5 text-black" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold">
            {t.hero.btnWhatsapp}
          </span>
        </button>
      </div>

      {/* Mobile Sticky Bottom CTA Bar (Cap <= 15% viewport height) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-neutral-950/95 backdrop-blur-md border-t border-amber-500/30 flex items-center gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.8)]">
        <button
          onClick={() => {
            const message = "Hola Deluxe Auto Care, me gustaría recibir una cotización de detallado para mi auto en Ensenada.";
            openWhatsAppWithText(message);
          }}
          className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFF1C1] via-[#D9A93A] to-[#8A6414] shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-black shrink-0" />
          <span className="truncate">{t.hero.btnWhatsapp}</span>
        </button>

        <a
          href="#reservar"
          className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-200 border border-amber-500/40 bg-neutral-900 shrink-0 flex items-center justify-center"
        >
          {t.nav.book}
        </a>
      </div>
    </div>
  );
}
