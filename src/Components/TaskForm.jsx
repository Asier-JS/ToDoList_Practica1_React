import React, { useState } from "react"
import idGenerator from "./idgenerator"

function TaskForm( { onSubmit } ){
    const [title, setTitle] = useState("")
    const [error, setError] = useState("")

    function AddTitle(event){
        const newTitle = event.target.value
        setTitle(newTitle)
        if (error && newTitle){
            setError("")
        }
    }

    function AddTask (event){
        event.preventDefault()
        if(!title){
            setError("Tienes que introducir un una tarea")
        }else{
            onSubmit({id: idGenerator(), title })
            setTitle("")
            setError("")
        }
        
    }

    return(
    <form onSubmit= {AddTask}>
        <input type="text" value={title} onChange={AddTitle}></input>
        <button type = "submit" >Añadir Tarea</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
    )
}

export default TaskForm