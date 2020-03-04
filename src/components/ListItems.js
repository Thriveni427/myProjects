
import React from 'react';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item => 
        {
        return <div className="list" key={item.key}>
            <p>{item.text}
            <span>
            <i className="fa fa-trash iconSize" aria-hidden="true" onClick={() => props.deleteItem(item.key)}></i>
            </span>
            </p>
        </div>
    }
    )
    return (
        <div>{listItems}</div>
    )
}
export default ListItems;