import React from "react";
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return(
        <h2 className="title">🤖 You finish {completed} reminders of {total} 🤖</h2>
    );
}

export {TodoCounter};