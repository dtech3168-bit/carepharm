import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, clearCart, totalItems, totalPrice } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="p-6 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-display text-xl flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" />
              Your Cart
              {totalItems > 0 && (
                <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </SheetTitle>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">Cart is empty</p>
                <p className="text-sm text-muted-foreground mt-1">Add some items to get started</p>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-4 mb-4 p-3 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-5 h-5 text-muted-foreground/40" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-foreground truncate">{item.name}</h4>
                    <span className="text-xs text-primary font-medium">{item.category}</span>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                          className="w-7 h-7 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                          className="w-7 h-7 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-bold text-sm text-foreground">{item.price}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.name)}
                    className="self-start p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 pt-4 border-t border-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-display font-bold text-lg text-foreground">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full btn-primary-gradient py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
