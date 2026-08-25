import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Stethoscope, Truck, Heart, Shield, Clock, Star, ArrowRight, Accessibility } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-pharmacy.jpg";
import deliveryImage from "@/assets/delivery-service.jpg";
import doctorImage from "@/assets/doctor-consult.jpg";

const services = [
  {
    icon: ShoppingCart,
    title: "Order Medicine",
    description: "Browse our wide range of quality medicines and health products online.",
    link: "/shop",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Doctor Consultation",
    description: "Connect with experienced doctors for medical advice and prescriptions.",
    link: "/doctors",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Free delivery to your doorstep. Special priority for those who need it most.",
    link: "/delivery",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Accessibility,
    title: "Accessible Care",
    description: "Dedicated services for handicapped and elderly patients with priority delivery.",
    link: "/delivery",
    color: "bg-accent/10 text-accent",
  },
];

const products = [
  { name: "Pain Relief", price: "$8.99", category: "OTC", rating: 4.8, image: "/images/products/pain-relief-tablets.png" },
  { name: "Vitamin D3", price: "$12.50", category: "Supplements", rating: 4.9, image: "/images/products/vitamin-d3.png" },
  { name: "First Aid Kit", price: "$24.99", category: "Emergency", rating: 4.7, image: "/images/products/first-aid-kit.png" },
  { name: "Allergy Relief", price: "$15.99", category: "OTC", rating: 4.6, image: "/images/products/allergy-relief.png" },
];

const testimonials = [
  { name: "Sarah M.", text: "CarePharm's home delivery service has been a blessing for my elderly mother. Always on time and caring.", rating: 5 },
  { name: "James K.", text: "The doctor consultation service is fantastic. Got my prescription renewed without leaving home.", rating: 5 },
  { name: "Linda P.", text: "Best pharmacy experience. The staff is knowledgeable, and the prices are very competitive.", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="CarePharm pharmacy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
                ✨ Your Health, Our Priority
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-primary-foreground"
            >
              Caring for You,{" "}
              <span className="text-primary">Every Step</span> of the Way
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-lg"
            >
              Quality medicines, expert doctor consultations, and compassionate home delivery — especially for those who need it most.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/shop" className="btn-primary-gradient px-7 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2 hover:scale-105 transition-transform">
                <ShoppingCart className="w-5 h-5" /> Shop Medicine
              </Link>
              <Link to="/doctors" className="px-7 py-3.5 rounded-xl font-semibold text-base border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all flex items-center gap-2">
                <Stethoscope className="w-5 h-5" /> Consult a Doctor
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-10 text-primary-foreground/70 text-sm"
            >
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> Licensed</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> 24/7 Support</span>
              <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-accent" /> Trusted</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-2 text-foreground">Our Services</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Comprehensive healthcare solutions designed with compassion and accessibility in mind.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link to={service.link} className="card-pharmacy p-6 block group h-full">
                  <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Shop</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mt-2 text-foreground">Popular Products</h2>
            </div>
            <Link to="/shop" className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product, i) => (
              <AnimatedSection key={product.name} delay={i * 0.1}>
                <div className="card-pharmacy p-5 group cursor-pointer">
                  <div className="bg-secondary rounded-lg h-32 lg:h-40 mb-4 overflow-hidden flex items-center justify-center">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <ShoppingCart className="w-8 h-8 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{product.category}</span>
                  <h3 className="font-display font-semibold text-foreground mt-2">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-foreground">{product.price}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-accent text-accent" /> {product.rating}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <img src={deliveryImage} alt="Medicine home delivery" className="rounded-2xl shadow-xl w-full max-w-md mx-auto lg:mx-0" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Home Delivery</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mt-2 mb-4 text-foreground">
                Medicine Delivered with <span className="text-gradient-primary">Care</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide free home delivery for all customers, with special priority for handicapped and elderly patients. Our trained delivery staff ensures your medicine arrives safely and on time.
              </p>
              <ul className="space-y-3 mb-8">
                {["Free delivery on orders above $25", "Priority service for handicapped & elderly", "Same-day delivery available", "Trained & caring delivery staff"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-3 h-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/delivery" className="btn-accent-gradient px-7 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                <Truck className="w-5 h-5" /> Learn About Delivery
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 lg:py-28 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Expert Care</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mt-2 mb-4 text-foreground">
                Consult Our <span className="text-gradient-primary">Doctors</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Get professional medical advice from our network of experienced doctors. Book consultations online or visit our pharmacy for in-person advice.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ num: "20+", label: "Specialist Doctors" }, { num: "5000+", label: "Patients Served" }, { num: "4.9", label: "Average Rating" }, { num: "24/7", label: "Availability" }].map((stat) => (
                  <div key={stat.label} className="card-pharmacy p-4 text-center">
                    <div className="font-display font-bold text-2xl text-primary">{stat.num}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/doctors" className="btn-primary-gradient px-7 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                <Stethoscope className="w-5 h-5" /> Find a Doctor
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <img src={doctorImage} alt="Doctor consultation" className="rounded-2xl shadow-xl w-full max-w-md mx-auto lg:ml-auto" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-2 text-foreground">What Our Customers Say</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="card-pharmacy p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                  <span className="text-sm font-semibold text-foreground">{t.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <AnimatedSection>
        <section className="mx-4 lg:mx-8 mb-16">
          <div className="container mx-auto btn-primary-gradient rounded-2xl p-10 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
              Need Medicine? We're Here for You
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Order online, get it delivered, or talk to a doctor. We make healthcare accessible for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/shop" className="bg-primary-foreground text-foreground px-7 py-3.5 rounded-xl font-semibold hover:scale-105 transition-transform">
                Shop Now
              </Link>
              <Link to="/contact" className="border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Index;
