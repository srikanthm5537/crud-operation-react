import React, { useState, Fragment , useEffect } from 'react';
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


function View(){

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');
     useEffect( () => {
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setId(localStorage.getItem('Id'));
     },[]);

    return(
        <Fragment>
         <div className='col-4 m-auto'>
            <Link to="/"><p>Back Home</p></Link>

            <Table bordered striped hover>
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>{ id }</td> */}
                        <td>{ name }</td>
                        <td>{ age }</td>
                    </tr>
                </tbody>
            </Table>
            
         </div>
        </Fragment>
    )
}

export default View;