import { useState } from 'react';

interface FormToDoProps {
  onSubmit: (texto: string) => void;
}

export const FormToDo = ({ onSubmit }: FormToDoProps) => {
  const [textoToDo, setTextoToDo] = useState('');
  // console.log(textoToDo)

  const confirmar = () => {
    onSubmit(textoToDo);
    // console.log(textoToDo)
    // console.log("confirmado!")
    setTextoToDo('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="O que tem pra hoje?"
        value={textoToDo}
        onChange={event => setTextoToDo(event.target.value)}
      ></input>

      <button type="button" onClick={confirmar}>
        Confirmar
      </button>
    </div>
  );
};
