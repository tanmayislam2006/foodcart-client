import React from 'react';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';

const dishes = [
    {
        name: "Paneer Masala",
        image: "https://i.ibb.co/gLr999pd/pexels-dhiraj-jain-207743066-12737799.jpg",
        price: "$9.99",
        desc: "Rich cottage cheese curry with Indian spices.",
        rating: 4.5,
        details: "Paneer Masala is a classic North Indian dish made with soft paneer cubes simmered in a spicy tomato-based gravy, flavored with aromatic spices and herbs. Perfect with naan or rice."
    },
    {
        name: "Chicken Curry",
        image: "https://i.ibb.co/PvQsmnmt/pexels-saveurssecretes-9567999.jpg",
        price: "$11.49",
        desc: "Tender chicken cooked in spicy gravy.",
        rating: 4.7,
        details: "Our Chicken Curry features juicy chicken pieces slow-cooked in a rich, spicy sauce with onions, tomatoes, and a blend of traditional Indian spices."
    },
    {
        name: "Veg Biryani",
        image: "https://i.ibb.co/hhCmJct/pexels-sohanikamat-7837978.jpg",
        price: "$8.49",
        desc: "Aromatic rice with fresh vegetables and herbs.",
        rating: 4.3,
        details: "Veg Biryani is a fragrant rice dish layered with fresh vegetables, saffron, and whole spices, served with raita for a wholesome meal."
    },
    {
        name: "Fish Fry",
        image: "https://i.ibb.co/yF4zdKGV/pexels-saveurssecretes-14831530.jpg",
        price: "$12.99",
        desc: "Crispy fried fish with tangy sauce.",
        rating: 4.6,
        details: "Our Fish Fry is made with fresh fish fillets marinated in spices, coated in a crispy batter, and fried to golden perfection. Served with tangy dipping sauce."
    },
    {
        name: "Egg Curry",
        image: "https://i.ibb.co/Xk8QWB0J/pexels-saveurssecretes-14132109.jpg",
        price: "$7.99",
        desc: "Boiled eggs in spicy curry sauce.",
        rating: 4.2,
        details: "Egg Curry features hard-boiled eggs simmered in a spicy, flavorful curry sauce made with tomatoes, onions, and a blend of Indian spices."
    },
    {
        name: "Dal Tadka",
        image: "https://i.ibb.co/MyBXGwdq/pexels-shiva-kumar-146021-4595313.jpg",
        price: "$6.99",
        desc: "Yellow lentils tempered with Indian spices.",
        rating: 4.4,
        details: "Dal Tadka is a comforting dish of yellow lentils cooked with turmeric and finished with a tempering of cumin, garlic, and red chilies in ghee."
    }
];

const RegularDish = () => {
    return (
        <section className="w-full py-10 px-2 md:px-0">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Regular Dishes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {dishes.map((dish, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center relative">
                        {/* Like Button */}
                        <button className="absolute top-4 right-4 text-primary bg-primary/10 rounded-full p-2">
                            <FaRegHeart className="text-lg" />
                        </button>
                        <img src={dish.image} alt={dish.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20" />
                        {/* Rating */}
                        <div className="flex items-center mb-2">
                            <FaStar className="text-yellow-400 mr-1" />
                            <span className="text-sm font-semibold text-gray-700">{dish.rating}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{dish.name}</h3>
                        <p className="text-primary font-bold mb-2">{dish.price}</p>
                        <p className="text-gray-500 text-sm text-center mb-4">{dish.desc}</p>
                        <div className="flex gap-3 w-full">
                            <button className="flex-1 flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-full font-semibold text-sm">
                                Details
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm">
                                <MdOutlineShoppingCart className="text-lg" />
                                Order
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RegularDish;