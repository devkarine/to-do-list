import { useState } from 'react';
import { FormToDo } from './components/FormToDo';
import { ToDo } from './types';

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

  return (
    <>
      <FormToDo onSubmit={onSubmit} />

      {toDos.map(obj => (
        <p key={obj.id}>{obj.texto}</p>
      ))}
    </>
  );
}
export default App;
