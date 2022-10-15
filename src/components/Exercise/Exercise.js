import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Tasks from '../Tasks/Tasks';

import './Exercise.css';

const Exercise = () => {
const [exercises,setExercises] = useState([]);
const [list,setList] = useState([]);

useEffect(()=>{
    fetch('exercises.json')
    .then(res =>res.json())
    .then(data => setExercises(data))
},[]);
   
    const handleAddToList = (exercises) => {
        console.log(exercises)
        const newList = [...list,exercises];
        setList(newList);
    }

    return (
        <div className='container'>

            <div className='exercise-container'>
                {
                    exercises.map(tasks =>  <Tasks
                         key={exercises.id}
                         tasks ={tasks}
                        handleAddToList={handleAddToList}
                         ></Tasks>)
                }
            </div>

            <div className='list-container'>
                <List list={list}></List>

                {/* exercise details
            <p>select list {list.length}</p> */}
            </div>
            
        </div>
    );
};

export default Exercise;