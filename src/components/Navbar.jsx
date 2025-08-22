// src/components/Navbar.jsx
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

const navigation = [
    { name: 'About', to: 'about' },
    { name: 'Menu', to: 'menu' },
    { name: 'Location', to: 'location' },
];

export default function Navbar() {
    return (
        <Disclosure as="nav" className="absolute top-0 left-0 right-0 z-50 bg-transparent">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex h-16 justify-between items-center">
                            <div className="flex-shrink-0">
                                <Link to="top" smooth={true} duration={500} className="text-2xl font-serif text-white tracking-wider cursor-pointer">
                                    The Daily Grind
                                </Link>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden sm:flex sm:items-center sm:space-x-8">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-50} // Adjust offset for section titles
                                        className="text-white font-light hover:text-brand-gold transition-colors cursor-pointer"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile menu button */}
                            <div className="flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-gold">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Panel */}
                    <Disclosure.Panel className="sm:hidden bg-brand-brown/95 backdrop-blur-sm">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                >
                                    <Disclosure.Button
                                        as="span"
                                        className="block rounded-md px-3 py-2 text-base font-medium text-brand-cream hover:bg-white/10 hover:text-white cursor-pointer"
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}