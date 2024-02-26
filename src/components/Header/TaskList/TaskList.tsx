import React from "react";

const TaskList = () => {
    return (
        <div className="bg-light-nav dark:bg-dark-nav text-light-text dark:text-dark-text">
            <div className="">Незавершенные задачи</div>
            <ul>
                <li>1. иследование</li>
                <li>2. Важное</li>
            </ul>
        </div>
    )
}

export default TaskList