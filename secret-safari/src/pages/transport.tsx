import { useState } from "react";
import { motion } from "framer-motion";
import { Car, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { transportOptions, TransportOption } from "@/data/transport";

export default function Transport() {
  const { toast } = useToast();
  const [selectedTransport, setSelectedTransport] = useState<TransportOption | null>(null);
  const [includeDriver, setIncludeDriver] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const sections = ["Safari Vehicle", "Personal Luxury", "Boat", "Yacht"] as const;

  const handleBook = () => {
    setBookingSuccess(true);
    toast({
      title: "Transport Confirmed!",
      description: `Your ${selectedTransport?.name} has been booked successfully.`,
    });
    setTimeout(() => {
      setSelectedTransport(null);
      setBookingSuccess(false);
      setIncludeDriver(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-serif font-bold mb-6">Transport & Fleet</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Rent safari vehicles, luxury SUVs, boats and yachts — with or without a professional guide. All transport options available from any booked destination.
          </p>
        </motion.div>

        {sections.map((section, idx) => {
          const items = transportOptions.filter(t => t.type === section);
          if (items.length === 0) return null;
          
          return (
            <div key={section} className="mb-20">
              <h2 className="text-3xl font-serif font-bold mb-8 pb-4 border-b border-border/50">{section}s</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow border-0 bg-card">
                      <div className="aspect-[4/3] bg-muted relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "/images/hero/hero-2.png"; }}
                        />
                      </div>
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <h3 className="font-serif text-xl font-bold mb-2">{item.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1"><Users size={16}/> {item.capacity}</div>
                          <div className="flex gap-2">
                            {item.features.map(f => (
                              <span key={f} className="px-2 py-1 bg-muted rounded-full text-xs">{f}</span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-auto pt-4 flex items-center justify-between border-t">
                          <span className="font-bold text-lg text-primary">KSh {item.price.toLocaleString()} <span className="text-sm text-muted-foreground font-normal">/{item.unit}</span></span>
                          <Button onClick={() => setSelectedTransport(item)}>Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={!!selectedTransport} onOpenChange={(open) => !open && setSelectedTransport(null)}>
        <DialogContent className="sm:max-w-md">
          {!bookingSuccess && selectedTransport ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">Confirm Transport</DialogTitle>
                <DialogDescription>
                  You are booking the <span className="font-bold text-foreground">{selectedTransport.name}</span> for KSh {selectedTransport.price.toLocaleString()}/{selectedTransport.unit}.
                </DialogDescription>
              </DialogHeader>
              
              <div className="py-6 space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg border">
                  <Checkbox 
                    id="driver" 
                    checked={includeDriver} 
                    onCheckedChange={(c) => setIncludeDriver(!!c)} 
                  />
                  <div className="grid gap-1.5 leading-none cursor-pointer">
                    <label htmlFor="driver" className="font-medium text-sm">Include driver / guide?</label>
                    <p className="text-sm text-muted-foreground">Since you book with Secret Safari, our professional drivers are complimentary.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setSelectedTransport(null)}>Cancel</Button>
                <Button className="flex-1" onClick={handleBook}>Confirm Transport</Button>
              </div>
            </>
          ) : (
            <div className="py-12 text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <DialogTitle className="text-2xl font-serif text-center">Transport Confirmed!</DialogTitle>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
