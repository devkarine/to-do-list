import { useState } from 'react';
import { FormToDo } from './components/FormToDo';
import { ToDo } from './types';
import { SingleToDo } from './components/ToDo';


function App() {
  const [toDos, setToDos] = useState<ToDo[]>([
    { feito: true, texto: 'Saudade', id: Math.random().toString() }
  ]);

  const onSubmit = (texto: string) => {
    const toDo: ToDo = {
      feito: false,
      texto,
      id: Math.random().toString()
    };

    setToDos(laele => [...laele, toDo]);
  };

  const toggleToDo = (id:string) =>{
      console.log("onde estamos",id)
      const novosToDos = [...toDos]
      const toDoIndex = toDos.findIndex(toDo => toDo.id === id) 
      if (toDoIndex!== -1){
        novosToDos[toDoIndex].feito = !novosToDos[toDoIndex].feito;
        setToDos(novosToDos)
      }

    }

  console.log(toDos)
  return (
    <>
      <FormToDo onSubmit={onSubmit} />

      {toDos.map(obj => (
        <SingleToDo key={obj.id} toggleToDo={toggleToDo} toDo={obj}/>
      ))}
      <h2>ToDos Concluidos</h2>
      {toDos.filter(toDo => toDo.feito).map(obj => (
        <SingleToDo key={obj.id} toggleToDo={toggleToDo} toDo={obj}/>
      ))}
    </>
  );
}
export default App;
