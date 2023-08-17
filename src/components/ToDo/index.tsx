import { CheckBadgeIcon } from '@heroicons/react/24/outline';

export interface ToDoInterface {
  task: string;
  complete: boolean;
}

interface ToDoProps {
  toDo: ToDoInterface;
  index: number;
  handleCheckClick: (index: number) => void;
}

export function ToDo({ toDo, handleCheckClick, index }: ToDoProps) {
  return (
    <li>
      {toDo.task}{' '}
        <CheckBadgeIcon
          color={toDo.complete ? 'green' : 'red'}
          width={18}
          height={18}
          onClick={() => handleCheckClick(index)}

        />
        {toDo.complete}
    </li>
  );
}
