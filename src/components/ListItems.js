
import React from 'react';
// import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item => 
        {
        return <div className="list" key={item.key}>
            <p>
                {/* {item.text} */}
                <input type="text" 
                id={item.key} 
                value={item.text}
                onChange={
                    (e) => {
                        props.setUpdate(e.target.value, item.key)
                    }
                }
                />
            <span>
            <i className="fa fa-trash iconSize" aria-hidden="true" onClick={() => props.deleteItem(item.key)}></i>
            </span>
            </p>
        </div>
    }
    )
    return (
        <div>
            {/* <FlipMove duration={500} easing="ease-in-out"> */}
            {listItems}
            {/* </FlipMove> */}
            </div>
    )
}
export default ListItems;