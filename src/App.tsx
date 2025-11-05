import './App.css'
import { TodolistItem } from './TodolistItem'

const list1 = { title: "What to learn" };
 const list2 = { title: "Songs" };
 const list3 = { title: "Books" };


export function App() {
   return (
       <div className="App">
           <TodolistItem {...list1} />
           <TodolistItem {...list2} />
           <TodolistItem {...list3} />
       </div>
   );
}