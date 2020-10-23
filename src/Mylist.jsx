import React from 'react';

const Mylist = (props) => {
    
    return (
        <>
            <div className = "list">
                <button 
                className = "crossbtn" 
                onClick = {() => {
                    props.onSelect(props.id);
                }}

                >x</button>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default Mylist;