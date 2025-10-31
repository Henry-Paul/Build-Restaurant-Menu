'use client'

import { useState } from 'react'

export default function Home() {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: 'Pizza Palace',
      cuisine: 'Italian',
      rating: 4.5,
      image: '🍕',
    },
    {
      id: 2,
      name: 'Burger Barn',
      cuisine: 'American',
      rating: 4.3,
      image: '🍔',
    },
    {
      id: 3,
      name: 'Sushi Station',
      cuisine: 'Japanese',
      rating: 4.8,
      image: '🍱',
    },
  ])

  const [cart, setCart] = useState<any[]>([])

  const addToCart = (item: any) => {
    setCart([...cart, item])
  }

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-12 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Order Food Online</h1>
        <p className="text-xl">Discover and order from the best restaurants near you</p>
      </div>

      {/* Restaurants Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white border rounded-lg shadow-md hover:shadow-lg transition p-6"
            >
              <div className="text-5xl mb-4">{restaurant.image}</div>
              <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
              <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
              <div className="flex justify-between items-center">
                <span className="text-orange-600 font-bold">⭐ {restaurant.rating}</span>
                <button
                  onClick={() => addToCart(restaurant)}
                  className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Your Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded mb-2 flex justify-between">
                <span>{item.name}</span>
                <span className="font-bold">₹250</span>
              </div>
            ))}
            <button className="w-full bg-green-600 text-white py-3 rounded mt-4 hover:bg-green-700 font-bold text-lg">
              Checkout - ₹{cart.length * 250}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
