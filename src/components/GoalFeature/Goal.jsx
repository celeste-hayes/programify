import React, { useState } from 'react';
import { v4 as UUID } from 'uuid';
import '../../styles/goals.css';  // Ensure this is imported

export default function GoalSection() {
  const [goals, setGoals] = useState([]);

  // Add a new goal
  const addGoal = (goalText) => {
    const newGoal = {
      id: UUID(),
      goal: goalText,
      completed: false,
      isEditing: false,
    };
    setGoals([...goals, newGoal]);
  };

  // Delete a goal
  const deleteGoal = (id) => setGoals(goals.filter((goal) => goal.id !== id));

  // Toggle completion state of the goal
  const toggleComplete = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  // Toggle the edit state of a goal
  const toggleEdit = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, isEditing: !goal.isEditing } : goal
      )
    );
  };

  // Edit the goal
  const editGoal = (newGoalText, id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, goal: newGoalText, isEditing: false } : goal
      )
    );
  };

  return (
    <div className="GoalWrapper">
      <div className="goal-container">
        {/* Goal Form */}
        <GoalForm addGoal={addGoal} />

        {/* Goal List */}
        <div className="goal-list">
          {goals.map((goal) => (
            <div key={goal.id} className="Goal">
              {goal.isEditing ? (
                <EditGoalForm goal={goal} editGoal={editGoal} />
              ) : (
                <>
                  <li
                    className={`goal-text ${goal.completed ? 'completed' : ''}`}
                    onClick={() => toggleComplete(goal.id)}
                  >
                    {goal.goal}
                  </li>
                  <div className="Goal-buttons">
                    <button onClick={() => toggleEdit(goal.id)} className="edit-btn">
                      <i className="fas fa-pen" />
                    </button>
                    <button onClick={() => deleteGoal(goal.id)} className="delete-btn">
                      <i className="fas fa-trash" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Form for adding new goals
function GoalForm({ addGoal }) {
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
      <button type="submit" className="goal-btn">
        Add Goal
      </button>
    </form>
  );
}

// Form for editing existing goal
function EditGoalForm({ goal, editGoal }) {
  const [value, setValue] = useState(goal.goal);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      editGoal(value, goal.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="GoalForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="goal-input"
        placeholder="Update goal"
      />
      <button type="submit" className="goal-btn">
        Save
      </button>
    </form>
  );
}