import React from 'react';
import Card from './Card';
function List(props){
    return(
        <ul>
            {props.data.map((task,index)=>(
            <Card
            key={index}
            title={task.title}
            status = {task.status}
            onDel = {()=>props.onDel(index)}
            onChange = {()=> props.onChange(index)}
            />
               
            ))}
        </ul>
    )
}
export default List;