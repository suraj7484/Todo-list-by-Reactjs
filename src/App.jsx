import React, { useState } from 'react';
import './index.css';
import Mylist from './Mylist'

const App = () => {

    const [eleName, setEleName] = useState("");
    const [insertBtn, setInsertBtn] = useState([])

    const insert = (event) => {
        setEleName(event.target.value);
    }
    const insertItems = (event) => {
        setInsertBtn((oldList) => {
            return [...oldList, eleName]
        })
        setEleName("");
    }
    const deleteitems = (id) =>{
        console.log("lhcbqw");
        setInsertBtn((olditems)=>{
            return olditems.filter((arr , index) =>{
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="card_div">
                    <div className = "heading">
                        <h1 className="">My List</h1>
                    </div>
                    <input className="inputField" type="text" onChange={insert}
                        value={eleName} />
                    <button className="addbtn" on onClick={insertItems}>+</button>
                    <div className = "olList">
                        <ol>
                            {insertBtn.map((itemVal , index) => {
                            return <Mylist key = {index} 
                            id = {index}
                            text = {itemVal}
                                onSelect = {deleteitems}
                            />
                            })}
                        </ol>
                    </div>
                    
                </div>
            </div>
        </>
    )
};

export default App;