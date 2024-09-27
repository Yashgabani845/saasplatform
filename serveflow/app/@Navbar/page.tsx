"use client";

import React from 'react';
import Link from 'next/link';
import './style.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link href="/">SaaSBrand</Link>
            </div>
            <ul className="navbar-links">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div className="navbar-cta">
                <Link href="/login" className="cta-button">Login</Link>
                <Link href="/signup" className="cta-button signup-button">Sign Up</Link>
            </div>
        </nav>
    );
}
