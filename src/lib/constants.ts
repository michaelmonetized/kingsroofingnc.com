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

export const LOCATION_PAGES = [
  { slug: "asheville", name: "Asheville", county: "Buncombe County" },
  { slug: "cashiers", name: "Cashiers", county: "Jackson County" },
  { slug: "highlands", name: "Highlands", county: "Macon County" },
  { slug: "waynesville", name: "Waynesville", county: "Haywood County" },
] as const;
