import React from 'react';

function Card(props){
    return(
        <ul>
                <li className={`task ${props.status ? 'completed':''}`} >
                    <div>Task: {props.title}</div>
                    <button onClick={props.onChange}>Complete</button>
                    
                    <button onClick={props.onDel}>Delete</button>
                </li>
        </ul>
    )
}
export default Card;