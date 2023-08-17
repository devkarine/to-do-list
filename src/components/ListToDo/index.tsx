import { ToDo, ToDoInterface } from '../ToDo';

interface ListToDoProps {
  toDos: ToDoInterface[];
  handleCheckClick: (index: number) => void;
}

export function ListToDo({ toDos, handleCheckClick }: ListToDoProps) {
  return (
    <ul>
      {toDos.map((toDo, index) => (
        <ToDo key={index} toDo={toDo} index={index} handleCheckClick={handleCheckClick} />
      ))}
    </ul>
  );
}
