import React, {useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import './css/addButton.css';
import Items from './Items';
function AddButton() {
    const expirationHour = 0;
    const expirationMinute = 0;
    const expirationSecond = 0;

// Calculate the expiration date based on the current date and time
    const now = new Date();
    const expirationDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // Add one day to the current date
    expirationHour,
    expirationMinute,
    expirationSecond
    );

    const [show, setShow] = useState(false)
    const [data, setData] = useState("");
    const [task, setTask] = useState(() => {
        const storedTasks = Cookies.get("todoTask");
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
            const trimmedData = data.trim();
            setData(trimmedData); 
        if (trimmedData.length === 0){
             setShow(true);
                 document.getElementById('warning').style.display="block";
             }
            else {
                listAdder();
                document.getElementById('warning').style.display="none";
            }
        }
        else if (e.key === "Escape"){ 
            document.getElementById('warning').style.display="none";
            setShow(false); 
            setData(""); 
        }
    }
    useEffect( () =>{ 
        Cookies.set("todoTask", JSON.stringify(task), { expires: expirationDate }) 
    }, [task])
    return (
        <>
            <Items list={task} setTask={setTask}/>
            <div className='d-flex justify-content-center bg-light'>
                <div className='bg-light button_div d-flex flex-column justify-content-center align-items-center'>
                    {!show ? (<button className='btn btn-success addition' onClick={handleClick}>
                        +
                    </button>) :
                        (<input type='text' 
                            className='inputText ps-2 pb-2' 
                            placeholder='Enter Your task' 
                            value={data} 
                            onChange={dataHanlder} 
                            onKeyDown={eventHandler} 
                            autoFocus
                        />)}
                        <div className='col-12 bg-light pb-1 ps-2'>
                            <span className='text-danger bg-light' id='warning'>Add Something Before Enter</span>
                        </div>
                </div>
            </div>
        </>
    );
}



export default AddButton;

