import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(123) 456-7890", href: "tel:+1234567890" },
  { icon: Mail, label: "Email", value: "hello@carepharm.com", href: "mailto:hello@carepharm.com" },
  { icon: MapPin, label: "Address", value: "123 Health Street, Medical City, MC 12345", href: "#" },
  { icon: Clock, label: "Hours", value: "Mon-Fri 8AM-10PM, Sat 9AM-8PM, Sun 10AM-6PM", href: "#" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-10 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-5xl font-display font-bold text-foreground">
            Get in Touch
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground mt-2 max-w-lg">
            Have a question or need assistance? We're here to help. Reach out to us anytime.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item, i) => (
                <AnimatedSection key={item.label} delay={i * 0.1}>
                  <a href={item.href} className="card-pharmacy p-5 flex items-start gap-4 block">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm">{item.label}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}

              <AnimatedSection delay={0.4}>
                <div className="card-pharmacy p-5">
                  <h3 className="font-display font-semibold text-foreground mb-2">Emergency?</h3>
                  <p className="text-sm text-muted-foreground mb-3">For urgent medicine needs, call our 24/7 emergency line.</p>
                  <a href="tel:+1234567890" className="btn-accent-gradient px-5 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Emergency Line
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.2}>
              <form className="card-pharmacy p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <h2 className="font-display font-bold text-xl text-foreground">Send Us a Message</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <textarea placeholder="Your message..." rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                <button type="submit" className="btn-primary-gradient px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-border bg-secondary h-64 lg:h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-10 h-10 mx-auto mb-2" />
                <p className="font-medium">123 Health Street, Medical City</p>
                <p className="text-sm">Map integration available</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
