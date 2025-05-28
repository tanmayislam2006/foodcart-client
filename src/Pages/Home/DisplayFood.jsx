import React from 'react';

const foodItems = [
    {
        name: "Veggie Delight",
        image: "https://i.ibb.co/1YH7vtxS/pexels-roman-odintsov-4958948.jpg",
        price: "$8.99",
        desc: "Fresh veggies with a tangy dressing."
    },
    {
        name: "Chicken Bowl",
        image: "https://i.ibb.co/60GV6cT9/pexels-cleireny-15532964.jpg",
        price: "$10.99",
        desc: "Grilled chicken with rice and greens."
    },
    {
        name: "Pasta Special",
        image: "https://i.ibb.co/dJbywF74/pexels-jerchung-2204771.jpg",
        price: "$9.49",
        desc: "Creamy pasta with fresh herbs."
    },
    {
        name: "Burger Combo",
        image: "https://i.ibb.co/NgfXhLWb/pexels-lucasandrade-10679779.jpg",
        price: "$7.99",
        desc: "Juicy burger with fries and drink."
    }
];

const DisplayFood = () => {
    return (
        <div className="w-full py-8 px-2 md:px-0">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Popular Dishes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {foodItems.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
                        <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-primary font-bold mb-2">{item.price}</p>
                        <p className="text-gray-500 text-sm text-center mb-4">{item.desc}</p>
                        <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9" />
                            </svg>
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayFood;