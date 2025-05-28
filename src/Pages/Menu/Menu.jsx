import React, { useState } from "react";

const categories = ["All", "Breakfast", "Lunch", "Dinner"];

const menuItems = [
  // Breakfast
  {
    name: "Classic Pancakes",
    image: "https://i.ibb.co/dHJPdgq/pexels-solodsha-8605858.jpg",
    price: "$5.99",
    desc: "Fluffy pancakes served with syrup and butter.",
    category: "Breakfast",
  },
  {
    name: "Omelette",
    image: "https://i.ibb.co/s41s3DJ/pexels-enginakyurt-1437268.jpg",
    price: "$4.99",
    desc: "Three-egg omelette with your choice of veggies.",
    category: "Breakfast",
  },
  {
    name: "Avocado Toast",
    image: "https://i.ibb.co/8DnVzL3y/pexels-fotios-photos-1351238.jpg",
    price: "$6.49",
    desc: "Toasted bread topped with smashed avocado and spices.",
    category: "Breakfast",
  },
  {
    name: "French Toast",
    image: "https://i.ibb.co/3y59pN1k/pexels-stephen-leonardi-587681991-30900617.jpg",
    price: "$5.49",
    desc: "Golden-brown French toast with powdered sugar.",
    category: "Breakfast",
  },
  {
    name: "Fruit Parfait",
    image: "https://i.ibb.co/LXRkc96N/pexels-bestasya-4696280.jpg",
    price: "$4.49",
    desc: "Layers of yogurt, granola, and fresh fruit.",
    category: "Breakfast",
  },
  // Lunch
  {
    name: "Chicken Caesar Salad",
    image: "https://i.ibb.co/cXwhsngj/pexels-sydney-troxell-223521-718742.jpg",
    price: "$8.99",
    desc: "Grilled chicken, romaine, parmesan, and Caesar dressing.",
    category: "Lunch",
  },
  {
    name: "Veggie Wrap",
    image: "https://i.ibb.co/5ggygwMk/pexels-rdne-8963961.jpg",
    price: "$7.49",
    desc: "Whole wheat wrap filled with fresh veggies and hummus.",
    category: "Lunch",
  },
  {
    name: "Turkey Club Sandwich",
    image: "https://i.ibb.co/tPQm6ygr/pexels-huzaifabukhari-16845663.jpg",
    price: "$8.49",
    desc: "Triple-decker sandwich with turkey, bacon, and lettuce.",
    category: "Lunch",
  },
  {
    name: "Margherita Pizza",
    image: "https://i.ibb.co/JFqGt2MZ/pexels-renestrgar-13814644.jpg",
    price: "$9.99",
    desc: "Classic pizza with tomato, mozzarella, and basil.",
    category: "Lunch",
  },
  {
    name: "Grilled Cheese",
    image: "https://i.ibb.co/Z6WRKRBQ/pexels-roman-odintsov-5836767.jpg",
    price: "$5.99",
    desc: "Melted cheese between toasted bread slices.",
    category: "Lunch",
  },
  // Dinner
  {
    name: "Paneer Masala",
    image: "https://i.ibb.co/G32hnLGg/pexels-dhiraj-jain-207743066-12737799-1.jpg",
    price: "$10.99",
    desc: "Cottage cheese cubes in spicy tomato gravy.",
    category: "Dinner",
  },
  {
    name: "Chicken Curry",
    image: "https://i.ibb.co/PvQsmnmt/pexels-saveurssecretes-9567999.jpg",
    price: "$12.99",
    desc: "Tender chicken cooked in aromatic spices.",
    category: "Dinner",
  },
  {
    name: "Veg Biryani",
    image: "https://i.ibb.co/hhCmJct/pexels-sohanikamat-7837978.jpg",
    price: "$9.49",
    desc: "Aromatic rice with fresh vegetables and herbs.",
    category: "Dinner",
  },
  {
    name: "Fish Fry",
    image: "https://i.ibb.co/yF4zdKGV/pexels-saveurssecretes-14831530.jpg",
    price: "$13.99",
    desc: "Crispy fried fish with tangy sauce.",
    category: "Dinner",
  },
  {
    name: "Egg Curry",
    image: "https://i.ibb.co/Xk8QWB0J/pexels-saveurssecretes-14132109.jpg",
    price: "$8.99",
    desc: "Boiled eggs in spicy curry sauce.",
    category: "Dinner",
  },
  {
    name: "Dal Tadka",
    image: "https://i.ibb.co/MyBXGwdq/pexels-shiva-kumar-146021-4595313.jpg",
    price: "$7.99",
    desc: "Yellow lentils tempered with Indian spices.",
    category: "Dinner",
  },
  {
    name: "Pasta Alfredo",
    image: "https://i.ibb.co/dJbywF74/pexels-jerchung-2204771.jpg",
    price: "$11.49",
    desc: "Creamy Alfredo pasta with parmesan.",
    category: "Dinner",
  },
  {
    name: "Chicken Burger",
    image: "https://i.ibb.co/NgfXhLWb/pexels-lucasandrade-10679779.jpg",
    price: "$9.99",
    desc: "Grilled chicken patty with lettuce and tomato.",
    category: "Dinner",
  },
  {
    name: "Veggie Pizza",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    price: "$10.49",
    desc: "Pizza loaded with fresh vegetables.",
    category: "Dinner",
  },
  {
    name: "Butter Naan",
    image: "https://i.ibb.co/ym4JrbNQ/pexels-beyza-yalcin-153182170-30892992.jpg",
    price: "$3.99",
    desc: "Soft Indian bread with butter.",
    category: "Dinner",
  },
  {
    name: "Mushroom Soup",
    image: "https://i.ibb.co/CpQtdxLM/pexels-anna-pyshniuk-2453945-4103375.jpg",
    price: "$6.49",
    desc: "Creamy soup with fresh mushrooms.",
    category: "Dinner",
  },
  {
    name: "Tandoori Roti",
    image: "https://i.ibb.co/HD57Yrgd/pexels-dhiraj-jain-207743066-12737800.jpg",
    price: "$2.99",
    desc: "Whole wheat Indian bread cooked in tandoor.",
    category: "Dinner",
  },
  {
    name: "Greek Salad",
    image: "https://i.ibb.co/1YH7vtxS/pexels-roman-odintsov-4958948.jpg",
    price: "$7.49",
    desc: "Fresh salad with feta, olives, and veggies.",
    category: "Dinner",
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenu =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full min-h-[60vh] bg-primary/5 py-10 px-2">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 text-center">
          Welcome to Our Menu
        </h1>
        {/* Category Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-primary/30"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {filteredMenu.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-primary font-bold mb-2">{item.price}</p>
              <p className="text-gray-500 text-sm text-center mb-4">{item.desc}</p>
              <div className="flex gap-3 w-full">
                <button className="flex-1 border border-primary text-primary px-4 py-2 rounded-full font-semibold text-sm">
                  Details
                </button>
                <button className="flex-1 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
        {filteredMenu.length === 0 && (
          <div className="text-center text-gray-500 mt-10">No items found in this category.</div>
        )}
      </div>
    </section>
  );
};

export default Menu;