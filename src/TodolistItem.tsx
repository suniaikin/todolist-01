import { PropsTypes } from "./Types";

export const TodolistItem = ({ tasks, title }: PropsTypes) => {
    const listItems = tasks.map((task) => {
        return (
            <li>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
            </li>
        );
    });

    const tasksList =
        tasks.length === 0 ? <p>No tasks available</p> : <ul>{listItems}</ul>;

    return (
        <div className="lists">
            <h3>{title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>           {tasksList}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
