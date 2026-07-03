import { Link } from "wouter";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="font-serif text-3xl font-bold mb-6 block">
            Secret Safari
          </Link>
          <p className="text-muted-foreground mb-6 max-w-sm">
            Curated, off-the-beaten-path adventures in Kenya for the curious explorer.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/secretsafarikenya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <SiInstagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@secretsafarikenya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <SiTiktok size={24} />
            </a>
            <a href="tel:+254700000000" className="hover:text-primary transition-colors">
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            <Link href="/discover" className="text-muted-foreground hover:text-white transition-colors">Discover</Link>
            <Link href="/booking" className="text-muted-foreground hover:text-white transition-colors">Booking</Link>
            <Link href="/transport" className="text-muted-foreground hover:text-white transition-colors">Transport</Link>
            <Link href="/blogs" className="text-muted-foreground hover:text-white transition-colors">Blogs</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact Us</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact</h4>
          <p className="text-muted-foreground mb-2">Nairobi, Kenya</p>
          <p className="text-muted-foreground mb-2">hello@secretsafari.co.ke</p>
          <p className="text-muted-foreground">+254 700 000 000</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Secret Safari. All rights reserved.
      </div>
    </footer>
  );
}
