"use client"
import React, { use } from 'react';
import useCartStore from '../store/cartStore';

function Cart() {

    const cart = useCartStore((state) => state.cart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeFromCart = useCartStore((state)=> state.removeFromCart);
    const clearCart = useCartStore((state)=> state.clearCart);

    const totalPrice = cart.reduce((total,item) => total + item.price * item.quantity, 0);

    return (
        <>
            <div className="p-4">
                <h1 className="text-3xl mb-4">Cart</h1>
                {cart.length ? cart.map((product) => (
                    <div key={product.id} className="border p-2 mb-2 flex justify-between">
                        <div>
                            <h2>{product.name}</h2>
                            <p>Rs.{product.price} * {product.quantity} = {product.price * product.quantity}</p>
                        </div>
                        <div>
                            <input type="number" min="1" value={product.quantity} onChange={(e) => updateQuantity({id:product.id, quantity: +e.target.value})} className="w-16 border px-1" />
                            <button onClick={()=> removeFromCart(product.id)} className="bg-red-500 text-white px-4 py-1 mt-4 ml-2">Remove</button>
                        </div>
                    </div>
                )) : (
                    <h2 className="text-red-500 text-xl">No Items In Cart!!</h2>
                )}
                {cart.length > 0 && (
                    <div>
                        <h2 className="text-xl font-bold mt-4">Total : Rs. {totalPrice}</h2>
                        <button onClick={clearCart} className="bg-red-500 text-white px-4 py-1 mt-4">Remove All</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
