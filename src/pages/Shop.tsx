import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Search, Star, Filter, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["All", "OTC", "Supplements", "First Aid", "Personal Care", "Baby Care"];

type Product = {
  name: string;
  price: string;
  category: string;
  rating: number;
  desc: string;
  image?: string;
};

const allProducts: Product[] = [
  { name: "Pain Relief Tablets", price: "$8.99", category: "OTC", rating: 4.8, desc: "Fast-acting pain relief for headaches and body pain", image: "/images/products/pain-relief-tablets.png" },
  { name: "Vitamin D3 1000IU", price: "$12.50", category: "Supplements", rating: 4.9, desc: "Essential daily vitamin for bone health", image: "/images/products/vitamin-d3.png" },
  { name: "First Aid Kit Premium", price: "$24.99", category: "First Aid", rating: 4.7, desc: "Complete 50-piece emergency first aid kit", image: "/images/products/first-aid-kit.png" },
  { name: "Allergy Relief 24hr", price: "$15.99", category: "OTC", rating: 4.6, desc: "Non-drowsy allergy symptom relief", image: "/images/products/allergy-relief.png" },
  { name: "Omega-3 Fish Oil", price: "$18.99", category: "Supplements", rating: 4.8, desc: "Heart-healthy omega-3 fatty acids", image: "/images/products/omega-3.png" },
  { name: "Hand Sanitizer 500ml", price: "$6.99", category: "Personal Care", rating: 4.5, desc: "99.9% germ-killing formula", image: "/images/products/hand-sanitizer.png" },
  { name: "Baby Fever Reducer", price: "$9.99", category: "Baby Care", rating: 4.9, desc: "Gentle fever reducer for infants", image: "/images/products/baby-fever-reducer.png" },
  { name: "Bandage Roll Pack", price: "$4.99", category: "First Aid", rating: 4.4, desc: "Sterile elastic bandage roll set", image: "/images/products/bandage-roll.png" },
  { name: "Multivitamin Daily", price: "$22.00", category: "Supplements", rating: 4.7, desc: "Complete daily multivitamin formula", image: "/images/products/multivitamin-daily.png" },
  { name: "Cold & Flu Syrup", price: "$11.49", category: "OTC", rating: 4.5, desc: "Multi-symptom cold and flu relief", image: "/images/products/cold-flu-syrup.png" },
  { name: "Sunscreen SPF 50", price: "$14.99", category: "Personal Care", rating: 4.6, desc: "Broad spectrum UV protection", image: "/images/products/sunscreen-spf50.png" },
  { name: "Baby Diaper Cream", price: "$7.99", category: "Baby Care", rating: 4.8, desc: "Soothing diaper rash prevention cream", image: "/images/products/baby-diaper-cream.png" },
];

const ProductImage = ({ image, name }: { image?: string; name: string }) => {
  const [hasImageError, setHasImageError] = useState(false);

  const shouldShowImage = Boolean(image) && !hasImageError;

  return (
    <div className="bg-secondary rounded-lg h-32 lg:h-40 mb-4 overflow-hidden flex items-center justify-center">
      {shouldShowImage ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <ShoppingCart className="w-8 h-8 text-muted-foreground/30 group-hover:text-primary transition-colors" />
      )}
    </div>
  );
};

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { addItem } = useCart();

  const handleAdd = (product: typeof allProducts[0]) => {
    addItem({ name: product.name, price: product.price, category: product.category });
    setAddedItems((prev) => new Set(prev).add(product.name));
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(product.name);
        return next;
      });
    }, 1200);
  };

  const filtered = allProducts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-10 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-5xl font-display font-bold text-foreground">
            Shop Medicine
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground mt-2 max-w-lg">
            Quality medicines and health products delivered to your doorstep.
          </motion.p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "btn-primary-gradient"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((product, i) => (
              <AnimatedSection key={product.name} delay={i * 0.05}>
                <div className="card-pharmacy p-5 group cursor-pointer h-full flex flex-col">
                  <ProductImage image={product.image} name={product.name} />
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full self-start">{product.category}</span>
                  <h3 className="font-display font-semibold text-foreground mt-2">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 flex-1">{product.desc}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                    <span className="font-bold text-foreground">{product.price}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-accent text-accent" /> {product.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAdd(product)}
                    className={`mt-3 w-full py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                      addedItems.has(product.name)
                        ? "bg-primary/10 text-primary"
                        : "btn-primary-gradient opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {addedItems.has(product.name) ? (
                      <>
                        <Check className="w-4 h-4" /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No products found.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
