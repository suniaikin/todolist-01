import "./App.css";
import { TodolistItem } from "./TodolistItem";
import { TaskType } from "./Types";

export function App() {
    //BLL
    const todolistTitle_1: string = "What to learn";

    //state
    const [tasks, setTasks] = useState<TaskType[]>([
        { id: 1, title: "Panera Bread", isDone: true },
        { id: 2, title: "Starbucks", isDone: false },
        { id: 3, title: "Olive Garden", isDone: false },
    ])

    const deleteTask = (taskId: TaskType["id"]) => {
	// Create a new array without the task with the given id
		const nextTasks: TaskType[] = tasks.filter(t => t.id !== taskId);
	// Update the state with the new array
		setTasks(nextTasks);
	}
    

    // GUI
    return (
        <div className="App">
            <TodolistItem title={todolistTitle_1} tasks={tasks_1} />
        </div>
    );
}
