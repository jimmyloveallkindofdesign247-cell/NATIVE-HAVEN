import { GarmentItem, LookbookItem, FabricHeritage } from '../types/fashion';

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    title: 'The Royal Renaissance',
    subtitle: 'Where Ancestral Royalty Meets Contemporary Runway Silhouettes',
    category: 'Traditional Couture & Modern Haute Fashion',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85',
    tag: 'Autumn/Winter 2026 Collection',
    accentText: 'Aso-Oke • Kente • Raw Silk',
  },
  {
    id: 'slide-2',
    title: 'Modern Afro-Chic Fusion',
    subtitle: 'Crisp Tailoring, Bold Ankara Statements & Urban Poise',
    category: 'Ready-To-Wear & Bespoke Tailoring',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=85',
    tag: 'Global Runway Feature',
    accentText: 'Wax Print • Wool Crepe • Structured Blazers',
  },
  {
    id: 'slide-3',
    title: 'Bespoke Ceremonial Elegance',
    subtitle: 'Hand-Embroidered Agbada, Bridal Masterpieces & Made-to-Measure',
    category: 'Master Tailor Exclusives',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85',
    tag: 'Bespoke Atelier',
    accentText: 'Gold Thread • Bazin Riche • Handloom Damask',
  },
];

export const GARMENT_COLLECTIONS: GarmentItem[] = [
  // Traditional Couture
  {
    id: 'trad-1',
    title: 'The Imperial Agbada Three-Piece Set',
    subtitle: 'Regal Yoruba royal ceremonial robe with gold chain embroidery',
    category: 'traditional',
    price: 360,
    currency: 'USD',
    badge: 'Artisan Masterpiece',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    ],
    description:
      'A commanding three-piece ceremonial ensemble including the flowing grand Agbada robe, tailored Buba tunic, and Sokoto trousers. Hand-embroidered with metallic gold threading on heavyweight emerald damask.',
    fabricType: 'Pure Forest Green Damask & Aso-Oke Handloom',
    culturalOrigin: 'Nigeria (Yoruba Heritage)',
    details: [
      'Authentic geometric chest embroidery (Aso-Ebi style)',
      'Breathable inner cotton lining for warm climates',
      'Includes matching embroidered Fila cap',
      'Handcrafted by master artisans in 42 hours',
    ],
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom Made-to-Measure'],
    rating: 4.95,
    reviewsCount: 48,
    featured: true,
  },
  {
    id: 'trad-2',
    title: 'Queen Yaa Kente Corseted Gown',
    subtitle: 'Floor-sweeping regal gown woven in Bonwire royal looms',
    category: 'traditional',
    price: 420,
    currency: 'USD',
    badge: 'Heritage Royalty',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
    ],
    description:
      'Woven strip by strip by master weavers in Bonwire, Ghana. The golden yellow and deep forest green weave reflects prosperity, spiritual purity, and ancestral grace. Fitted with an internal boned corset and structured mermaid train.',
    fabricType: 'Authentic 100% Cotton & Silk Bonwire Kente',
    culturalOrigin: 'Ghana (Ashanti Kingdom)',
    details: [
      'Authentic "Adweneasa" full-pattern weaving technique',
      'Concealed back zip with traditional tie-cord finish',
      'Structured boned bodice with soft microfiber lining',
      'Made-to-order length customization included',
    ],
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Made-to-Measure'],
    rating: 5.0,
    reviewsCount: 36,
    featured: true,
  },
  {
    id: 'trad-3',
    title: 'The Dakar Grand Boubou & Stole',
    subtitle: 'Flowing ceremonial kaftan with intricate lattice open-work',
    category: 'traditional',
    price: 295,
    currency: 'USD',
    badge: 'Timeless Classic',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    ],
    description:
      'Celebrated across West Africa for its effortless grandeur. Crafted from crisp glazed Bazin Riche fabric with custom open-work lattice neck embroidery and a fluid, sweeping drape that moves like royalty.',
    fabricType: 'Glazed Bazin Riche & Fine Cotton',
    culturalOrigin: 'Senegal & Mali',
    details: [
      'Polished cotton sheen with crisp architectural drape',
      'Wide billow sleeve with embroidered cuff',
      'Includes matching headwrap / shoulder stole',
      'Dry clean recommended',
    ],
    availableSizes: ['Free Size (Flowing Cut)', 'Custom Made-to-Measure'],
    rating: 4.88,
    reviewsCount: 29,
  },

  // Modern Fusion
  {
    id: 'mod-1',
    title: 'Savannah Sculpted Blazer & Wide-Leg Trouser',
    subtitle: 'Sharp tailored boardroom suit with vibrant Ankara color-blocking',
    category: 'modern',
    price: 285,
    currency: 'USD',
    badge: 'Runway Bestseller',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    ],
    description:
      'Sharp Italian wool crepe tailored into a high-stance double-breasted power blazer, accentuated with authentic hand-waxed orange and emerald botanical print panels along the lapels and cuffs.',
    fabricType: 'Dutch Wax Cotton & Virgin Wool Crepe',
    culturalOrigin: 'Contemporary Pan-African',
    details: [
      'Peak lapel with contrasting Ankara underside',
      'High-waisted trousers with deep side pockets',
      'Handmade horn buttons with brass inlay',
      'Full satin interior lining',
    ],
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.96,
    reviewsCount: 64,
    featured: true,
  },
  {
    id: 'mod-2',
    title: 'Kigali Asymmetric Midi Wrap Dress',
    subtitle: 'Modern draped cocktail dress in vibrant terracotta & ochre prints',
    category: 'modern',
    price: 195,
    currency: 'USD',
    badge: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
    ],
    description:
      'An alluring silhouette balancing sharp asymmetric cuts with fluid movement. Features a sculpted sash belt, one flutter sleeve, and a contoured slit designed for weddings, galas, and high-fashion soirees.',
    fabricType: 'Premium 100% Breathable African Wax Print',
    culturalOrigin: 'Rwanda & Ivory Coast',
    details: [
      'Adjustable wrap tie for personal waist sculpting',
      'Reinforced seams to retain vibrant print alignment',
      'Hidden pockets seamlessly built into side seams',
      'Pre-washed and colorfast treated',
    ],
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviewsCount: 31,
    featured: true,
  },
  {
    id: 'mod-3',
    title: 'The Lagosian Urban Dashiki Trench',
    subtitle: 'Structured unisex trench coat with geometric mudcloth accents',
    category: 'modern',
    price: 245,
    currency: 'USD',
    badge: 'Editorial Choice',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85',
    ],
    description:
      'Reinventing the traditional Dashiki into a functional modern street-luxe trench coat. Features storm flaps lined with organic Bogolanfini (mudcloth) patterns and military storm cuffs.',
    fabricType: 'Heavy Water-Resistant Twill & Hand-Dyed Bogolan',
    culturalOrigin: 'Mali & Nigeria',
    details: [
      'Water-repellent finish for transitional weather',
      'Detachable self-fabric belt with brushed bronze buckle',
      'Deep dual welt pockets and interior passport pocket',
      'Unisex tailored profile',
    ],
    availableSizes: ['S', 'M', 'L', 'XL'],
    rating: 4.87,
    reviewsCount: 22,
  },

  // Bespoke
  {
    id: 'bespoke-1',
    title: 'Bespoke Royal Alari Aso-Oke Ensemble',
    subtitle: 'One-of-a-kind handwoven magenta & gold loom celebration set',
    category: 'bespoke',
    price: 490,
    currency: 'USD',
    badge: '100% Made-To-Measure',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=85',
    ],
    description:
      'Crafted exclusively for milestone weddings, chieftaincy celebrations, and red carpet galas. Woven on narrow Yoruba looms using heritage "Alari" rich red/crimson and raw silk threads.',
    fabricType: 'Pure Handwoven Aso-Oke & Metallic Lurex',
    culturalOrigin: 'Yoruba Royal Courts',
    details: [
      'Includes 3 personalized virtual fitting consultations',
      'Customized monogramming and family crest embroidery',
      'Complete set: Buba, Iro (wrapper), Gele (head-tie), and Ipele',
      'Delivered in luxury velvet cedar keepsake box',
    ],
    availableSizes: ['Custom Made-to-Measure Only'],
    rating: 5.0,
    reviewsCount: 19,
    featured: true,
  },
  {
    id: 'bespoke-2',
    title: 'Artisanal Tailored Mandarin Tuxedo',
    subtitle: 'African jacquard dinner jacket with velvet shawl lapel',
    category: 'bespoke',
    price: 380,
    currency: 'USD',
    badge: 'Made-To-Order',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    ],
    description:
      'The definitive modern black-tie option. Subtle tone-on-tone African brocade patterns woven into midnight black cloth, balanced by an emerald velvet shawl collar and horn buttons.',
    fabricType: 'High-Twist Wool Jacquard & Silk Velvet',
    culturalOrigin: 'African Modern Savile Row Fusion',
    details: [
      'Full canvas construction that molds to the client silhouette',
      'Hand-sewn armholes for maximum range of movement',
      'Bespoke trouser with side tab adjusters (no belt loops)',
      '14-day turnaround with express WhatsApp coordination',
    ],
    availableSizes: ['Custom Made-to-Measure Only'],
    rating: 4.98,
    reviewsCount: 27,
  },

  // Accessories
  {
    id: 'acc-1',
    title: 'Hand-Beaded Coral & Brass Chieftain Collar',
    subtitle: 'Traditional Edo royal wedding beads handcrafted with brass accents',
    category: 'accessories',
    price: 145,
    currency: 'USD',
    badge: 'Handcrafted',
    image: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=1200&q=85',
    ],
    description:
      'Inspired by the timeless kingdom of Benin. Layers of authentic cylindrical glass-coral beads crowned with lost-wax cast brass emblems, carrying blessings of health and nobility.',
    fabricType: 'Polished Coral Stone, Brass & Leather Cord',
    culturalOrigin: 'Nigeria (Edo Kingdom)',
    details: [
      'Adjustable toggle clasp in antique brass',
      'Double strand construction with heavy-duty thread',
      'Includes travel storage pouch and polishing cloth',
    ],
    availableSizes: ['One Size (Adjustable)'],
    rating: 4.92,
    reviewsCount: 40,
  },
  {
    id: 'acc-2',
    title: 'Sculpted Gele Headpiece (Auto-Gele)',
    subtitle: 'Pre-pleated luxury metallic Aso-Oke headwrap with velcro fastening',
    category: 'accessories',
    price: 95,
    currency: 'USD',
    badge: 'Effortless Wear',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85',
    ],
    description:
      'Enjoy the majestic height and architectural folds of a traditional Nigerian Gele without hours of manual tying. Pre-shaped by master Gele stylists with adjustable hidden straps for a secure 30-second fit.',
    fabricType: 'Heavyweight Metallic Aso-Oke',
    culturalOrigin: 'Nigeria',
    details: [
      'Fits head circumferences 52cm – 60cm',
      'Maintains its crisp fan shape through multiple wears',
      'Embedded sweatband for all-day comfort',
    ],
    availableSizes: ['One Size (Velcro Adjustable)'],
    rating: 4.94,
    reviewsCount: 52,
  },
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'look-1',
    title: 'The Ancestral Crown',
    subtitle: 'Lagos Fashion Week Runway Spotlight',
    collectionSeason: 'Autumn / Winter 2026',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85',
    category: 'runway',
    description:
      'Highlighting the grandeur of three-tier handwoven Aso-Oke robes paired with sculpted gold embroidery.',
    designerNotes: 'Conceived to evoke the stately dignities of pre-colonial royal African dynasties in modern metropolitan settings.',
  },
  {
    id: 'look-2',
    title: 'Echoes of the Gold Coast',
    subtitle: 'Bonwire Kente Editorial Series',
    collectionSeason: 'Resort 2026',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
    category: 'editorial',
    description:
      'Geometric rhythm of yellow, green, and black threads, translating centuries-old proverbs into high-fashion tailoring.',
    designerNotes: 'Each geometric band is a visual manuscript recording proverbs of courage, community, and royalty.',
  },
  {
    id: 'look-3',
    title: 'Modern Metro Elegance',
    subtitle: 'Urban African Fusion Capsule',
    collectionSeason: 'Spring 2026',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
    category: 'casual-chic',
    description:
      'Sharp silhouettes, vibrant color blocking, and clean lapels designed for the global African trendsetter.',
    designerNotes: 'Tailored for the contemporary cosmopolitan woman who commands the boardroom and owns the evening.',
  },
  {
    id: 'look-4',
    title: 'Sacred Vows & Regal Unions',
    subtitle: 'Bespoke Traditional Wedding Showcase',
    collectionSeason: 'Signature Bespoke',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
    category: 'celebration',
    description:
      'Coordinated bride and groom sets in matching handwoven cloths, custom embroidered with family totems.',
    designerNotes: 'A seamless celebration of love, heritage, and timeless luxury tailored to heirloom perfection.',
  },
];

export const FABRIC_HERITAGE_LIST: FabricHeritage[] = [
  {
    id: 'kente',
    name: 'Bonwire Kente Cloth',
    aka: 'Nwentoma ("Woven Cloth")',
    origin: 'Ashanti Kingdom, Ghana',
    colorSymbolism: 'Gold = Royalty & Wealth • Green = Renewal & Growth • Black = Spiritual Energy & Maturation',
    history:
      'Legend attributes Kente to two brothers from Bonwire who studied a spider weaving its intricate web. Worn traditionally during state ceremonies and sacred rites, every geometric motif encapsulates Akan proverbs and historical records.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    patterns: ['Adweneasa (Exhausted My Skill)', 'Babadua (Strength in Unity)', 'Fa-Hia-Kotwere-Amansan (Lean on the Nation)'],
  },
  {
    id: 'aso-oke',
    name: 'Aso-Oke Handloom',
    aka: 'Top Cloth ("Aso Ilu Oke")',
    origin: 'Yoruba Land, Nigeria',
    colorSymbolism: 'Alari = Rich Crimson/Wealth • Sanyan = Wild Raw Silk/Elegance • Etu = Deep Indigo/Peace',
    history:
      'Woven by master weavers on narrow horizontal looms. Aso-Oke is the quintessential coronation and wedding garment of the Yoruba people, prized for its heavy textured weight and metallic thread inlays.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    patterns: ['Jawu (Perforated open-lace)', 'Alari (Crimson majesty)', 'Opa (Striped prestige)'],
  },
  {
    id: 'ankara',
    name: 'Ankara / African Wax Print',
    aka: 'Real Dutch Wax & Real Batik',
    origin: 'West & Central Africa (Pan-African)',
    colorSymbolism: 'Bold Orange = Warmth & Sun • Emerald = Fertility & Abundance • Terracotta = Earth & Grounding',
    history:
      'With a global history spanning trade routes, African women transformed wax print textiles into an expressive language where patterns were given names like "Speed Bird" or "Rolls Royce" to communicate status and sentiment.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    patterns: ['Speed Bird (Change & Movement)', 'Record Disc (Celebration of Music)', 'Eye of My Rival (Bold Assertiveness)'],
  },
  {
    id: 'bogolan',
    name: 'Bogolanfini (Mudcloth)',
    aka: 'Bògòlanfini ("Mud Cloth")',
    origin: 'Bamana People, Mali',
    colorSymbolism: 'Charcoal/Black = River Mud Protection • Cream/Ochre = Fermented Herbs & Sun',
    history:
      'Handcrafted using centuries-old organic fermentation. Cotton strips are soaked in leaves and painted with mineral-rich river mud to create bold geometric calligraphy that historically shielded hunters and women during rites of passage.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    patterns: ['Twisted Bones (Resilience)', 'Crocodile Spines (Shielding from Harm)', 'Fish Bones (Prosperity)'],
  },
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Chief Babatunde & Folashade O.',
    role: 'Traditional Wedding Couple, Atlanta / Lagos',
    text: 'NATIVE HAVEN crafted our bespoke wedding Aso-Oke attire from across the Atlantic. The video fitting consultations and WhatsApp coordination were seamless. When the garments arrived, the gold embroidery and fit took everyone’s breath away on our big day!',
    rating: 5,
    event: 'Royal Yoruba Wedding',
  },
  {
    id: 'test-2',
    name: 'Dr. Kwame Mensah',
    role: 'Diplomatic Envoy & Collector, London',
    text: 'Finding authentic Kente that balances traditional weight with contemporary sharp tailoring is rare. NATIVE HAVEN is the gold standard. Their Sovereign Agbada and modern blazers receive compliments in every state hall.',
    rating: 5,
    event: 'State Gala & Honors',
  },
  {
    id: 'test-3',
    name: 'Zara Nicole Nwachukwu',
    role: 'Creative Director & Fashion Curator, New York',
    text: 'The Savannah Sculpted Blazer is a staple in my fashion week wardrobe. It feels bold, culturally authentic, yet so sleek and international. The customer service over WhatsApp was remarkably fast and warm.',
    rating: 5,
    event: 'Fashion Week Attendee',
  },
];

export const BRAND_STATS = [
  { label: 'Authentic Heritage Fabrics', value: '100%' },
  { label: 'Bespoke Ensembles Tailored', value: '5,200+' },
  { label: 'Countries Shipped Worldwide', value: '38+' },
  { label: 'Master Weavers & Tailors', value: '45+' },
];

export const FAQ_LIST = [
  {
    question: 'How do I place an order or customize an outfit?',
    answer:
      'You can select any collection piece on this website and click "Order on WhatsApp", which connects you directly with our styling team with your chosen garment and sizing pre-filled. For bespoke or made-to-measure orders, you can use our Bespoke Fitting form to book a virtual measurement consultation.',
  },
  {
    question: 'How does international shipping work?',
    answer:
      'We ship worldwide via DHL Express and FedEx with end-to-end tracking. Ready-to-wear items dispatch within 2-3 business days, while bespoke and made-to-measure pieces require 10-18 business days of artisan tailoring before express dispatch.',
  },
  {
    question: 'How do you ensure perfect measurements for bespoke orders remotely?',
    answer:
      'Our senior stylists conduct 1-on-1 WhatsApp video measurement sessions where we guide you step-by-step through standard measuring tape points. We also accept standard US, UK, and European sizing charts with custom height adjustments.',
  },
  {
    question: 'Are all your traditional fabrics authentic?',
    answer:
      'Yes, absolutely. We source our Kente directly from artisan family looms in Bonwire, Ghana; our Aso-Oke from traditional weavers in Iseyin and Oyo, Nigeria; and our Bazin Riche and Bogolan directly from certified Malian and Senegalese dye masters.',
  },
];
