import React, { useState } from 'react';
import './css/items.css'

function Items(props) {
  const handleCheck = (event, index) => {
    const newList = [...props.list];
    newList[index].completed = newList[index].completed ? false: true;
    props.setTask(newList);
  };

  const isChecked = (item) => {
    return item.completed ? "checked-item" : "not-checked-item";
  };
  return ( 
        <>     
          <div className='main_items-container bg-light mt-3'>
            <div className='list-conatainer bg-light'>
              {props.list && props.list.map((item, index) => (
                <div key={index} 
                  className='list ps-2 pe-3 ps-md-5 pe-md-4 d-flex bg-light justify-content-between'>
                    
                    <span className={isChecked(item)}>
                      {item.task}
                    </span>

                    <input value={item}
                      type="checkbox"
                      className='px-2 pe-3'
                      onChange={(event) => handleCheck(event, index)} 
                      checked={item.completed}/>    
                </div>
              ))}
            </div>
          </div>
        </> 
    );
}

export default Items;

