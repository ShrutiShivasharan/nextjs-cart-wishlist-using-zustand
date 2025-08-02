"use client"
import React from 'react';
import useWishlistStore from '../store/wishlistStore';
import useCartStore from '../store/cartStore';
import { useRouter } from 'next/navigation';

function ProductList() {
    const router = useRouter();
    const wishlist = useWishlistStore((state)=>state.wishlist);
    const removeFromWishlist = useWishlistStore((state)=> state.removeFromWishlist);
    const addToCart = useCartStore((state)=> state.addToCart);

     const  handleAddToCart = (product) => {
        addToCart(product);
        router.push('/cart');
    } 

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlist.length ? wishlist.map((product) => (
                <div key={product.id} className="border p-4 roundede">
                    <h2 className="text-3xl">{product.name}</h2>
                    <p className="text-xl">Rs.{product.price}</p>
                    <div className="flex gap-2 mt-3">
                        <button onClick={()=> handleAddToCart(product)} className="bg-blue-500 text-white px-4 py-1 rounded">Add to Cart</button>
                        <button onClick={() => removeFromWishlist(product.id)} className="bg-pink-500 text-white px-4 py-1 rounded">Remove</button>
                    </div>
                </div>
            )):(
                <p className='text-red-500'>Wishlist is Empty!!</p>
            )}
        </div>
    );
}

export default ProductList;
