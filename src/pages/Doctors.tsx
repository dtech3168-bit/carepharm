import { motion } from "framer-motion";
import { Stethoscope, Star, Clock, Phone, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import doctorImage from "@/assets/doctor-consult.jpg";

const doctors = [
  { name: "Dr. Sarah Johnson", specialty: "General Physician", experience: "12 years", rating: 4.9, available: true },
  { name: "Dr. Michael Chen", specialty: "Cardiologist", experience: "15 years", rating: 4.8, available: true },
  { name: "Dr. Emily Davis", specialty: "Pediatrician", experience: "10 years", rating: 4.9, available: false },
  { name: "Dr. Robert Wilson", specialty: "Dermatologist", experience: "8 years", rating: 4.7, available: true },
  { name: "Dr. Lisa Anderson", specialty: "Orthopedic", experience: "20 years", rating: 4.9, available: true },
  { name: "Dr. James Brown", specialty: "ENT Specialist", experience: "11 years", rating: 4.6, available: false },
];

const Doctors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 section-gradient overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-5xl font-display font-bold text-foreground">
                Expert Doctors, <span className="text-gradient-primary">Ready to Help</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
                Connect with our network of experienced healthcare professionals. Book consultations in-person or online for expert medical advice.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-6 mt-8">
                {[{ num: "20+", label: "Doctors" }, { num: "4.9", label: "Avg Rating" }, { num: "5000+", label: "Consultations" }].map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-2xl text-primary">{s.num}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src={doctorImage} alt="Doctor consultation" className="rounded-2xl shadow-xl max-w-sm mx-auto lg:ml-auto w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Our Medical Team</h2>
            <p className="text-muted-foreground mt-2">Choose a doctor and book your consultation today.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc, i) => (
              <AnimatedSection key={doc.name} delay={i * 0.1}>
                <div className="card-pharmacy p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground">{doc.name}</h3>
                      <p className="text-sm text-primary font-medium">{doc.specialty}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${doc.available ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                      {doc.available ? "Available" : "Busy"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {doc.experience}</span>
                    <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-accent text-accent" /> {doc.rating}</span>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border flex gap-3">
                    <button className="flex-1 btn-primary-gradient py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" /> Book Now
                    </button>
                    <button className="px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground">Enquire About a Doctor</h2>
            <p className="text-muted-foreground mt-2">Fill in your details and we'll connect you with the right specialist.</p>
          </AnimatedSection>
          <AnimatedSection>
            <form className="card-pharmacy p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                <option value="">Select Specialty</option>
                <option>General Physician</option>
                <option>Cardiologist</option>
                <option>Pediatrician</option>
                <option>Dermatologist</option>
                <option>Orthopedic</option>
                <option>ENT Specialist</option>
              </select>
              <textarea placeholder="Describe your concern..." rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <button type="submit" className="w-full btn-primary-gradient py-3.5 rounded-xl font-semibold text-base hover:scale-[1.02] transition-transform">
                Submit Enquiry
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
