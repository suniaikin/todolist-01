import { PropsTypes } from "./Types";
import { Button } from "./Button";

export const TodolistItem = ({ tasks, title }: PropsTypes) => {
    const listItems = tasks.map((task) => {
        return (
            <li>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>{"  "}
                <Button label="x" />
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
                <Button label="+" />
            </div>
            <ul>{tasksList}</ul>
            <div>
                <Button label="All" />
                <Button label="Active" />
                <Button label="Completed" />
            </div>
        </div>
    );
};
