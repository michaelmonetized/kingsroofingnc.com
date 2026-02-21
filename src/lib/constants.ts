export const COMPANY = {
  name: "Kings Roofing, Inc.",
  altName: "King's Haywood Construction",
  phone: "828-246-2193",
  phoneAlt: "828-279-6896",
  email: "kingshaywood@gmail.com",
  address: "Western North Carolina",
} as const;

export const SERVICE_AREAS = [
  "Asheville",
  "Candler",
  "Canton",
  "Cashiers",
  "Clyde",
  "Highlands",
  "Lake Junaluska",
  "Maggie Valley",
  "Sylva",
  "Waynesville",
  "Weaverville",
] as const;

export const SERVICES = {
  residential: [
    "New Roof Installation",
    "Roof Replacement",
    "Roof Repair",
    "Emergency Repairs",
    "Storm Damage Repair",
    "Roof Inspections",
    "Preventative Maintenance",
    "Gutters & Siding",
  ],
  commercial: [
    "Commercial Roof Installation",
    "Flat Roof Systems",
    "Re-Shingling",
    "Commercial Repairs",
    "Roof Maintenance Programs",
  ],
  repairs: [
    "Emergency Repairs",
    "Roof, Chimney & Skylight Leaks",
    "Wind, Hail & Tree Limb Damage",
    "Flashing Repair",
    "Roof Air Vents & Ridge Caps",
    "Roof Drains & Pipe Boot Replacement",
    "Ice Dams & Water Backup",
    "Roof Inspections",
    "Preventative Maintenance",
    "Gutters & Siding",
  ],
} as const;

export const MATERIALS = [
  "GAF Timberline HD Shingles",
  "Best Buy Metal Roofing",
  "CertainTeed Products",
  "GAF Products",
  "Asphalt Shingles",
  "Wood Shingles",
  "Slate Roofing",
  "Shakes",
  "Metal Roofing",
  "Rubber Roofing",
] as const;

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Residential", 
    href: "/residential",
    children: [
      { label: "Asheville", href: "/residential/asheville" },
      { label: "Cashiers", href: "/residential/cashiers" },
      { label: "Highlands", href: "/residential/highlands" },
      { label: "Waynesville", href: "/residential/waynesville" },
    ]
  },
  { label: "Commercial", href: "/commercial" },
  { 
    label: "Roofing Color Pickers", 
    href: "/roofing-color-pickers",
    children: [
      { label: "Metal Roofing", href: "/roofing-color-pickers/metal-roofing" },
      { label: "Shingles", href: "/roofing-color-pickers/shingles" },
    ]
  },
  { 
    label: "Metal Structures", 
    href: "/metal-structures",
    children: [
      { 
        label: "Metal Carport Kits", 
        href: "/metal-structures/metal-carport-kits",
        children: [
          { label: "Regular Style Metal Carport", href: "/regular-style-metal-carports" },
          { label: "Boxed Eave Style Metal Carport", href: "/boxed-eave-style-metal-carport" },
          { label: "Vertical Roof Style Metal Carport", href: "/vertical-roof-style-metal-carport" },
        ]
      },
      { 
        label: "Pole Truss Kits", 
        href: "/metal-structures/pole-truss-kits",
        children: [
          { label: "Stand Roof Kit", href: "/pole-truss-stand-roof-kit" },
          { label: "Enclosed Kits", href: "/pole-truss-enclosed-kits" },
        ]
      },
    ]
  },
  { label: "Contact", href: "/contact" },
] as const;


export const LOCATIONS = {
  asheville: {
    name: "Asheville",
    county: "Buncombe County",
    title: "Asheville Roofing Contractor | Kings Roofing, inc.",
    headline: "Asheville Roofing Contractor",
    intro: "Our roofing contractors are located in the beautiful town of Asheville, NC. Allow the locally owned Kings Roofing the opportunity to take on your next project!",
    body: "Whether your roof just needs a minor repair or needs to be replaced altogether, our Asheville team of quality roofing contractors can help. New construction and re-roofing are our areas of expertise. Let our roofing contractors put years of experience to work for you at the most reasonable prices around.",
    cta: `For a Free Estimate, Call us at ${COMPANY.phoneAlt} or fill out the form here.`,
  },
  waynesville: {
    name: "Waynesville",
    county: "Haywood County",
    title: "Waynesville Roofing Contractors | Kings Roofing, inc.",
    headline: "Waynesville Roofing Contractors",
    intro: "Waynesville, NC is our home base. We have been replacing roofs in Haywood County for over a decade. Our roofing contractors are located in the beautiful town of Waynesville, NC. Allow the locally owned Kings Roofing the opportunity to take on your next project!",
    body: "Whether your roof just needs a minor repair or needs to be replaced altogether, our team of quality Waynesville roofing contractors can help. New construction and re-roofing are our areas of expertise. Let our roofing contractors put years of experience to work for you at the most reasonable prices around.",
    cta: `For a Free Estimate, Call us at ${COMPANY.phoneAlt} or fill out the form here.`,
  },
  highlands: {
    name: "Highlands",
    county: "Macon County",
    title: "Highlands Roofing Contractor | Kings Roofing, inc.",
    headline: "Highlands Roofing Contractor",
    intro: "Highlands is one of the most beautiful areas of Western North Carolina, which is why we love serving the beautiful people that live here. Our Highlands Roofing Contractors are among the most qualified around.",
    body: "Whether your roof just needs a minor repair or needs to be replaced altogether, our Highlands team of quality roofing contractors can help. New construction and re-roofing are our areas of expertise. Let our roofing contractors put years of experience to work for you at the most reasonable prices around.",
    cta: `For a Free Estimate, Call us at ${COMPANY.phoneAlt} or fill out the form here.`,
  },
  cashiers: {
    name: "Cashiers",
    county: "Jackson County",
    title: "Cashiers Roofing Contractors | Kings Roofing, inc.",
    headline: "Cashiers Roofing Contractors",
    intro: "Cashiers is one of our favorite towns in WNC, and we try to serve her wonderful residents as often as possible. Allow the locally owned Kings Roofing the opportunity to take on your next project!",
    body: "Whether your roof just needs a minor repair or needs to be replaced altogether, our team of quality Highlands roofing contractors can help. New construction and re-roofing are our areas of expertise. Let our roofing contractors put years of experience to work for you at the most reasonable prices around.",
    cta: `For a Free Estimate, Call us at ${COMPANY.phoneAlt} or fill out the form here.`,
  },
} as const;

export type LocationKey = keyof typeof LOCATIONS;

/** @deprecated Use LOCATIONS directly */
export const LOCATION_PAGES = Object.entries(LOCATIONS).map(([slug, data]) => ({
  slug,
  name: data.name,
  county: data.county,
})) as { slug: string; name: string; county: string }[];
