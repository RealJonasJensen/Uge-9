import React from "react";

const ItemList = (props) => {
    return (
        <li style={{textDecoration: props.completed ? "line-through" : null}} >
            <span onClick={props.onUpdate} >{props.name}</span>
            <span style={{cursor: "pointer"}} onClick={props.onDelete} > X </span>
        </li>
    )

}

export default ItemList;