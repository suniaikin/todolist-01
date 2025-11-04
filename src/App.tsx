import './App.css'
import { TodolistItem } from './TodolistItem'

export function App() {
  return (
      <div className="App">
          <TodolistItem title="What to learn" />
          <TodolistItem title="Songs" />
          <TodolistItem title="Books" />
      </div>
  );
}