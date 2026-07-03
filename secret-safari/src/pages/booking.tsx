import { useState, useMemo } from "react";
import { useSearch } from "wouter";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { destinations } from "@/data/destinations";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

const PRICING = {
  "Full Board": 15000,
  "Half Board": 12000,
  "B&B": 9000
};

export default function Booking() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const destId = searchParams.get("destination");
  
  const { toast } = useToast();

  const [selectedDestId, setSelectedDestId] = useState<string>(destId || destinations[0].id);
  const [rooms, setRooms] = useState<number>(1);
  const [boardType, setBoardType] = useState<keyof typeof PRICING>("Full Board");
  const [isAvailable, setIsAvailable] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const selectedDest = useMemo(() => destinations.find(d => d.id === selectedDestId) || destinations[0], [selectedDestId]);

  const total = PRICING[boardType] * rooms;

  const handleCheckAvailability = () => {
    setIsAvailable(true);
  };

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    toast({
      title: "Booking Confirmed!",
      description: "A confirmation has been sent to your email.",
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <h1 className="text-5xl font-serif font-bold mb-4">Book Your Escape</h1>
          <p className="text-xl text-muted-foreground mb-12">Secure your accommodation in the wild.</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Col: Selection */}
            <div className="space-y-8">
              <div className="space-y-3">
                <Label className="text-base font-semibold">Select Destination</Label>
                <Select value={selectedDestId} onValueChange={(val) => { setSelectedDestId(val); setIsAvailable(false); }}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map(d => (
                      <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">Rooms</Label>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" onClick={() => setRooms(Math.max(1, rooms - 1))}>-</Button>
                  <span className="text-xl font-medium w-4 text-center">{rooms}</span>
                  <Button variant="outline" size="icon" onClick={() => setRooms(Math.min(5, rooms + 1))}>+</Button>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">Board Basis</Label>
                <RadioGroup value={boardType} onValueChange={(val: any) => setBoardType(val)} className="flex flex-col gap-3">
                  <div className="flex items-center space-x-3 bg-muted/50 p-4 rounded-lg border">
                    <RadioGroupItem value="Full Board" id="fb" />
                    <Label htmlFor="fb" className="flex-1 cursor-pointer">Full Board (All meals)</Label>
                    <span className="font-medium text-muted-foreground">KSh 15,000/night</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-muted/50 p-4 rounded-lg border">
                    <RadioGroupItem value="Half Board" id="hb" />
                    <Label htmlFor="hb" className="flex-1 cursor-pointer">Half Board (2 meals)</Label>
                    <span className="font-medium text-muted-foreground">KSh 12,000/night</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-muted/50 p-4 rounded-lg border">
                    <RadioGroupItem value="B&B" id="bb" />
                    <Label htmlFor="bb" className="flex-1 cursor-pointer">Bed & Breakfast</Label>
                    <span className="font-medium text-muted-foreground">KSh 9,000/night</span>
                  </div>
                </RadioGroup>
              </div>

              {!isAvailable ? (
                <Button size="lg" className="w-full h-14 text-lg" onClick={handleCheckAvailability}>
                  Check Availability
                </Button>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-700 dark:text-green-400">
                    <CheckCircle2 />
                    <span className="font-medium">Available! Book your rooms.</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-t border-b">
                    <span className="text-xl font-medium">Total per night</span>
                    <span className="text-3xl font-serif font-bold text-primary">
                      KSh {total.toLocaleString()}
                    </span>
                  </div>
                  <Button size="lg" className="w-full h-14 text-lg" onClick={() => setShowPaymentModal(true)}>
                    Confirm Booking
                  </Button>
                </div>
              )}
            </div>

            {/* Right Col: Preview */}
            <div>
              <Card className="overflow-hidden border-0 shadow-xl bg-card">
                <div className="aspect-[4/3] w-full">
                  <img 
                    src={selectedDest.lodge.image} 
                    alt={selectedDest.lodge.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = "/images/hero/hero-5.png"; }}
                  />
                </div>
                <CardContent className="p-8">
                  <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Accommodation</div>
                  <h3 className="text-3xl font-serif font-bold mb-4">{selectedDest.lodge.name}</h3>
                  <p className="text-muted-foreground mb-6">Experience the wild in comfort at {selectedDest.name}. Designed to blend seamlessly with nature.</p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{selectedDest.name}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Upsell */}
          <div className="mt-24 bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Need a ride?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We also offer transport and tour packages. Rent safari vehicles, luxury SUVs, or yachts.
            </p>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="/transport">View Transport Options</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="sm:max-w-md">
          {!bookingConfirmed ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">Complete Payment</DialogTitle>
                <DialogDescription className="text-base">
                  Your Total: <span className="font-bold text-foreground">KSh {total.toLocaleString()}</span> / night
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleConfirmPayment} className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input required type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Card Number</Label>
                  <Input required placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Expiry</Label>
                    <Input required placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label>CVV</Label>
                    <Input required type="password" maxLength={4} />
                  </div>
                </div>
                <DialogFooter className="pt-4">
                  <Button type="submit" className="w-full h-12 text-lg">Pay & Confirm</Button>
                </DialogFooter>
              </form>
            </>
          ) : (
            <div className="py-12 text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <DialogTitle className="text-3xl font-serif text-center">Booking Confirmed!</DialogTitle>
              <DialogDescription className="text-lg text-center">
                A confirmation has been sent to your email. We look forward to hosting you!
              </DialogDescription>
              <Button className="mt-8" onClick={() => setShowPaymentModal(false)}>Close</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
