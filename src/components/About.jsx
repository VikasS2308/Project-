// src/components/About.jsx
import React from 'react';
import interiorImage from '../assets/cafe-interior.jpg';

const About = () => {
    return (
        <section id="about" className="bg-brand-cream py-24">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={interiorImage}
                        alt="Interior of The Daily Grind Cafe"
                        className="rounded-lg shadow-2xl w-full h-auto"
                    />
                </div>

                {/* Text Content Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="font-serif text-5xl text-brand-brown font-bold mb-6">
                        Our Story
                    </h2>
                    <p className="text-brand-brown text-opacity-80 mb-4 leading-relaxed">
                        The Daily Grind was born from a simple idea: that coffee is more than just a morning ritual, it's a moment of connection. With ourselves, with our work, and with the community around us.
                    </p>
                    <p className="text-brand-brown text-opacity-80 leading-relaxed">
                        We source our beans from the world's most renowned regions and roast them in-house to bring out their richest flavors. Every cup is a testament to our passion for quality and our commitment to the craft of coffee.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;