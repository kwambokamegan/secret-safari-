import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { destinations } from "@/data/destinations";

const heroImages = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
  "/images/hero/hero-5.png"
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const featuredDestinations = destinations.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Kenyan Safari"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Your Secret Safari Awaits
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto"
          >
            Discover the untold stories of Kenya. Off the beaten path, into the wild.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/discover">Discover Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Beyond the Ordinary</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Secret Safari is born from a desire to show the world the Kenya we know and love. A Kenya that exists far from the crowded minivans and tourist traps.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We curate experiences for the curious traveler—those who want to feel the pulse of the savannah, breathe the mist of high-altitude forests, and sail the ancient Swahili coast. Every destination we offer is handpicked for its authenticity, beauty, and wild soul.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-square md:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src="/images/about/about-1.png" alt="Off the beaten path" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Featured Escapes</h2>
            <p className="text-muted-foreground text-lg">Glimpses of what awaits in the wild.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/destination/${dest.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 bg-background">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={dest.image} 
                        alt={dest.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.currentTarget.src = "/images/hero/hero-1.png"; }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{dest.category}</div>
                      <h3 className="font-serif text-xl font-bold mb-3">{dest.name}</h3>
                      <p className="text-muted-foreground line-clamp-2">{dest.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/discover">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
