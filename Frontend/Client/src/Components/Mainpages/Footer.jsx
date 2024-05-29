import React from 'react';
import "../../App.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="/returns">Returns & Exchanges</a></li>
                        <li><a href="/shipping">Shipping Information</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                        <li><a href="/track">Track Your Order</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h3>Connect with Us</h3>
                    <ul>
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h3>Newsletter Signup</h3>
                    <p>Stay up-to-date with our latest offers and news.</p>
                </div>
                <div className="footer__section">
                    <h3>Help</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Mon-Fri: 9am-5pm IST</p>
                
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2024 NorthStar eCommerce. All rights reserved.</p>
                <ul>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms & Conditions</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
