import React, { useState } from 'react';
import Header from './Header';

const Forum = () => {
    const [questions, setQuestions] = useState([
        // Sample questions, replace with actual data fetching logic
        { id: 1, text: 'How to use CoinFlow?', likes: 10 },
        { id: 2, text: 'What is the best way to track my expenses?', likes: 8 },
    ]);
    const [newQuestion, setNewQuestion] = useState('');

    const handlePostQuestion = () => {
        if (newQuestion.trim()) {
            setQuestions([
                ...questions,
                { id: questions.length + 1, text: newQuestion, likes: 0 },
            ]);
            setNewQuestion('');
        }
    };

    return (
        <div>
            <Header />
            <h1>Forum</h1>
            <div>
                <h2>Most Like Questions</h2>
                <ul>
                    {questions
                        .sort((a, b) => b.likes - a.likes)
                        .map((question) => (
                            <li key={question.id}>{question.text}</li>
                        ))}
                </ul>
            </div>
            <div>
                <h2>Post a Question</h2>
                <textarea
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Type your question here..."
                />
                <button onClick={handlePostQuestion}>Post</button>
            </div>
            {/* Future implementation ideas:
                    - Add like button to each question
                    - Implement backend integration for fetching and posting questions
                    - Add user authentication for posting questions
                    - Add comments section for each question
            */}
        </div>
    );
};

export default Forum;