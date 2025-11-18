import { Button } from "./Button";
import { TasksType } from "./types";
import { FilterValuesType } from "./types";


type TodolistItemProps = {
    title: string;
    tasks: TasksType[];
    deleteTask: (taskId: TasksType["id"]) => void;
    changeFilter: (filter: FilterValuesType) => void;
};

export const TodolistItem = ({ 
	tasks, 
	title, 
	deleteTask, 
	changeFilter 
}: TodolistItemProps) => {
    const listItems = tasks.map((task) => {
	const deleteTaskHandler = () => deleteTask(task.id)
	        return (
            <li>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button label="x" onClickHandler={deleteTaskHandler} />
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
                <Button label="All" onClickHandler={() => changeFilter('all')}/>
                <Button label="Active" onClickHandler={() => changeFilter('active')}/>
                <Button label="Completed" onClickHandler={() => changeFilter('completed')}/>
            </div>
        </div>
    );
};
