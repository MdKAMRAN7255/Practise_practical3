import React, { Component } from 'react';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Items from './Items';
import AddButton from './AddButton';
class Main extends Component {
    render() { 
        return (
            <>
                <div className='Todo_body d-flex justify-content-center align-items-center'>
                    <div className='Todo_component_conatainer bg-light mx-3 ps-3 ps-md-0 pe-md-3 mx-md-0'>
                        <Navbar />
                        <Items />
                        <AddButton />
                    </div>
                </div>            

            </>
        );
    }
}
//  TaskForm()
export default Main;