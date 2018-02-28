import React from "react";


const ItemList = (props) => {
    return (
        <li style={{color: props.completed ? "green" : "red"}} >
            {props.name}
        </li>
    )

}



export default ItemList;