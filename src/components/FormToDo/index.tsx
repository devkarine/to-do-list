import { useState } from 'react';
import { ToDoInterface } from '../ToDo';

interface FormTodoProps {
  handleSubmit: (toDo: ToDoInterface) => void;
  
}

export const FormToDo = ({ handleSubmit }: FormTodoProps) => {
  const [textoToDo, setTextoToDo] = useState('');

  return (
    <div>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          handleSubmit({ task: textoToDo, complete: false });
          setTextoToDo('')
        }}
      >
        <input
          type="text"
          placeholder="O que tem pra hoje?"
          value={textoToDo}
          onChange={event => setTextoToDo(event.target.value)}
        ></input>

        <button type="submit">Confirmar</button>
      </form>
    </div>
  )
};
