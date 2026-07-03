export interface Destination {
  id: string;
  name: string;
  category: "Wildlife" | "Landscapes" | "Beaches";
  description: string;
  longDescription: string;
  image: string;
  lodge: {
    name: string;
    image: string;
  }
}

export const destinations: Destination[] = [
  // Wildlife
  { 
    id: "maralal", 
    name: "Maralal Wildlife Sanctuary", 
    category: "Wildlife", 
    description: "Remote northern Kenya sanctuary perfect for off-the-beaten-path exploration.", 
    longDescription: "Set in the rugged north, Maralal Wildlife Sanctuary offers a truly wild safari experience. Away from the crowds, you'll encounter diverse wildlife including elephants, impalas, and leopards roaming freely across dramatic landscapes.",
    image: "/images/destinations/maralal.png",
    lodge: { name: "Maralal Safari Lodge", image: "/images/lodges/maralal.png" }
  },
  { 
    id: "mzima", 
    name: "Mzima Springs", 
    category: "Wildlife", 
    description: "Crystal-clear springs teeming with hippos and crocodiles.", 
    longDescription: "An oasis in Tsavo West National Park, Mzima Springs is a series of four natural springs. The crystal-clear water allows for incredible underwater viewing of hippos and crocodiles from a specialized submerged observation chamber.",
    image: "/images/destinations/mzima.png",
    lodge: { name: "Mzima Oasis Camp", image: "/images/lodges/mzima.png" }
  },
  { 
    id: "crescent", 
    name: "Crescent Island, Naivasha", 
    category: "Wildlife", 
    description: "Walk among giraffe and zebra on this peaceful lake island.", 
    longDescription: "Experience the rare thrill of walking on foot among wild herbivores. Located in Lake Naivasha, Crescent Island is a safe haven without predators, allowing you to get up close to giraffes, zebras, and wildebeests.",
    image: "/images/destinations/crescent.png",
    lodge: { name: "Crescent Lake Resort", image: "/images/lodges/crescent.png" }
  },
  { 
    id: "giraffe", 
    name: "Giraffe Centre", 
    category: "Wildlife", 
    description: "Hand-feed endangered Rothschild giraffes in Nairobi.", 
    longDescription: "A conservation success story, the Giraffe Centre in Nairobi protects the highly endangered Rothschild giraffe. Visitors can hand-feed these majestic creatures from a raised wooden structure, offering an unforgettable encounter.",
    image: "/images/destinations/giraffe.png",
    lodge: { name: "Giraffe Manor Heights", image: "/images/lodges/giraffe.png" }
  },
  { 
    id: "ol-pejeta", 
    name: "Ol Pejeta Conservancy", 
    category: "Wildlife", 
    description: "Home to the last northern white rhinos on earth.", 
    longDescription: "Located on the equator, Ol Pejeta is a trailblazer in conservation. It's the largest black rhino sanctuary in East Africa and home to the world's last two remaining northern white rhinos, offering profound wildlife experiences.",
    image: "/images/destinations/ol-pejeta.png",
    lodge: { name: "Ol Pejeta Tented Camp", image: "/images/lodges/ol-pejeta.png" }
  },

  // Landscapes
  { 
    id: "aberdare", 
    name: "Aberdare Forest Waterfall", 
    category: "Landscapes", 
    description: "Misty montane forests with spectacular hidden waterfalls.", 
    longDescription: "The Aberdare Range is a majestic volcanic mountain range characterized by steep forested ravines and open moorland. Trek through dense mist to discover stunning waterfalls plunging into cool forest pools.",
    image: "/images/destinations/aberdare.png",
    lodge: { name: "Aberdare Treehouse", image: "/images/lodges/aberdare.png" }
  },
  { 
    id: "mambrul", 
    name: "Mambrul Sand Dunes", 
    category: "Landscapes", 
    description: "Towering rust-red dunes in northern Kenya.", 
    longDescription: "A surreal landscape of towering rust-red sand dunes in northern Kenya. The dramatic contrast of the red sand against the blue sky offers incredible photography opportunities and a sense of vast isolation.",
    image: "/images/destinations/mambrul.png",
    lodge: { name: "Mambrul Desert Camp", image: "/images/lodges/mambrul.png" }
  },
  { 
    id: "chalbi", 
    name: "Chalbi Desert", 
    category: "Landscapes", 
    description: "Kenya's only true desert, a hauntingly beautiful expanse.", 
    longDescription: "The Chalbi Desert is a vast, bleached expanse of salt pans and cracked earth. This extreme, alien landscape provides a stark and striking beauty, occasionally dotted with nomadic camel trains.",
    image: "/images/destinations/chalbi.png",
    lodge: { name: "Chalbi Oasis Lodge", image: "/images/lodges/chalbi.png" }
  },
  { 
    id: "champagne", 
    name: "Champagne Ridge", 
    category: "Landscapes", 
    description: "Rolling highland vistas above the Great Rift Valley.", 
    longDescription: "Perched dramatically above the Great Rift Valley, Champagne Ridge offers some of the most breathtaking panoramic views in Kenya. The perfect place for serene sunsets and quiet contemplation.",
    image: "/images/destinations/champagne.png",
    lodge: { name: "Champagne Ridge Villa", image: "/images/lodges/champagne.png" }
  },
  { 
    id: "oleburu", 
    name: "Oleburu Cottage, Naivasha", 
    category: "Landscapes", 
    description: "A serene lakeside hideaway with sweeping Rift Valley views.", 
    longDescription: "Nestled high above Lake Naivasha, Oleburu offers a tranquil retreat. Wake up to sweeping views of the Rift Valley and spend days exploring the surrounding hills and bird-rich environments.",
    image: "/images/destinations/oleburu.png",
    lodge: { name: "Oleburu Highland Retreat", image: "/images/lodges/oleburu.png" }
  },

  // Beaches
  { 
    id: "chale", 
    name: "Chale Island Mangroves", 
    category: "Beaches", 
    description: "Pristine mangrove channels and coral reefs.", 
    longDescription: "A magical island sanctuary where dense mangrove forests meet pristine white sands. Explore the coral reefs, paddle through the calm mangrove channels, and enjoy unmatched coastal biodiversity.",
    image: "/images/destinations/chale.png",
    lodge: { name: "Chale Island Resort", image: "/images/lodges/chale.png" }
  },
  { 
    id: "watamu", 
    name: "Watamu Marine Park", 
    category: "Beaches", 
    description: "World-class snorkeling in inner pools and coral gardens.", 
    longDescription: "Renowned as one of the best snorkeling and diving spots in East Africa. The marine park protects vibrant coral gardens teeming with tropical fish, sea turtles, and occasional dolphin sightings.",
    image: "/images/destinations/watamu.png",
    lodge: { name: "Watamu Ocean Villas", image: "/images/lodges/watamu.png" }
  },
  { 
    id: "ukunda", 
    name: "Ukunda Tiwi Beach", 
    category: "Beaches", 
    description: "Uncrowded white-sand beach south of Mombasa.", 
    longDescription: "Escape the crowds at Tiwi Beach, a secluded stretch of powdery white sand. Protected by a barrier reef, the calm turquoise waters are perfect for swimming and relaxed beach days.",
    image: "/images/destinations/ukunda.png",
    lodge: { name: "Tiwi Beach Hideaway", image: "/images/lodges/ukunda.png" }
  },
  { 
    id: "lamu", 
    name: "Lamu Archipelago", 
    category: "Beaches", 
    description: "UNESCO heritage island with ancient dhow-sailing culture.", 
    longDescription: "Step back in time in the Lamu Archipelago. This UNESCO World Heritage site is rich with Swahili culture, featuring narrow winding streets, historic stone townhouses, and traditional dhow sailing across calm channels.",
    image: "/images/destinations/lamu.png",
    lodge: { name: "Lamu Heritage House", image: "/images/lodges/lamu.png" }
  },
  { 
    id: "bingo", 
    name: "Bingo Beach, Kisumu", 
    category: "Beaches", 
    description: "Vibrant lakeside beach on the shores of Lake Victoria.", 
    longDescription: "A unique freshwater beach experience on the shores of Lake Victoria. Bingo Beach offers a vibrant local atmosphere, stunning lake sunsets, and fresh tilapia enjoyed right on the shore.",
    image: "/images/destinations/bingo.png",
    lodge: { name: "Bingo Lake Resort", image: "/images/lodges/bingo.png" }
  }
];