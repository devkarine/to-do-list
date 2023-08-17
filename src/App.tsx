import { useState } from 'react';
import { FormToDo } from './components/FormToDo';
import { ListToDo } from './components/ListToDo';
import { ToDoInterface } from './components/ToDo';

function App() {
  const [toDos, setToDos] = useState<ToDoInterface[]>([])

  function handleCheckClick(index: number){
    setToDos(prev => prev.map((toDo, i) =>{
      if(index === i){
        return {...toDo, complete: !toDo.complete}
      }
      return toDo
    }))


  }
  function handleSubmit(toDo: ToDoInterface){
    if(toDos.includes({task: toDo.task, complete: false}) || toDos.includes({task: toDo.task, complete:true})){
      return
    }
    setToDos(prev => [...prev, toDo])
  }
  return (
    <>
      <FormToDo handleSubmit={handleSubmit}  />
      <ListToDo toDos={toDos} handleCheckClick={handleCheckClick}/>
    </>
  );
}
export default App;
