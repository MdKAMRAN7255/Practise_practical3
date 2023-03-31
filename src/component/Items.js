import React, { useState } from 'react';
import './css/items.css'

function Items(props) {
  const [checked, setChecked] = useState([]);
  const items_list = ["Buy new sweatshirt", "Begin promotional phase", "Read an article", "Try not to fall asleep", 'watch "Sherlock"', "Begin QA for the product", "Go for a walk"]
  
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  
    var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return ( 
        <>     
          <div className='main_items-container bg-light mt-3'>
            <div className='list-conatainer bg-light'>
              {items_list.map((item, index) => (

                <div key={index} 
                  className='list ps-2 pe-3 ps-md-5 pe-md-4 d-flex bg-light justify-content-between'>

                    <span className={isChecked(item)}>{item}</span>
                    <input value={item} type="checkbox" className='px-2 pe-3' onChange={handleCheck} />
                    
                </div>

              ))}
            </div>
          </div>
        </> 
    );
}

export default Items;
