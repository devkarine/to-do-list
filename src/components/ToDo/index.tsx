import { ToDo } from "../../types"

interface SingleToDoProps {
    toggleToDo: (id: string) => void;
    toDo : ToDo;
  }

export const SingleToDo  = ({toggleToDo, toDo} : SingleToDoProps ) => {


    return (
        <p>
            <label>
                <input type="checkbox" onChange={()=>toggleToDo(toDo.id)} defaultChecked={toDo.feito}></input>{toDo.texto}
            </label>
        </p>

    )

}