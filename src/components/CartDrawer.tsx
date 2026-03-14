import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function CartDrawer() {
  const navigate = useNavigate();
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCartStore();

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-charcoal border-l border-white/10 flex flex-col p-0">
        <SheetHeader className="p-6 border-b border-white/5">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-display font-bold text-white flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-orange" />
              Your Cart
              <span className="text-sm font-normal text-white/40 ml-2">
                ({getTotalItems()} items)
              </span>
            </SheetTitle>
          </div>
          <SheetDescription className="text-white/40 text-sm">
            Manage your selected products and proceed to checkout.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-hidden">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <ShoppingCart className="w-10 h-10 text-white/20" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Your cart is empty</h3>
              <p className="text-white/40 mb-8 max-w-[200px]">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/shop');
                }}
                className="btn-primary"
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-full px-6 py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-white/5 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-white font-semibold text-sm line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.product.id, item.selectedColor)}
                          className="text-white/20 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-3 h-3 rounded-full border border-white/20"
                          style={{ backgroundColor: item.selectedColor }}
                        />
                        <span className="text-xs text-white/40 capitalize">
                          {item.product.category}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center bg-white/5 rounded-lg border border-white/5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)}
                            className="p-1 hover:text-orange text-white/40 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs text-white font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
                            className="p-1 hover:text-orange text-white/40 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-white font-bold">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="p-6 bg-white/5 border-t border-white/5 mt-0 block">
            <div className="space-y-4">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>${getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Shipping</span>
                <span className="text-green-500">Free</span>
              </div>
              <Separator className="bg-white/10" />
              <div className="flex justify-between text-white text-lg font-bold">
                <span>Total</span>
                <span className="text-orange">${getTotalPrice().toLocaleString()}</span>
              </div>
              
              <Button
                onClick={handleCheckout}
                className="w-full btn-primary h-12 text-lg mt-4 group"
              >
                Checkout Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-center text-[10px] text-white/20 uppercase tracking-widest pt-2">
                Secure SSL Encrypted Checkout
              </p>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
