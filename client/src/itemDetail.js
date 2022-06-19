import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Item() {

    useEffect(()=> {
    
    }, []);

    const [item, setItem] =  useState({});

    return (
        <div className="App"> 
            <h1>Item</h1>
        </div>
    );
}

export default Item;
