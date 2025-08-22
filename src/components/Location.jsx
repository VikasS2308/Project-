// src/components/Location.jsx
import React from 'react';

const Location = () => {
    // PASTE THE 'src' URL from your Google Maps embed code here
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.836561722883!2d-73.9926720845947!3d40.72153997933095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259837a783b99%3A0x1f55734e56580979!2sStumptown%20Coffee%20Roasters!5e0!3m2!1sen!2sus!4v1621526488345!5m2!1sen!2sus";

    return (
        <section id="location" className="bg-brand-cream py-24">
            <div className="container mx-auto px-6">
                <h2 className="font-serif text-5xl text-center text-brand-brown font-bold mb-16">
                    Find Us
                </h2>
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Side: Address & Hours */}
                    <div className="lg:w-1/3 text-brand-brown">
                        <div className="mb-8">
                            <h3 className="text-2xl font-serif text-brand-gold mb-3">Address</h3>
                            <p className="text-lg">
                                123 Coffee Lane<br />
                                Brooklyn, NY 11201
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif text-brand-gold mb-3">Hours</h3>
                            <ul className="text-lg space-y-1">
                                <li><span className="font-bold w-24 inline-block">Mon - Fri</span> 7am - 7pm</li>
                                <li><span className="font-bold w-24 inline-block">Saturday</span> 8am - 8pm</li>
                                <li><span className="font-bold w-24 inline-block">Sunday</span> 8am - 6pm</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Google Map */}
                    <div className="lg:w-2/3 w-full h-96">
                        <iframe
                            src={mapSrc}
                            className="w-full h-full border-0 rounded-lg shadow-2xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;