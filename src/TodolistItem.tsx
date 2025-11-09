import { PropsTypes } from "./Types";

export const TodolistItem = (props: PropsTypes) => {
    const listItems = props.tasks.map((task) => {
        return (
            <li>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
            </li>
        );
    });

    return (
        <div className="lists">
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>{listItems}</ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
