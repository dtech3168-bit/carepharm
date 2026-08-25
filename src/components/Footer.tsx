import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-lg text-primary-foreground">+</span>
              </div>
              <span className="font-display font-bold text-xl">CarePharm</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted pharmacy partner. Quality medicines, expert consultations, and caring home delivery for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[{ to: "/shop", label: "Shop Medicine" }, { to: "/doctors", label: "Find a Doctor" }, { to: "/delivery", label: "Home Delivery" }, { to: "/contact", label: "Contact Us" }].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />(123) 456-7890</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />hello@carepharm.com</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />123 Health Street, City</span>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Hours</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />Mon - Fri: 8AM - 10PM</span>
              <span className="ml-6">Sat: 9AM - 8PM</span>
              <span className="ml-6">Sun: 10AM - 6PM</span>
              <span className="mt-2 text-primary font-medium">24/7 Emergency Line</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
          © 2026 CarePharm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
