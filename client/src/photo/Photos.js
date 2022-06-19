import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Photo from './Photo';

const Photos = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res))
  }, [])


  return (
    <div>
      <h1>Member: {data.length}</h1>
      {
        data.map(item => <Photo key={item.id} item={item} />)
      }
    </div>
  );
};

export default Photos;



