import {useState} from 'react'

export const FormToDo = () =>{

    const [textoToDo, setTextoToDo] = useState('')

    const confirmar = () =>{
        console.log(textoToDo)
        console.log("confirmado!")
    }
    
    return(
        <div>
        <input type="text" placeholder="O que tem pra hoje?" 
        value={textoToDo} 
        onChange={(event)=>setTextoToDo(event.target.value)}>

        </input>

        <button type="button" onClick={confirmar}>
            Confirmar
        </button>
        </div>
    )

}