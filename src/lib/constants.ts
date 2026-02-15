export const SITE_CONFIG = {
  name: "Seattle Sparkle Cleaning",
  tagline: "Professional House Cleaning Services in Seattle, WA",
  phone: "+923166763282",
  email: "info@seattlesparklecleaning.com",
  address: {
    street: "123 Clean Street",
    city: "Seattle",
    state: "WA",
    zip: "98101",
  },
  fullAddress: "123 Clean Street, Seattle, WA 98101",
  primaryLocation: "Seattle, Washington",
  serviceAreas: [
    "Seattle",
    "Bellevue",
    "Tacoma",
    "Kirkland",
    "Redmond",
    "Renton",
    "Federal Way",
    "Shoreline",
    "Kent",
    "Everett",
  ],
  social: {
    facebook: "#",
    instagram: "#",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "house-cleaning",
    title: "House Cleaning",
    shortDescription: "Regular maintenance cleaning to keep your Seattle home fresh.",
    description: "Our standard house cleaning service covers all essential areas for a spotless home.",
    href: "/services/house-cleaning",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    shortDescription: "Thorough deep cleans for move-ins, seasonal refresh, or special occasions.",
    description: "Comprehensive deep cleaning reaching every corner of your home.",
    href: "/services/deep-cleaning",
  },
  {
    slug: "move-out-cleaning",
    title: "Move-Out Cleaning",
    shortDescription: "Move-out cleaning to get your full deposit back in Seattle.",
    description: "End-of-lease cleaning designed to meet landlord and property manager standards.",
    href: "/services/move-out-cleaning",
  },
  {
    slug: "apartment-cleaning",
    title: "Apartment Cleaning",
    shortDescription: "Apartment cleaning tailored for Seattle renters and condos.",
    description: "Efficient apartment and condo cleaning for urban living spaces.",
    href: "/services/apartment-cleaning",
  },
] as const;

export const DEFAULT_OG_IMAGE = "/og-image.jpg";
