import { motion } from "framer-motion";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Let's Talk Adventure</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to plan your escape? Reach out to our safari experts and we'll craft the perfect itinerary for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Socials & Info */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <a href="https://www.instagram.com/secretsafarikenya" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="bg-card hover:bg-primary hover:text-primary-foreground border rounded-2xl p-8 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <SiInstagram size={32} />
                  <div>
                    <h3 className="font-bold text-lg">Instagram</h3>
                    <p className="text-sm opacity-80">@secretsafarikenya</p>
                  </div>
                </div>
                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>

            <a href="https://www.tiktok.com/@secretsafarikenya" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="bg-card hover:bg-primary hover:text-primary-foreground border rounded-2xl p-8 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <SiTiktok size={32} />
                  <div>
                    <h3 className="font-bold text-lg">TikTok</h3>
                    <p className="text-sm opacity-80">@secretsafarikenya</p>
                  </div>
                </div>
                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>

            <a href="tel:+254700000000" className="group block">
              <div className="bg-card hover:bg-primary hover:text-primary-foreground border rounded-2xl p-8 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Phone size={32} />
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-sm opacity-80">+254 700 000 000</p>
                  </div>
                </div>
                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 bg-card border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <h2 className="text-3xl font-serif font-bold mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input required placeholder="Your name" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input required type="email" placeholder="you@example.com" className="h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea required placeholder="Tell us about your dream safari..." className="min-h-[150px] resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full h-14 text-lg">Send Inquiry</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
