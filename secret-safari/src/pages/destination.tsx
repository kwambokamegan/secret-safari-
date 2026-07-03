import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { destinations } from "@/data/destinations";

export default function Destination() {
  const [, params] = useRoute("/destination/:id");
  const destination = destinations.find(d => d.id === params?.id);

  if (!destination) {
    return <div className="min-h-screen pt-32 text-center">Destination not found.</div>;
  }

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "/images/hero/hero-1.png"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
          <div className="container mx-auto">
            <Link href="/discover" className="inline-flex items-center text-sm font-medium hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Discover
            </Link>
            <div className="flex items-center gap-3 text-primary-foreground/80 mb-4 font-semibold tracking-wider uppercase text-sm">
              <MapPin size={18} />
              <span>{destination.category} • Kenya</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">{destination.name}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="lg:col-span-2 prose prose-lg dark:prose-invert max-w-none font-serif text-lg leading-relaxed"
          >
            <p className="text-2xl text-foreground font-medium mb-8 leading-snug">
              {destination.description}
            </p>
            <p className="text-muted-foreground whitespace-pre-line">
              {destination.longDescription}
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold mb-2">Book this escape</h3>
              <p className="text-muted-foreground mb-8">Secure your accommodation at {destination.lodge.name}.</p>
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <img 
                  src={destination.lodge.image} 
                  alt={destination.lodge.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "/images/hero/hero-5.png"; }}
                />
              </div>
              <Button size="lg" className="w-full text-lg h-14" asChild>
                <Link href={`/booking?destination=${destination.id}`}>Book Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
