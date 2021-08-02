import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Shop() {

    useEffect(()=> {
        fetchItems();
    }, []);

    const [items, setItems] =  useState([]);


    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        console.log(data);

        const items = await data.json();
        console.log(items);

        setItems(items);

    }

    return (
        <div className="App"> 
            {items.map(items => (
                <h1 key = {items.id}>
                <Link to = {`/shop/${items.id}`}>{items.title}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;
