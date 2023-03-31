import React, { useCallback, useEffect, useState } from 'react';
import './css/addButton.css'
function AddButton() {
    const [show, setShow] = useState(false)
    const [data, setData] = useState("");
    const [task, setTask] = useState([]);
    function handleClick() {
        setShow(true)
    }

    function dataHanlder(e) {
        setData(e.target.value)
        console.log(data, "data");
    }

    function listAdder(data) {
        console.log("jjjj",data)
        const newArr = task;
        newArr.push({ task: data, completed: false });
        // setTask((prevTask)=>{return[...prevTask,{}]}); 
        setData(""); 
        console.log(task);
    }
    function eventHandler(e) {
        console.log("while enter>>",data)
        if (e.key === "Enter") {
            if (data.length == 0){
                 setShow(false);
             }
            else {
                console.log("entered calling list adder");
                listAdder(data);
            }
        }
        else if (e.key === "Escape") { setShow(false); 
            setData(""); 
        }
    }
    // useEffect(() => {
    //     document.addEventListener("keyup", eventHandler);
    //     return () =>{ document.removeEventListener('keyup', eventHandler)
    // // setData("")
    // }
    // }, [])

    return (
        <>
            <div className='d-flex justify-content-center bg-light'>
                <div className='bg-light button_div d-flex justify-content-center'>
                    {!show ? (<button className='btn btn-success addition' onClick={handleClick}>
                        +
                    </button>) :
                        (<input type='text' className='inputText py-2 pb-3 ps-2 mb-3' placeholder='Enter Your task' value={data} onChange={dataHanlder} onKeyDown={eventHandler} />)}
                </div>
            </div>
        </>
    );
}



export default AddButton;