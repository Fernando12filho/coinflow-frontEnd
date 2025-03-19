import React, { useState } from 'react';
import Header from './Header';

const InvoiceMK = () => {
    const [invoice, setInvoice] = useState({
        sender: '',
        receiver: '',
        amount: '',
        date: '',
        transactionId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoice({
            ...invoice,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the invoice submission, e.g., send it to a server or save it locally
        console.log('Invoice submitted:', invoice);
    };

    return (
        <div>
            <Header />
            <h2>Invoice Maker</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Sender:</label>
                    <input type="text" name="sender" value={invoice.sender} onChange={handleChange} required />
                </div>
                <div>
                    <label>Receiver:</label>
                    <input type="text" name="receiver" value={invoice.receiver} onChange={handleChange} required />
                </div>
                <div>
                    <label>Amount (BTC):</label>
                    <input type="number" name="amount" value={invoice.amount} onChange={handleChange} required />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" name="date" value={invoice.date} onChange={handleChange} required />
                </div>
                <div>
                    <label>Transaction ID:</label>
                    <input type="text" name="transactionId" value={invoice.transactionId} onChange={handleChange} required />
                </div>
                <button type="submit">Generate Invoice</button>
            </form>
        </div>
    );
};

export default InvoiceMK;