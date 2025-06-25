# 🛒 Food Cart

Food Cart is a modern, full-featured food ordering platform where you can browse, order, and manage delicious dishes with ease. Enjoy a seamless experience with authentication, cart management, order history, and a beautiful, responsive UI.

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?logo=vite)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-9.x-FFCA28?logo=firebase)](https://firebase.google.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.6.x-38B2AC?logo=mongodb)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌐 Live Demo

[Food Cart](https://food-cart-app1.web.app)

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Project Map](#project-map)

---

## 📌 About

**Food Cart** is your one-stop solution for discovering and ordering food online. Whether you’re craving a quick snack or a full meal, Food Cart connects you with a variety of dishes and a smooth ordering experience.

---

## ✨ Features

- 🍽️ **Browse Menu:** Explore dishes by category and filter by popularity or type
- 🛒 **Cart Management:** Add, remove, and update items in your cart
- 🔒 **Authentication:** Secure login and registration with Firebase
- 📦 **Order History:** View your past orders and order details
- 📱 **Responsive Design:** Optimized for all devices
- 🎨 **Modern UI:** Built with Tailwind CSS and React
- 🚀 **Fast & Smooth:** Powered by Vite for instant reloads
- 🔔 **Toast Notifications:** Instant feedback for user actions

---

## 🖼️ Screenshots

> _Add screenshots or GIFs here to showcase your UI!_
![Menu Page](image.png)
![Order History](image-1.png)
![Cart](image-2.png)
![Checkout](image-3.png)

---

## 🛠️ Tech Stack

| Tool                                                        | Description                                        |
| ----------------------------------------------------------- | -------------------------------------------------- |
| [React](https://reactjs.org/)                               | UI library for building component-based interfaces  |
| [Vite](https://vitejs.dev/)                                 | Fast bundler and dev server                        |
| [Tailwind CSS](https://tailwindcss.com/)                    | Utility-first CSS framework                        |
| [Firebase](https://firebase.google.com/)                    | Auth & backend services                            |
| [MongoDB](https://www.mongodb.com/)                         | NoSQL database for storing orders and menu         |
| [React Router](https://reactrouter.com/)                    | Client-side routing                                |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications                                |
| [React Icons](https://react-icons.github.io/react-icons/)   | Icon packs                                         |

---

## 🗺️ Project Map

The Food Cart project is organized as follows:

```
foodcart-client/
├── public/                  # Static assets and index.html
├── src/
│   ├── assets/              # Images, logos, and static media
│   ├── Components/          # Reusable UI components (Navbar, Loader, Footer, etc.)
│   ├── Context/             # React context for global state (e.g., FoodCartContext)
│   ├── Firebase/            # Firebase configuration and initialization
│   ├── hook/                # Custom React hooks (e.g., Axios interceptors)
│   ├── Layout/              # Main layout components
│   ├── Pages/               # Main page components (Menu, Cart, Checkout, etc.)
│   ├── Router/              # App routing configuration
│   ├── index.css            # Global styles
│   ├── main.jsx             # Entry point for React
├── .env                     # Environment variables (not committed)
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

- **Pages/**: Contains all main route components (Menu, Cart, Checkout, Order, etc.)
- **Components/**: Shared UI elements (Navbar, Loader, Footer, etc.)
- **Context/**: Holds React context for authentication and global state.
- **Firebase/**: Firebase setup and configuration files.
- **Assets/**: Images and static files used throughout the app.

---

## 💻 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/foodcart-client.git
cd foodcart-client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your Firebase and API credentials as needed.

### 4. Start the development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 💡 Usage

- **Browse Menu:** View and filter dishes by category or popularity.
- **Add to Cart:** Add your favorite dishes to the cart.
- **Checkout:** Place your order securely.
- **Order History:** View your previous orders and details.
- **Authentication:** Register or log in to manage your orders and cart.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> _Made with ❤️ by [Your Name](https://github.com/your-username)_
