const allItems = [
    {
        id: "item-1",
        name: "Veggie Delight",
        image: "https://i.ibb.co/1YH7vtxS/pexels-roman-odintsov-4958948.jpg",
        price: "8.99",
        desc: "Fresh veggies with a tangy dressing.",
        display: "populer",
        rating: 4.3,
        stock: 20
    },
    {
        id: "item-2",
        name: "Chicken Bowl",
        image: "https://i.ibb.co/60GV6cT9/pexels-cleireny-15532964.jpg",
        price: "10.99",
        desc: "Grilled chicken with rice and greens.",
        display: "populer",
        rating: 4.7,
        stock: 15
    },
    {
        id: "item-3",
        name: "Pasta Special",
        image: "https://i.ibb.co/dJbywF74/pexels-jerchung-2204771.jpg",
        price: "9.49",
        desc: "Creamy pasta with fresh herbs.",
        display: "populer",
        rating: 4.5,
        stock: 18
    },
    {
        id: "item-4",
        name: "Burger Combo",
        image: "https://i.ibb.co/NgfXhLWb/pexels-lucasandrade-10679779.jpg",
        price: "7.99",
        desc: "Juicy burger with fries and drink.",
        display: "populer",
        rating: 4.6,
        stock: 25
    },

    {
        id: "item-5",
        name: "Paneer Masala",
        image: "https://i.ibb.co/gLr999pd/pexels-dhiraj-jain-207743066-12737799.jpg",
        price: "9.99",
        desc: "Rich cottage cheese curry with Indian spices.",
        rating: 4.5,
        details: "Paneer Masala is a classic North Indian dish made with soft paneer cubes simmered in a spicy tomato-based gravy, flavored with aromatic spices and herbs. Perfect with naan or rice.",
        display: "regular",
        stock: 12
    },
    {
        id: "item-6",
        name: "Chicken Curry",
        image: "https://i.ibb.co/PvQsmnmt/pexels-saveurssecretes-9567999.jpg",
        price: "11.49",
        desc: "Tender chicken cooked in spicy gravy.",
        rating: 4.7,
        details: "Our Chicken Curry features juicy chicken pieces slow-cooked in a rich, spicy sauce with onions, tomatoes, and a blend of traditional Indian spices.",
        display: "regular",
        stock: 10
    },
    {
        id: "item-7",
        name: "Veg Biryani",
        image: "https://i.ibb.co/hhCmJct/pexels-sohanikamat-7837978.jpg",
        price: "8.49",
        desc: "Aromatic rice with fresh vegetables and herbs.",
        rating: 4.3,
        details: "Veg Biryani is a fragrant rice dish layered with fresh vegetables, saffron, and whole spices, served with raita for a wholesome meal.",
        display: "regular",
        stock: 14
    },
    {
        id: "item-8",
        name: "Fish Fry",
        image: "https://i.ibb.co/yF4zdKGV/pexels-saveurssecretes-14831530.jpg",
        price: "12.99",
        desc: "Crispy fried fish with tangy sauce.",
        rating: 4.6,
        details: "Our Fish Fry is made with fresh fish fillets marinated in spices, coated in a crispy batter, and fried to golden perfection. Served with tangy dipping sauce.",
        display: "regular",
        stock: 8
    },
    {
        id: "item-9",
        name: "Egg Curry",
        image: "https://i.ibb.co/Xk8QWB0J/pexels-saveurssecretes-14132109.jpg",
        price: "7.99",
        desc: "Boiled eggs in spicy curry sauce.",
        rating: 4.2,
        details: "Egg Curry features hard-boiled eggs simmered in a spicy, flavorful curry sauce made with tomatoes, onions, and a blend of Indian spices.",
        display: "regular",
        stock: 16
    },
    {
        id: "item-10",
        name: "Dal Tadka",
        image: "https://i.ibb.co/MyBXGwdq/pexels-shiva-kumar-146021-4595313.jpg",
        price: "6.99",
        desc: "Yellow lentils tempered with Indian spices.",
        rating: 4.4,
        details: "Dal Tadka is a comforting dish of yellow lentils cooked with turmeric and finished with a tempering of cumin, garlic, and red chilies in ghee.",
        display: "regular",
        stock: 20
    },

    // Breakfast
    {
        id: "item-11",
        name: "Classic Pancakes",
        image: "https://i.ibb.co/dHJPdgq/pexels-solodsha-8605858.jpg",
        price: "5.99",
        desc: "Fluffy pancakes served with syrup and butter.",
        category: "Breakfast",
        rating: 4.1,
        stock: 30
    },
    {
        id: "item-12",
        name: "Omelette",
        image: "https://i.ibb.co/s41s3DJ/pexels-enginakyurt-1437268.jpg",
        price: "4.99",
        desc: "Three-egg omelette with your choice of veggies.",
        category: "Breakfast",
        rating: 4.3,
        stock: 22
    },
    {
        id: "item-13",
        name: "Avocado Toast",
        image: "https://i.ibb.co/8DnVzL3y/pexels-fotios-photos-1351238.jpg",
        price: "6.49",
        desc: "Toasted bread topped with smashed avocado and spices.",
        category: "Breakfast",
        rating: 4.5,
        stock: 18
    },
    {
        id: "item-14",
        name: "French Toast",
        image: "https://i.ibb.co/3y59pN1k/pexels-stephen-leonardi-587681991-30900617.jpg",
        price: "5.49",
        desc: "Golden-brown French toast with powdered sugar.",
        category: "Breakfast",
        rating: 4.2,
        stock: 20
    },
    {
        id: "item-15",
        name: "Fruit Parfait",
        image: "https://i.ibb.co/LXRkc96N/pexels-bestasya-4696280.jpg",
        price: "4.49",
        desc: "Layers of yogurt, granola, and fresh fruit.",
        category: "Breakfast",
        rating: 4.4,
        stock: 25
    },
    // Lunch
    {
        id: "item-16",
        name: "Chicken Caesar Salad",
        image: "https://i.ibb.co/cXwhsngj/pexels-sydney-troxell-223521-718742.jpg",
        price: "8.99",
        desc: "Grilled chicken, romaine, parmesan, and Caesar dressing.",
        category: "Lunch",
        rating: 4.6,
        stock: 13
    },
    {
        id: "item-17",
        name: "Veggie Wrap",
        image: "https://i.ibb.co/5ggygwMk/pexels-rdne-8963961.jpg",
        price: "7.49",
        desc: "Whole wheat wrap filled with fresh veggies and hummus.",
        category: "Lunch",
        rating: 4.3,
        stock: 17
    },
    {
        id: "item-18",
        name: "Turkey Club Sandwich",
        image: "https://i.ibb.co/tPQm6ygr/pexels-huzaifabukhari-16845663.jpg",
        price: "8.49",
        desc: "Triple-decker sandwich with turkey, bacon, and lettuce.",
        category: "Lunch",
        rating: 4.5,
        stock: 14
    },
    {
        id: "item-19",
        name: "Margherita Pizza",
        image: "https://i.ibb.co/JFqGt2MZ/pexels-renestrgar-13814644.jpg",
        price: "9.99",
        desc: "Classic pizza with tomato, mozzarella, and basil.",
        category: "Lunch",
        rating: 4.7,
        stock: 12
    },
    {
        id: "item-20",
        name: "Grilled Cheese",
        image: "https://i.ibb.co/Z6WRKRBQ/pexels-roman-odintsov-5836767.jpg",
        price: "5.99",
        desc: "Melted cheese between toasted bread slices.",
        category: "Lunch",
        rating: 4.2,
        stock: 20
    },
    // Dinner
    {
        id: "item-21",
        name: "Paneer Masala",
        image: "https://i.ibb.co/G32hnLGg/pexels-dhiraj-jain-207743066-12737799-1.jpg",
        price: "10.99",
        desc: "Cottage cheese cubes in spicy tomato gravy.",
        category: "Dinner",
        rating: 4.5,
        stock: 10
    },
    {
        id: "item-22",
        name: "Chicken Curry",
        image: "https://i.ibb.co/PvQsmnmt/pexels-saveurssecretes-9567999.jpg",
        price: "12.99",
        desc: "Tender chicken cooked in aromatic spices.",
        category: "Dinner",
        rating: 4.8,
        stock: 9
    },
    {
        id: "item-23",
        name: "Veg Biryani",
        image: "https://i.ibb.co/hhCmJct/pexels-sohanikamat-7837978.jpg",
        price: "9.49",
        desc: "Aromatic rice with fresh vegetables and herbs.",
        category: "Dinner",
        rating: 4.4,
        stock: 13
    },
    {
        id: "item-24",
        name: "Fish Fry",
        image: "https://i.ibb.co/yF4zdKGV/pexels-saveurssecretes-14831530.jpg",
        price: "13.99",
        desc: "Crispy fried fish with tangy sauce.",
        category: "Dinner",
        rating: 4.7,
        stock: 7
    },
    {
        id: "item-25",
        name: "Egg Curry",
        image: "https://i.ibb.co/Xk8QWB0J/pexels-saveurssecretes-14132109.jpg",
        price: "8.99",
        desc: "Boiled eggs in spicy curry sauce.",
        category: "Dinner",
        rating: 4.3,
        stock: 15
    },
    {
        id: "item-26",
        name: "Dal Tadka",
        image: "https://i.ibb.co/MyBXGwdq/pexels-shiva-kumar-146021-4595313.jpg",
        price: "7.99",
        desc: "Yellow lentils tempered with Indian spices.",
        category: "Dinner",
        rating: 4.5,
        stock: 18
    },
    {
        id: "item-27",
        name: "Pasta Alfredo",
        image: "https://i.ibb.co/dJbywF74/pexels-jerchung-2204771.jpg",
        price: "11.49",
        desc: "Creamy Alfredo pasta with parmesan.",
        category: "Dinner",
        rating: 4.6,
        stock: 11
    },
    {
        id: "item-28",
        name: "Chicken Burger",
        image: "https://i.ibb.co/NgfXhLWb/pexels-lucasandrade-10679779.jpg",
        price: "9.99",
        desc: "Grilled chicken patty with lettuce and tomato.",
        category: "Dinner",
        rating: 4.4,
        stock: 16
    },
    {
        id: "item-29",
        name: "Veggie Pizza",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
        price: "10.49",
        desc: "Pizza loaded with fresh vegetables.",
        category: "Dinner",
        rating: 4.5,
        stock: 13
    },
    {
        id: "item-30",
        name: "Butter Naan",
        image: "https://i.ibb.co/ym4JrbNQ/pexels-beyza-yalcin-153182170-30892992.jpg",
        price: "3.99",
        desc: "Soft Indian bread with butter.",
        category: "Dinner",
        rating: 4.2,
        stock: 22
    },
    {
        id: "item-31",
        name: "Mushroom Soup",
        image: "https://i.ibb.co/CpQtdxLM/pexels-anna-pyshniuk-2453945-4103375.jpg",
        price: "6.49",
        desc: "Creamy soup with fresh mushrooms.",
        category: "Dinner",
        rating: 4.3,
        stock: 19
    },
    {
        id: "item-32",
        name: "Tandoori Roti",
        image: "https://i.ibb.co/HD57Yrgd/pexels-dhiraj-jain-207743066-12737800.jpg",
        price: "2.99",
        desc: "Whole wheat Indian bread cooked in tandoor.",
        category: "Dinner",
        rating: 4.1,
        stock: 24
    },
    {
        id: "item-33",
        name: "Greek Salad",
        image: "https://i.ibb.co/1YH7vtxS/pexels-roman-odintsov-4958948.jpg",
        price: "7.49",
        desc: "Fresh salad with feta, olives, and veggies.",
        category: "Dinner",
        rating: 4.4,
        stock: 17
    },
];
export default allItems