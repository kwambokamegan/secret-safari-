import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { destinations } from "@/data/destinations";

const CATEGORIES = ["All", "Wildlife", "Landscapes", "Beaches"];

export default function Discover() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesSearch = dest.name.toLowerCase().includes(search.toLowerCase()) || 
                            dest.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || dest.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen pt-28 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-serif font-bold mb-6">Discover Kenya</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find your perfect escape. Filter by category or search for specific destinations.
          </p>

          <div className="relative mb-8 max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search destinations (e.g. Wildlife, Coastal, Naivasha)..." 
              className="pl-12 h-14 text-lg bg-white dark:bg-card shadow-sm rounded-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full px-6"
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDestinations.map((dest, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              key={dest.id}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow border-0 bg-card">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/images/hero/hero-1.png"; }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur font-semibold">
                      {dest.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl font-bold mb-3">{dest.name}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{dest.description}</p>
                  <Button asChild className="w-full mt-auto" variant="outline">
                    <Link href={`/destination/${dest.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredDestinations.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-xl">No destinations found matching your search.</p>
          </div>
        )}
      </div>
    </main>
  );
}
