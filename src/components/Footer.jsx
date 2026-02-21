// src/components/Footer.jsx
import React from 'react';

// A simple SVG icon component for social media links
const SocialIcon = ({ children }) => (
    <a href="#" className="text-brand-cream hover:text-brand-gold transition-colors">
        {children}
    </a>
);

const Footer = () => {
    return (
        <footer className="bg-brand-brown py-12">
            <div className="container mx-auto px-6 text-center text-brand-cream">
                <h3 className="text-3xl font-serif tracking-wider mb-4">
                    The Daily Grind
                </h3>

                <div className="flex justify-center space-x-6 mb-8">
                    <SocialIcon>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                    </SocialIcon>
                    <SocialIcon>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072z" /><path d="M12 6.845c-2.839 0-5.155 2.316-5.155 5.155s2.316 5.155 5.155 5.155 5.155-2.316 5.155-5.155-2.316-5.155-5.155-5.155zm0 8.31c-1.745 0-3.155-1.41-3.155-3.155s1.41-3.155 3.155-3.155 3.155 1.41 3.155 3.155-1.41 3.155-3.155 3.155zm4.908-6.428c-.779 0-1.41.631-1.41 1.41s.631 1.41 1.41 1.41 1.41-.631 1.41-1.41-.631-1.41-1.41-1.41z" /></svg>
                    </SocialIcon>
                    <SocialIcon>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.07 6.41c.54.23.9.74 1.04 1.3l.03.18c.22 1.3.22 4.12.22 4.12s0 2.82-.22 4.12l-.03.18c-.14.56-.5 1.07-1.04 1.3l-.15.06c-1.3.25-6.92.25-6.92.25s-5.62 0-6.92-.25l-.15-.06c-.54-.23-.9-.74-1.04-1.3l-.03-.18C3 15.02 3 12.2 3 12.2s0-2.82.22-4.12l.03-.18c.14-.56.5-1.07 1.04-1.3l.15-.06c1.3-.25 6.92-.25 6.92-.25s5.62 0 6.92.25l.15.06zM9.93 15.15V9.25l5.2 2.95-5.2 2.95z" /></svg>
                    </SocialIcon>
                </div>

                <p className="text-sm text-brand-cream text-opacity-60">
                    © {new Date().getFullYear()} The Daily Grind Cafe. All Rights Reserved. <br />
                    <span className="opacity-75">Concept Project by Vikas Saini</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer; 