import React, { useState } from "react";
import GoalForm from "../GoalFeature/GoalForm";
import Progress from "../GoalFeature/Progress";
import { Container } from "react-bootstrap";
import "../../styles/goals.css"; 

export default function GoalSection() {
  const [goals, setGoals] = useState([]);
  const [completedGoals, setCompletedGoals] = useState([]);
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [editedText, setEditedText] = useState("");

  // Add a new goal
  const addGoal = (goal) => {
    setGoals((prevGoals) => [...prevGoals, { id: Date.now(), text: goal, completed: false }]);
  };

  // Toggle completion state of the goal
  const toggleGoalCompletion = (id) => {
    setGoals(goals.map((goal) => goal.id === id ? { ...goal, completed: !goal.completed } : goal));
    if (completedGoals.includes(id)) {
      setCompletedGoals(completedGoals.filter((goalId) => goalId !== id));
    } else {
      setCompletedGoals((prevCompletedGoals) => [...prevCompletedGoals, id]);
    }
  };

  // Delete a goal
  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
    setCompletedGoals(completedGoals.filter((goalId) => goalId !== id));
  };

  // Start editing a goal
  const startEditingGoal = (id, text) => {
    setEditingGoalId(id);
    setEditedText(text);
  };

  // Save edited goal
  const saveEditedGoal = () => {
    setGoals(goals.map((goal) => goal.id === editingGoalId ? { ...goal, text: editedText } : goal));
    setEditingGoalId(null); 
    setEditedText("");
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingGoalId(null);
    setEditedText(""); 
  };

  // Calculate progress
  const progress = (completedGoals.length / goals.length) * 100;

  return (
    <Container className="text-center mt-5">
      <div className="goal-form-container">
        <GoalForm addGoal={addGoal} />
      </div>
      <Progress progress={progress} />
      <div className="GoalWrapper mt-4">
        {goals.length > 0 ? (
          goals.map((goal) => (
            <div key={goal.id} className="Goal">
              {editingGoalId === goal.id ? (
                <div>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="edit-input"
                  />
                  <button onClick={saveEditedGoal} className="save-btn">Save</button>
                  <button onClick={cancelEditing} className="cancel-btn">Cancel</button>
                </div>
              ) : (
                <span
                  className={`goal-text ${goal.completed ? 'completed' : ''}`}
                  onClick={() => toggleGoalCompletion(goal.id)}
                >
                  {goal.text}
                </span>
              )}
              <div className="goal-actions">
                <span
                  onClick={() => startEditingGoal(goal.id, goal.text)}
                  className="edit-link"
                >
                  Edit
                </span>
                <span
                  onClick={() => deleteGoal(goal.id)}
                  className="delete-link"
                >
                  Delete
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="fs-5">Jot down your goals....</p>
        )}
      </div>
    </Container>
  );
}