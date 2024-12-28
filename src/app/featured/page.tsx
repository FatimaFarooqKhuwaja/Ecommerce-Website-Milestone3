"use client";
import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import Link from "next/link";

const  CardSection = () => {
  const [cart, setCart] = useState<{ id: number; title: string; price: number; image: string }[]>([]);
  const [products, setProducts] = useState<{ id: number; title: string; price: number; image: string; slug: string }[]>([]);

  // Load cart from localStorage if available
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // Fetch product data from API
    const fetchProducts = async () => {
      const res = await fetch('/api/cardsData');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const addToCart = (product: { id: number; title: string; price: number; image: string }) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));  // Save to localStorage
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-center font-bold mb-8">Product Store</h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/cart">
          <p className="py-2 px-6 bg-blue-500 text-white rounded-lg">
            Go to Cart ({cart.length})
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CardSection;
