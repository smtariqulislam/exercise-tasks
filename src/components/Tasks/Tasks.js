import React from 'react';
import './Tasks.css'

const Tasks = (props) => {
  
   
    const { name, img, age,details,time} =props.tasks;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className='exercise-info'>
                <h3>{name}</h3>
                <p><strong>Details: </strong>{details}</p>
                <br />
                <p><strong>Age: </strong>{age}</p>
                <p><strong>Time: </strong>{time} minute</p>
            </div>
            <button onClick={()=>props.handleAddToList(props.tasks)} className='btn-list'>
                <p>Add to List</p></button>
        </div>
    );
};

export default Tasks;