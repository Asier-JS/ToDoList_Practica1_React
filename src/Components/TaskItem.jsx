import React from "react"

function TaskItem({title, id, onClick}){
    return(
        <li onClick={() => onClick(id)}>{title}</li>
    )
}

export default TaskItem