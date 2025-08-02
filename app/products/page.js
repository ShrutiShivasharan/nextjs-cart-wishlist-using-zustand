"use client"
import React from 'react';
import useCartStore from '../store/cartStore';
import { useRouter } from 'next/navigation';
import useWishlistStore from '../store/wishlistStore';

const products = [
    { id: 1, name: 'Apple', price: 100 },
    { id: 2, name: 'Banana', price: 500 },
    { id: 3, name: 'Orange', price: 800 },
];

function ProductList() {
    const router = useRouter();
    const addToCart = useCartStore((state) => state.addToCart);
    const addToWishlist = useWishlistStore((state)=> state.addToWishlist);

    const  handleAddToCart = (product) => {
        addToCart(product);
        router.push('/cart');
    } 

     const  handleAddToWishlist = (product) => {
        addToWishlist(product);
        router.push('/wishlist');
    } 

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="border p-4 roundede">
                    <h2 className="text-3xl">{product.name}</h2>
                    <p className="text-xl">Rs.{product.price}</p>
                    <div className="flex gap-2 mt-3">
                        <button onClick={() => handleAddToCart(product)} className="bg-blue-500 text-white px-4 py-1 rounded">Add to Cart</button>
                        <button onClick={() => handleAddToWishlist(product)}  className="bg-pink-500 text-white px-4 py-1 rounded">Add To wishlist</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
