import React, { useState } from 'react';
import './List.css'
const List = (props) => {
    const {list} =props;
    

    const [breaks, setBreak] = useState(0);

   const setValue10 = () => setBreak(10);
    const setValue20 = () => setBreak(20);
    const setValue30 = () => setBreak(30);
    const setValue40 = () => setBreak(40);
    let time = 0;
    for(const exercise of list){
        time = time + exercise.time;
    }
    return (
        <div className='list'>

            <div className='personal-info'>
                <h2><span className='personal'>Name:</span> S M Tariqul Islam</h2>
                <h3><span className='personal'>Age:</span> 26</h3>

            </div>

              
            <div className='break-section'>
                <h2>Add A Break</h2>
                <button className='btn' onClick={setValue10}>10</button>
                <button className='btn' onClick={setValue20}>20</button>
                <button className='btn' onClick={setValue30}>30</button>
                <button className='btn' onClick={setValue40}>40</button>
            </div>

           
            <div className='exercise-details'>
                <h3> Exercise details</h3>
                <p><strong>Exercise time:</strong> {time}m</p>
                <p><strong>Break time:</strong>{breaks}s</p>
            </div>
           

            <button className='button-details'><p><strong>Activity Completed</strong></p> 
            </button>


        </div>
    );
};

export default List;