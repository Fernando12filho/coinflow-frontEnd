import React, { useState } from 'react';
import Header from './Header';
import './style.css';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
axios.defaults.withCredentials = true;


const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const user = useAuth();

    // TODO: Needs to refresh token on newsletter page
    // TODO: Needs to check if user is subscribed on newsletter page
    // TODO: Close button in case user just dont want to look at it 

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            axios.post('/newsletter/subscribe', {
                Headers: {
                    Authorization: `Bearer ${user.auth.access_token}`,
                },
            })
            .then((response) => {
                if (response.data) {
                    setMessage(response.data.message);

                } else {
                    setMessage(response.data.message || 'Failed to subscribe!');
                }
            })
        } catch (error) {
            console.error(error);
            setMessage('Failed to subscribe!');
            return;
        }
    };

    console.log(user);

    // TODO: Add is subscribed on backend

    return (
        <div className="newsletter">
            <Header />

            {
                user.user.isSubscribed ? (
                    <div className="newsletter-subscribed container"style={{display: 'none'}}>
                        <h1>Subscribed</h1>
                        <p>You are subscribed to our newsletter</p>
                    </div>
                ) : (
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
                )
            }

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