import React, { useCallback, useEffect, useState } from 'react';
import './css/addButton.css'
import Items from './Items';

function Practise() {
    const [show, setShow] = useState(false)
    const [data, setData] = useState("");
    const [task, setTask] = useState(() => {
        const storedTasks = localStorage.getItem("todoTask");
        return storedTasks ? JSON.parse(storedTasks) : [];
      });
    function handleClick() {
        setShow(true)
    }

    function dataHanlder(e) {
        setData(e.target.value)
    }

    function listAdder() {
        const newTask = [...task, {task:data, completed:false}];
        setTask(newTask);
        setData("");
    }
    function eventHandler(e) {
        if (e.key === "Enter") {
            if (data.length == 0){
                 setShow(false);
             }
            else {
                listAdder();
            }
        }
        else if (e.key === "Escape"){ 
            setShow(false); 
            setData(""); 
        }
    }
    useEffect( () =>{ 
        localStorage.setItem("todoTask", JSON.stringify(task)) 
    }, [task])
    return (
        <>
            <Items list={task} setTask={setTask}/>
            <div className='d-flex justify-content-center bg-light'>
                <div className='bg-light button_div d-flex justify-content-center'>
                    {!show ? (<button className='btn btn-success addition' onClick={handleClick}>
                        +
                    </button>) :
                        (<input type='text' 
                            className='inputText py-2 pb-3 ps-2 mb-3' 
                            placeholder='Enter Your task' 
                            value={data} 
                            onChange={dataHanlder} 
                            onKeyDown={eventHandler} 
                        />)}
                </div>
            </div>
        </>
    );
}



export default Practise;
