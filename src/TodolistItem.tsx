import { Button } from "./Button";
import { TasksType } from "./types";
import { FilterValuesType } from "./types";
import { useRef, useState } from "react";

type TodolistItemProps = {
    title: string;
    tasks: TasksType[];
    deleteTask: (taskId: TasksType["id"]) => void;
    changeFilter: (filter: FilterValuesType) => void;
    createTask: (title: TasksType["title"]) => void;
};

export const TodolistItem = ({
    tasks,
    title,
    deleteTask,
    changeFilter,
    createTask,
}: TodolistItemProps) => {
    const listItems = tasks.map((task) => {
        const deleteTaskHandler = () => deleteTask(task.id);
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button label="x" onClickHandler={deleteTaskHandler} />
            </li>
        );
    });

    const [taskInput, setTaskInput] = useState("");

    const tasksList =
        tasks.length === 0 ? <p>No tasks available</p> : <ul>{listItems}</ul>;

    const createTaskHandler = () => {
        createTask(taskInput);
        setTaskInput("");
    };

    return (
        <div className="lists">
            <h3>{title}</h3>
            <div className="input-form">
                <input
                    placeholder="min task lenght is 3 charters"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.currentTarget.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            createTaskHandler();
                        }
                    }}
                />
                <Button
                    label="+"
                    disabled={taskInput.length === 0 || taskInput.length > 10}
                    onClickHandler={createTaskHandler}
                />
                {taskInput && taskInput.length <= 10 && (
                    <div>max lenght must be less than 10</div>
                )}
                {taskInput && taskInput.length > 10 && (
                    <div style={{ color: "red" }}>task title is too long!</div>
                )}
            </div>
            <ul>{tasksList}</ul>
            <div className="buttons_bottom">
                <Button
                    label="All"
                    onClickHandler={() => changeFilter("all")}
                />
                <Button
                    label="Active"
                    onClickHandler={() => changeFilter("active")}
                />
                <Button
                    label="Completed"
                    onClickHandler={() => changeFilter("completed")}
                />
            </div>
        </div>
    );
};
