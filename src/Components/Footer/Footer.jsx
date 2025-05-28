import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary/5 border-t border-primary/10">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Brand & Copyright */}
                <div className="text-center md:text-left">
                    <span className="text-2xl font-extrabold text-primary tracking-tight">FOODIED</span>
                    <p className="text-gray-500 text-sm mt-1">
                        &copy; {new Date().getFullYear()} Foodied. All rights reserved.
                    </p>
                </div>
                {/* Links */}
                <div className="flex gap-6">
                    <a href="/" className="text-gray-600 text-sm hover:text-primary transition">Home</a>
                    <a href="/menu" className="text-gray-600 text-sm hover:text-primary transition">Menu</a>
                    <a href="/about" className="text-gray-600 text-sm hover:text-primary transition">About</a>
                    <a href="/contact" className="text-gray-600 text-sm hover:text-primary transition">Contact</a>
                </div>
                {/* Socials */}
                <div className="flex gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;