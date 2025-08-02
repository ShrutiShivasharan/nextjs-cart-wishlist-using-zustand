import { create } from "zustand";

const useCartStore = create((set,get) => ({
    cart : JSON.parse(localStorage.getItem('cart') || '[]'),
    //add to cart
    addToCart: (product) => {
        const cart = get().cart;
        const item = cart.find((i) => i.id === product.id);
        const newCart = item ? cart.map((i)=> i.id === product.id ? {...i, quantity:i.quantity + 1} : i) : [...cart, {...product, quantity:1}];
        localStorage.setItem('cart', JSON.stringify(newCart));
        set({cart : newCart});
    },
    //remove from cart
    removeFromCart: (id) => {
        const newCart = get().cart.filter((i) => i.id !== id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        set({cart: newCart});
    },
    //quantity update
    updateQuantity: ({id, quantity}) => {
        const newCart = get().cart.map((i)=> i.id === id ? {...i, quantity:Math.max(1, quantity)}: i);
        localStorage.setItem('cart', JSON.stringify(newCart));
        set({cart : newCart});
    },
    //clear all cart
    clearCart: () => {
        localStorage.setItem('cart', '[]');
        set({cart : []});
    },
}));

export default useCartStore;