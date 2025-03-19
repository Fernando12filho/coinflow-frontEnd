import React, { useState } from 'react';
import Header from './Header';
import './style.css';


const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        setMessage('Thank you for subscribing!');
    };

    // TODO: Add is subscribed on backend

    return (
        <div className="newsletter">
            <Header />
            <div className='newsletter-form container'>
                <h2 className='newsletter-form-container-children'>Subscribe to our Newsletter</h2>
                <form onSubmit={handleSubmit} className='newsletter-form-container-children'>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
                {message && <p>{message}</p>}
            </div>
            <div className='article-newsletter container'>
                <h1>Past Newsletters</h1>
                <div className='grid'>
                    <p>Nothing Yet</p>
                </div>
            </div>
            <div className='article-newsletter container'>
                <h1>Articles</h1>
                <div className='grid'>
                    <p>Nothing Yet</p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;