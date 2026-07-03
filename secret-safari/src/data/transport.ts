export interface TransportOption {
  id: string;
  name: string;
  type: "Safari Vehicle" | "Personal Luxury" | "Boat" | "Yacht";
  price: number;
  unit: "day" | "trip";
  capacity: number;
  features: string[];
  image: string;
}

export const transportOptions: TransportOption[] = [
  // Safari Vehicles
  {
    id: "lc-v8",
    name: "Toyota Land Cruiser V8",
    type: "Safari Vehicle",
    price: 8000,
    unit: "day",
    capacity: 7,
    features: ["Auto", "Diesel", "All-terrain"],
    image: "/images/transport/lc-v8.png"
  },
  {
    id: "prado",
    name: "Toyota Prado",
    type: "Safari Vehicle",
    price: 6500,
    unit: "day",
    capacity: 7,
    features: ["Auto", "Diesel", "All-terrain"],
    image: "/images/transport/prado.png"
  },
  {
    id: "safari-van",
    name: "Safari Van",
    type: "Safari Vehicle",
    price: 5000,
    unit: "day",
    capacity: 12,
    features: ["Manual", "Diesel", "Road"],
    image: "/images/transport/safari-van.png"
  },
  {
    id: "defender",
    name: "Land Rover Defender",
    type: "Safari Vehicle",
    price: 9000,
    unit: "day",
    capacity: 5,
    features: ["Manual", "Diesel", "All-terrain"],
    image: "/images/transport/defender.png"
  },

  // Personal Luxury Cars
  {
    id: "e-class",
    name: "Mercedes E-Class Wagon",
    type: "Personal Luxury",
    price: 12000,
    unit: "day",
    capacity: 5,
    features: ["Auto", "Petrol", "Road"],
    image: "/images/transport/e-class.png"
  },
  {
    id: "v8-luxury",
    name: "Toyota V8 Land Cruiser (Luxury)",
    type: "Personal Luxury",
    price: 10000,
    unit: "day",
    capacity: 7,
    features: ["Auto", "Petrol", "Road"],
    image: "/images/transport/v8-luxury.png"
  },
  {
    id: "rr-sport",
    name: "Range Rover Sport",
    type: "Personal Luxury",
    price: 15000,
    unit: "day",
    capacity: 5,
    features: ["Auto", "Petrol", "Road"],
    image: "/images/transport/rr-sport.png"
  },

  // Boats
  {
    id: "speed-boat",
    name: "Speed Boat",
    type: "Boat",
    price: 7000,
    unit: "trip",
    capacity: 8,
    features: ["Fast", "Coastal"],
    image: "/images/transport/speed-boat.png"
  },
  {
    id: "fishing-boat",
    name: "Fishing Boat",
    type: "Boat",
    price: 4000,
    unit: "trip",
    capacity: 6,
    features: ["Fishing Gear", "Guided"],
    image: "/images/transport/fishing-boat.png"
  },
  {
    id: "glass-bottom",
    name: "Glass-Bottom Boat",
    type: "Boat",
    price: 5000,
    unit: "trip",
    capacity: 10,
    features: ["Marine Viewing", "Slow Pace"],
    image: "/images/transport/glass-bottom.png"
  },

  // Yachts
  {
    id: "private-yacht",
    name: "Private Yacht Cruise",
    type: "Yacht",
    price: 50000,
    unit: "day",
    capacity: 12,
    features: ["Luxury", "Catered", "Crew"],
    image: "/images/transport/private-yacht.png"
  },
  {
    id: "sunster-cruise",
    name: "Sunster Cruise",
    type: "Yacht",
    price: 35000,
    unit: "day",
    capacity: 20,
    features: ["Party Deck", "Music", "Crew"],
    image: "/images/transport/sunster-cruise.png"
  }
];