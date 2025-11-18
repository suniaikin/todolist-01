import "./App.css";
import { TodolistItem } from "./TodolistItem";
import { TasksType } from "./types";
import { useState } from "react";
import { FilterValuesType } from "./types";
import { v1 } from "uuid";

export function App() {
    //BLL
    const todolistTitle_1: string = "What to learn";

    //state
    const [tasks, setTasks] = useState<TasksType[]>([
        { id: v1(), title: "Panera Bread", isDone: true },
        { id: v1(), title: "Starbucks", isDone: false },
        { id: v1(), title: "Olive Garden", isDone: false },
    ]);


    const deleteTask = (taskId: TasksType["id"]) => {
        const nextTasks: TasksType[] = tasks.filter((t) => t.id !== taskId);
        setTasks(nextTasks);
    };

    const createTask = (title: string) => {
	const newTask: TaskType = {
		id: v1(),
		title: title,
		isDone: false		
	}
	const newState: TasksType[] = [...tasks, newTask]
	setTasks(newState]);

    }




    const [filter, setFilter] = useState<FilterValuesType>("all");

    const changeFilter = (filter: FilterValuesType) => {
		setFilter(filter);
	};

    const getFilteredTasks = (
        tasks: TasksType[],
        filter: FilterValuesType
    ): TasksType[] => {
        switch (filter) {
            case "active":
                return tasks.filter((t) => !t.isDone);
            case "completed":
                return tasks.filter((t) => t.isDone);
            default:
                return tasks;
        }
    };
    return (
        <div className="App">
            <TodolistItem
                title={todolistTitle_1}
                tasks={getFilteredTasks(tasks, filter)}
                deleteTask={deleteTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}
