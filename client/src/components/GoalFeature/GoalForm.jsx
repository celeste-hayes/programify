import React, { useState } from 'react';

export default function GoalForm({ addGoal }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addGoal(value);
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="GoalForm">
            <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                className="goal-input" 
                placeholder="What is the goal today?" 
            />
            <button type="submit" className="goal-btn">Add Goal</button>
        </form>
    );
}