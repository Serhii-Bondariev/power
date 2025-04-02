import React, { useEffect, useState, createContext, useContext } from "react";
import { Product } from "../data/products";
interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
export function WishlistProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const addToWishlist = (productId: string) => {
    setWishlist(prev => [...prev, productId]);
  };
  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(id => id !== productId));
  };
  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };
  return <WishlistContext.Provider value={{
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  }}>
      {children}
    </WishlistContext.Provider>;
}
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}