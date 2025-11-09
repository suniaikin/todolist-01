import "./App.css";
import { TodolistItem } from "./TodolistItem";
import { TaskType } from "./Types";

export function App() {
    const todolistTitle_1: string = "What to learn";
    const todolistTitle_2: string = "Songs";
    const tasks_1: TaskType[] = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "React", isDone: false },
    ];
    const tasks_2: TaskType[] = [
        { id: 4, title: "Tea", isDone: true },
        { id: 5, title: "Coffee", isDone: false },
        { id: 6, title: "Potantsuem", isDone: false },
    ];

    return (
        <div className="App">
            <TodolistItem title={todolistTitle_1} tasks={tasks_1}/>
            <TodolistItem title={todolistTitle_2} tasks={tasks_2}/>
        </div>
    );
}
