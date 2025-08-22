import React from 'react';
import heroImage from '../assets/cafe-hero.jpg';

const Hero = () => {
    return (
        <section
            className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-brand-brown opacity-80"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-6xl md:text-8xl font-serif font-black mb-4 tracking-tight">
                    Artisan Coffee. <br /> Masterfully Brewed.
                </h1>
                <p className="text-lg text-brand-cream font-light max-w-lg mx-auto">
                    Experience the perfect cup in a space designed for comfort, creativity, and connection.
                </p>
            </div>
        </section>
    );
};

export default Hero;