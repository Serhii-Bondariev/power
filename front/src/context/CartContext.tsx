import React, { useEffect, useState, createContext, useContext } from "react";
interface CartItem {
  id: string;
  quantity: number;
}
interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getCartItemCount: () => number;
  getItemQuantity: (productId: string) => number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (productId: string) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === productId);
      if (existingItem) {
        return prev.map(item => item.id === productId ? {
          ...item,
          quantity: item.quantity + 1
        } : item);
      }
      return [...prev, {
        id: productId,
        quantity: 1
      }];
    });
  };
  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => item.id === productId ? {
      ...item,
      quantity
    } : item));
  };
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const getItemQuantity = (productId: string) => {
    return cart.find(item => item.id === productId)?.quantity || 0;
  };
  return <CartContext.Provider value={{
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartItemCount,
    getItemQuantity
  }}>
      {children}
    </CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}