import React, { useState, Fragment , useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid } from 'uuid';

function Edit(){
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let index = Employee.map(function(e){
        return e.id;
     }).indexOf(id);

     const handleSubmit = (e) =>{
        e.preventDefault();

        let a = Employee[index];
        a.Name = name;
        a.Age = age;

        navigate('/');
     }


     useEffect( () => {
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setId(localStorage.getItem('Id'));
     },[]);

    return(
        <Fragment>
         <div>
            <Form className='d-grid gap-2' style={{margin:"15em"}}>
                {/* <Form.Group className='mb-3'>
                    <Form.Control 
                    type='text'
                    value={id}
                    disabled
                    placeholder='Enter Name'
                    >
                        
                    </Form.Control>
                </Form.Group> */}
                <Form.Group className='mb-3'>
                    <Form.Control 
                    type='text'
                    value={name}
                    onChange={(e) => {  setName(e.target.value) }}
                    placeholder='Enter Name'
                    >
                        
                    </Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Control 
                    type='number'
                    value={age}
                    onChange={(e) => {  setAge(e.target.value) }}
                    placeholder='Enter Age'
                    >
                        
                    </Form.Control>
                </Form.Group>
                <Button type='submit' onClick={(e) => { handleSubmit(e) }}>Update</Button>
            </Form>
         </div>
        </Fragment>
    )
}

export default Edit;