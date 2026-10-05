const photo = (id: string, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const images = {
  hero: photo("photo-1600210492486-724fe5c67fb0", 2200),
  studio: photo("photo-1600607687939-ce8a6c25118c"),
  portrait: photo("photo-1580489944761-15a19d654956", 900),
  materials: photo("photo-1616486338812-3dadae4b4ace"),
  feature: photo("photo-1600607687920-4e2a09cf159d", 2200),
  before: photo("photo-1600607687920-4e2a09cf159d"),
  after: photo("photo-1600210492486-724fe5c67fb0"),
  social: [
    photo("photo-1600607687939-ce8a6c25118c", 700),
    photo("photo-1600607687920-4e2a09cf159d", 700),
    photo("photo-1600210492486-724fe5c67fb0", 700),
    photo("photo-1616486338812-3dadae4b4ace", 700),
  ],
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  area: string;
  image: string;
  excerpt: string;
};

export const projects: Project[] = [
  {
    slug: "olive-residence",
    title: "The Olive Residence",
    location: "Bengaluru",
    category: "Residential",
    year: "2026",
    area: "2,800 sq ft",
    image: photo("photo-1600210492486-724fe5c67fb0"),
    excerpt: "A measured study in natural light, warm oak and the softer shades of home.",
  },
  {
    slug: "terra-house",
    title: "Terra House",
    location: "Mysuru",
    category: "Villa",
    year: "2025",
    area: "3,400 sq ft",
    image: photo("photo-1600607687939-ce8a6c25118c"),
    excerpt: "Earth-led materials and quiet courtyards bring a generous villa closer to nature.",
  },
  {
    slug: "courtyard-home",
    title: "The Courtyard Home",
    location: "Mysuru",
    category: "Residential",
    year: "2025",
    area: "2,200 sq ft",
    image: photo("photo-1600607687920-4e2a09cf159d"),
    excerpt: "A family home shaped around a small garden and the rituals of everyday life.",
  },
  {
    slug: "casa-verde",
    title: "Casa Verde",
    location: "Bengaluru",
    category: "Apartment",
    year: "2024",
    area: "1,650 sq ft",
    image: photo("photo-1616486338812-3dadae4b4ace"),
    excerpt: "Thoughtful storage and a leafy palette make this compact apartment feel expansive.",
  },
  {
    slug: "walnut-study",
    title: "The Walnut Study",
    location: "Hyderabad",
    category: "Residential",
    year: "2024",
    area: "420 sq ft",
    image: photo("photo-1600566753086-00f18fb6b3ea"),
    excerpt: "A room for deep work, lined in walnut and softened by a wash of afternoon light.",
  },
  {
    slug: "coral-house",
    title: "Coral House",
    location: "Goa",
    category: "Holiday Home",
    year: "2023",
    area: "2,100 sq ft",
    image: photo("photo-1600607687644-c7171b42498f"),
    excerpt: "A relaxed coastal home with honest textures and room to slow down.",
  },
];

export const services = [
  ["Full-Service Interior Design", "A considered journey from the first conversation through the final, lived-in detail."],
  ["Interior Architecture", "Spatial planning, built forms and architectural details that make a home feel effortless."],
  ["Residential Design", "Personal spaces shaped by the people, patterns and collections within them."],
  ["Villa & Apartment Design", "Thoughtful design for every scale, from a city apartment to a generous family home."],
  ["Commercial & Hospitality", "Distinctive environments for independent brands, boutique stays and work."],
  ["Renovation & Transformation", "A fresh perspective on existing spaces, with care for what deserves to stay."],
  ["Furniture & Custom Joinery", "Made-to-measure pieces that bring enduring utility and character."],
  ["Styling & Art Curation", "The finishing layers: artwork, objects and the pieces that make a place yours."],
  ["Lighting Design", "A layered lighting plan that brings atmosphere to every hour of the day."],
  ["Material & Finish Selection", "A tactile, cohesive palette chosen for beauty, longevity and everyday use."],
];

export const testimonials = [
  {
    quote: "Our home feels considered in every corner, yet never precious. It is completely ours.",
    client: "A & R",
    project: "The Olive Residence",
    location: "Bengaluru",
  },
  {
    quote: "The team listened so carefully. They made the entire process feel calm and collaborative.",
    client: "Private Client",
    project: "Terra House",
    location: "Mysuru",
  },
  {
    quote: "The light, the materials, the way our family moves through the home. They understood it all.",
    client: "S & K",
    project: "Casa Verde",
    location: "Bengaluru",
  },
];

export const articles = [
  {
    slug: "calm-living-room",
    category: "Living",
    title: "How to create a calmer living room",
    date: "12 Sep 2026",
    time: "5 min read",
    image: photo("photo-1600210492486-724fe5c67fb0"),
    excerpt: "A softer room begins with less noise, more texture and a little attention to how you actually live.",
  },
  {
    slug: "layered-lighting",
    category: "Lighting",
    title: "The quiet art of layered lighting",
    date: "28 Aug 2026",
    time: "4 min read",
    image: photo("photo-1600607687939-ce8a6c25118c"),
    excerpt: "A thoughtful lighting plan gives a room a different character from morning to night.",
  },
  {
    slug: "natural-materials",
    category: "Materials",
    title: "Why natural materials feel like home",
    date: "04 Aug 2026",
    time: "6 min read",
    image: photo("photo-1616486338812-3dadae4b4ace"),
    excerpt: "Wood, stone and linen carry a quiet variation that makes a space feel collected over time.",
  },
  {
    slug: "small-apartments",
    category: "Architecture",
    title: "Small apartments, generous ideas",
    date: "17 Jul 2026",
    time: "5 min read",
    image: photo("photo-1600607687920-4e2a09cf159d"),
    excerpt: "A few practical principles for making the most of a compact city home.",
  },
  {
    slug: "choosing-green",
    category: "Materials",
    title: "Choosing a green that feels like yours",
    date: "30 Jun 2026",
    time: "3 min read",
    image: photo("photo-1600566753086-00f18fb6b3ea"),
    excerpt: "From dusty olive to deep forest, green shifts with its light, neighbours and finish.",
  },
  {
    slug: "interior-details",
    category: "Design",
    title: "The details that make a room feel finished",
    date: "08 Jun 2026",
    time: "4 min read",
    image: photo("photo-1600607687644-c7171b42498f"),
    excerpt: "The small decisions that bring a design together without calling attention to themselves.",
  },
];

export const faqs = [
  [
    "What type of projects do you take on?",
    "We work across residential interiors, apartments, villas, renovations and select boutique commercial and hospitality spaces.",
  ],
  [
    "What is your design process?",
    "We begin with a discovery conversation, then move through concept, design development, documentation, execution coordination and final styling.",
  ],
  [
    "How long does an interior design project take?",
    "It depends on the scale and scope. A full-home project typically spans several months, including design and execution. We will share a tailored timeline at the outset.",
  ],
  [
    "Do you work outside Bengaluru?",
    "Yes. Our studio is based in Bengaluru and we consider projects across India, including Mysuru, Hyderabad, Chennai, Mumbai, Pune and Goa.",
  ],
  [
    "Do you provide execution services?",
    "We offer design-led execution coordination and work with trusted contractors and craftspeople. The exact scope is agreed before work begins.",
  ],
  [
    "Can you work with an existing contractor?",
    "Absolutely. We can collaborate with your contractor and provide the design drawings and coordination agreed in our scope.",
  ],
  [
    "What is the minimum project budget?",
    "Budgets vary with the size, condition and ambition of a project. Share a little about your space and investment range so we can advise on fit.",
  ],
  [
    "Do you design furniture?",
    "Yes. We design custom furniture and joinery where it helps a space work better or gives it a more personal character.",
  ],
  [
    "Can you help with material selection?",
    "Material and finish selection is part of our full-service offering and can also be engaged as a focused consultation.",
  ],
  [
    "How do I start a project with Coral Interiors?",
    "Tell us about your home through our consultation form. We will be in touch to arrange an introductory conversation.",
  ],
];

export const materials = [
  { name: "Oak", tone: "#b48b61", note: "Warm, fine-grained and quietly enduring." },
  { name: "Walnut", tone: "#654838", note: "Deep brown with a natural, expressive grain." },
  { name: "Linen", tone: "#e1d7c8", note: "An easy softness that grows more beautiful with use." },
  { name: "Stone", tone: "#aca79b", note: "A grounded surface, shaped by time and touch." },
  { name: "Brass", tone: "#b79a62", note: "A gentle warmth that patinates with the years." },
  { name: "Terracotta", tone: "#b9684d", note: "Earth, warmth and a hint of Mediterranean sun." },
];
