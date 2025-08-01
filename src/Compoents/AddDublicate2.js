import React, { useState, Fragment } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid } from 'uuid';

function Add(){

    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) =>{
     e.preventDefault();

     const ids = uuid();  // npm i react-uuid
     let uniqueId = ids.slice(0,8);

     let a = name,
      b = age;
     
      Employee.push({id:uniqueId, Name : a, Age : b})

      navigate('/');
    }

    return(
        <Fragment>
         <div>
            <Form className='d-grid gap-2' style={{margin:"15em"}}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control 
                    type='text'
                    //value={name}
                    onChange={(e) => {  setName(e.target.value) }}
                    placeholder='Enter Name'
                    required
                    >
                        
                    </Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formAge'>
                    <Form.Control 
                    type='text'
                    //value={age}
                    onChange={(e) => {  setAge(e.target.value) }}
                    placeholder='Enter Age'
                    required
                    >
                        
                    </Form.Control>
                </Form.Group>
                <Button type='submit' onClick={(e) => { handleSubmit(e) }}>Submit</Button>
            </Form>
         </div>
        </Fragment>
    )
}

export default Add;