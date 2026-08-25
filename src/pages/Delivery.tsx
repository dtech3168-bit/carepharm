import { motion } from "framer-motion";
import { Truck, Heart, Clock, Shield, CheckCircle, Accessibility, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import deliveryImage from "@/assets/delivery-service.jpg";

const steps = [
  { num: "01", title: "Place Your Order", desc: "Browse our shop and add medicines to your cart." },
  { num: "02", title: "We Prepare It", desc: "Our pharmacists verify and carefully pack your order." },
  { num: "03", title: "Delivered to You", desc: "Our trained staff delivers safely to your doorstep." },
];

const features = [
  { icon: Truck, title: "Free Delivery", desc: "Free on orders above $25. Discounted for all others." },
  { icon: Accessibility, title: "Priority for Handicapped", desc: "Dedicated priority delivery for handicapped and elderly patients." },
  { icon: Clock, title: "Same-Day Delivery", desc: "Order before 2 PM for same-day delivery in your area." },
  { icon: Shield, title: "Safe & Secure", desc: "Temperature-controlled packaging for sensitive medicines." },
  { icon: Heart, title: "Caring Staff", desc: "Trained delivery personnel who understand your needs." },
  { icon: CheckCircle, title: "Order Tracking", desc: "Real-time tracking from pharmacy to your door." },
];

const Delivery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                🚚 Special Priority for Everyone
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                Medicine Delivered with <span className="text-gradient-primary">Compassion</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
                We believe healthcare should be accessible to all. Our home delivery service provides special priority for handicapped and elderly patients, ensuring medicines reach those who need them most.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-4 mt-8">
                <Link to="/shop" className="btn-primary-gradient px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
                  Order Now
                </Link>
                <a href="tel:+1234567890" className="px-7 py-3.5 rounded-xl font-semibold border border-border text-foreground hover:bg-secondary transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call Us
                </a>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src={deliveryImage} alt="Home delivery" className="rounded-2xl shadow-xl max-w-md mx-auto w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">How It Works</h2>
            <p className="text-muted-foreground mt-2">Getting your medicine delivered is simple.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl btn-primary-gradient mx-auto flex items-center justify-center mb-4">
                    <span className="font-display font-bold text-xl text-primary-foreground">{step.num}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Why Choose Our Delivery</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <div className="card-pharmacy p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <AnimatedSection>
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Delivery Areas</h2>
            <p className="text-muted-foreground mb-8">We currently deliver to all areas within a 25-mile radius. Contact us for deliveries to other locations.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Downtown", "Westside", "Eastside", "North Hills", "South Bay", "Central", "Riverside", "Lakewood"].map((area) => (
                <span key={area} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">{area}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Delivery;
