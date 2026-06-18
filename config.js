/* ============================================================
   CONFIG — NAD+ MEN'S COMPLEX (Selerb) · Chile
   Hero: laboratorio futurista (ChatGPT). Paleta sacada del hero.
   ⚠️ FALTA: precios reales (confirmar con usuario) + backend nuevo
   (sheetUrl/n8nConfirm/panelUrl/pixel propios — hoy apuntan a Shilajit
   solo para previsualizar el diseño, NO usar en vivo así).
   ============================================================ */
window.CONFIG = {
  /* ---- Identidad ---- */
  marca: "Selerb",
  producto: "Selerb NAD+ Men's Complex · 60 cápsulas",
  productoCorto: "NAD+ Men's Complex",
  seoTitle: "Selerb NAD+ Men's Complex · Energía celular y vitalidad masculina | Pago contra entrega Chile",
  seoDesc: "NMN, CoQ10, L-Arginina, Saw Palmetto y KSM-66 en una fórmula avanzada: energía celular, óxido nítrico y salud de la próstata. 60 cápsulas. Envío gratis y pago al recibir en todo Chile.",

  /* ---- Motor de diseño (paleta sacada del hero azul/lab) ---- */
  paleta: { pri:"#1565d8", sec:"#22a7e6", acc:"#00d6a8", priD:"#0a2a54", ink:"#0b1626" },

  /* ---- País / moneda ---- */
  pais: { nombre:"Chile", cc:"cl", prefijo:"+56", moneda:"CLP", locale:"es-CL" },

  /* ---- Hero ---- */
  heroKicker: "La ciencia de la longevidad masculina",
  heroTitle: 'Recupera tu <span class="hl">energía y potencia</span> a nivel celular',
  heroLead: "NMN, CoQ10 y 8 activos clínicos en una sola cápsula. Energía real, óxido nítrico y salud masculina — sin estimulantes ni bajones.",
  heroTag: "Envío gratis a todo Chile",
  badges: ["🧬 8 activos en 1", "⚡ 1000mg por toma", "🚚 Pago al recibir"],

  /* ---- Precios / packs ---- */
  precioUnidad: 24500,
  packs: [
    { qty:1, price:24500, was:24500, label:"1 unidad",  sub:"Ahorra 0%",  tag:"" },
    { qty:2, price:32000, was:49000, label:"2 unidades", sub:"Ahorra 35%", tag:"MÁS VENDIDO" },
    { qty:3, price:45000, was:73500, label:"3 unidades", sub:"Ahorra 39%", tag:"MEJOR PRECIO" }
  ],

  /* ---- Imágenes (hero ya nuevo; el resto se regenera a juego) ---- */
  img: {
    logo:    "",
    hero:    "img/hero.webp",
    oferta:  "img/duo.webp",
    galeria: ["img/g1.webp","img/g2.webp","img/g3.webp","img/g4.webp"],
    packThumb1: "img/unidad.png",
    packThumb2: "img/duo.webp"
  },

  /* ---- Trust strip (4) ---- */
  trust: [
    { em:"🚚", b:"Envío gratis", s:"a todo Chile" },
    { em:"💵", b:"Paga al recibir", s:"contra entrega" },
    { em:"🧬", b:"8 activos premium", s:"en 1 cápsula" },
    { em:"⭐", b:"+500 hombres", s:"con más energía" }
  ],

  /* ---- Beneficios (3) ---- */
  benTitle: "Por qué los hombres lo eligen",
  benSub: "Una fórmula completa de energía celular, circulación y salud masculina — no un ingrediente suelto.",
  beneficios: [
    { ic:"⚡", t:"Energía celular real", d:"El NMN eleva tu NAD+, el combustible de tus células. Menos cansancio, más rendimiento todo el día." },
    { ic:"🩸", t:"Óxido nítrico y circulación", d:"L-Arginina y L-Citrulina mejoran el flujo sanguíneo: más oxígeno, mejor desempeño y vitalidad." },
    { ic:"🛡️", t:"Salud de la próstata", d:"Saw Palmetto y cúrcuma cuidan tu próstata y reducen la inflamación para un bienestar completo." }
  ],

  /* ---- Cómo actúa (intro + 3 pasos) ---- */
  howTitle: "¿Cómo actúa en tu cuerpo?",
  howIntro: "Con la edad tus niveles de NAD+ caen y tus células producen menos energía. Esta fórmula los recarga desde adentro, paso a paso.",
  howSteps: [
    { t:"Recarga", d:"El NMN se convierte en NAD+, el combustible directo de tus mitocondrias." },
    { t:"Activa", d:"Tus células producen más energía (ATP) y el óxido nítrico abre tus vasos sanguíneos." },
    { t:"Protege", d:"Resveratrol, CoQ10 y cúrcuma protegen tus células y cuidan tu próstata." }
  ],

  /* ---- Oferta ---- */
  offerTitle: "2x oferta especial",
  offerSub: "Aprovecha el descuento por tiempo limitado — paga al recibir.",
  offerWas: 49000,
  offerNew: 32000,

  /* ---- Stats (contadores) ---- */
  statTitle: "Resultados que se sienten",
  stats: [
    { em:'<svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>', valor:92, suf:"%", d:"reporta más energía y resistencia." },
    { em:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/></svg>', valor:87, suf:"%", d:"nota mejor concentración y ánimo." },
    { em:'<svg viewBox="0 0 24 24"><path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z"/></svg>', valor:90, suf:"%", d:"siente mejor circulación y desempeño." },
    { em:'<svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.2 5.8.9-4.2 4 1 5.7-5.2-2.7-5.2 2.7 1-5.7-4.2-4 5.8-.9z"/></svg>', valor:95, suf:"%", d:"lo recomienda como su base diaria." }
  ],

  /* ---- Comparativa ---- */
  cmpTitle: "¿Qué lo hace diferente?",
  comparativa: [
    "8 activos premium (NMN, CoQ10, KSM-66, Saw Palmetto) en una sola cápsula — no fórmulas baratas de un solo ingrediente.",
    "1000mg por porción, con dosis reales que sí se sienten.",
    "Cápsulas veggie, sin rellenos ni estimulantes que alteren tu sueño."
  ],

  /* ---- Reseñas ---- */
  revScore: 4.8,
  revSeed: 180,

  /* ---- Garantía ---- */
  garDias: 30,
  garTitle: "Garantía total de satisfacción",
  garText: "Si no sientes la diferencia en 30 días, te devolvemos tu dinero. Sin preguntas. Tu compra está 100% protegida.",

  /* ---- FAQ ---- */
  faq: [
    { q:"¿En cuánto tiempo veré resultados?", a:"La mayoría siente más energía y enfoque entre la primera y segunda semana de uso constante." },
    { q:"¿Qué es el NAD+ y el NMN?", a:"El NAD+ es la molécula que tus células usan para producir energía; el NMN es su precursor directo. Más NMN significa más NAD+ y más energía celular." },
    { q:"¿Ayuda con la próstata?", a:"Sí. Incluye Saw Palmetto y cúrcuma, dos activos reconocidos por apoyar la salud prostática y reducir la inflamación." },
    { q:"¿Hacen envíos a regiones?", a:"Sí, llegamos a todo Chile con envío gratis y pagas cuando recibes en tu casa." }
  ],

  /* ---- Transportadoras (logos en /img) ---- */
  carriers: ["img/logo-bluexpress.png", "img/logo-starken.png"],

  /* ---- Contacto / footer ---- */
  footTitle: "JAYE GROUP — CHILE",
  footAddr: "Av. Providencia 1208, Oficina 16, Santiago, RM.",
  footMail: "gerencia@jayegroup.com.co",
  whatsapp: "56920007288",

  /* ===========================================================
     BACKEND — ⚠️ HOY apunta a Shilajit solo para previsualizar.
     Antes de publicar: planilla nueva + Apps Script propio (sheetUrl),
     webhook n8n propio, panel propio, y pixel. dropiId del NAD+ = 120370.
     =========================================================== */
  dropiId:   120370,
  sheetUrl:  "https://script.google.com/macros/s/AKfycbwilBW_z6KWfF8yS3fHEQ7ufMjfM4fEMxkgrOiNmw7H7Opzwu4E7gBBaJNfQ9dFAgBPXg/exec",
  n8nConfirm:"https://n8n-production-8a42.up.railway.app/webhook/d4f51138-9611-4f93-9c51-e137fea97dcc",
  panelUrl:  "https://script.google.com/macros/s/AKfycbzhWqfMJVJiquBdOfOAqkgVFp9dHBphmpEk4CLd4woXSb4A9vIN_1iPq3PkjKKKHCusGQ/exec",
  pixelId:   "1249894010361489"
};
