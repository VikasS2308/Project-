// src/components/Menu.jsx
import React from 'react';
import menuBgImage from '../assets/coffee-beans.jpg';

const menuItems = {
    'Espresso & Coffee': [
        { name: 'Espresso', price: '3.00' },
        { name: 'Americano', price: '3.50' },
        { name: 'Drip Coffee', price: '3.00' },
        { name: 'Pour Over', price: '5.00' },
    ],
    'Milk & Latte': [
        { name: 'Cappuccino', price: '4.50' },
        { name: 'Latte', price: '4.50' },
        { name: 'Mocha', price: '5.00' },
        { name: 'Macchiato', price: '3.50' },
    ],
    'Teas & More': [
        { name: 'Chai Latte', price: '4.75' },
        { name: 'Matcha Latte', price: '5.25' },
        { name: 'Hot Chocolate', price: '4.00' },
        { name: 'Artisan Teas', price: '3.50' },
    ],
};

const Menu = () => {
    return (
        <section
            id="menu"
            className="relative py-24 bg-cover bg-center"
            style={{ backgroundImage: `url(${menuBgImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-90"></div>
            <div className="relative container mx-auto px-6 text-white">
                <h2 className="font-serif text-5xl text-center font-bold mb-16">
                    Our Menu
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {Object.entries(menuItems).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-2xl font-serif text-brand-gold border-b-2 border-brand-gold border-opacity-50 pb-2 mb-6">
                                {category}
                            </h3>
                            <ul className="space-y-4">
                                {items.map((item) => (
                                    <li key={item.name} className="flex justify-between items-baseline">
                                        <span className="text-lg text-brand-cream">{item.name}</span>
                                        <span className="flex-grow border-b border-dotted border-gray-600 mx-3"></span>
                                        <span className="text-lg text-brand-gold font-semibold">${item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;