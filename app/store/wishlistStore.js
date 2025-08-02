import { create } from "zustand";

const useWishlistStore = create((set,get) => ({
    wishlist : [],

    loadWishlist :() => {
        const stored = localStorage.getItem('wishlist');
        if(stored){
            set({wishlist : JSON.parse(stored)});
        }
    },
    //add to wishlist
    addToWishlist: (product) => {
        const wishlist = get().wishlist;
        if(wishlist.some((item) => item.id === product.id)) return;
        const updatedValue = [...wishlist, product];
        localStorage.setItem('wishlist', JSON.stringify(updatedValue));
        set({wishlist: updatedValue});
    },
    //remove from wishlist
    removeFromWishlist: (id) => {
        const newWishlist = get().wishlist.filter((i) => i.id !== id);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        set({wishlist: newWishlist});
    },
}));

export default useWishlistStore;