import React, { useState, Fragment } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid } from 'uuid';

function Add(){

    const [validated, setValidated] = useState(false);

    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) =>{
       

     const form = e.currentTarget;
     if (form.checkValidity() === false) {
        e.preventDefault();
       e.stopPropagation();
       
     }else{
        const ids = uuid();  // npm i react-uuid
        let uniqueId = ids.slice(0,8);
   
        let a = name,
         b = age;
        
         Employee.push({id:uniqueId, Name : a, Age : b})
        navigate('/');
     }
 
     setValidated(true);

    

      //navigate('/');
    }

    return(
        <Fragment>
         <div>
            <Form className='d-grid gap-2' style={{margin:"15em"}} noValidate validated={validated}  onSubmit={handleSubmit }>
                <Form.Group className='mb-3' controlId="validationCustom01">
                    <Form.Control 
                    type='text'
                    //value={name}
                    onChange={(e) => {  setName(e.target.value) }}
                    placeholder='Enter Name'
                    required
                    >
                    </Form.Control>

                    <Form.Control.Feedback type="invalid"> Please choose a Name.</Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                </Form.Group>

                <Form.Group className='mb-3' controlId="validationCustom01">
                    <Form.Control 
                    type='number'
                    //value={age}
                    onChange={(e) => {  setAge(e.target.value) }}
                    placeholder='Enter Age'
                    required
                    >
                    </Form.Control>
                    <Form.Control.Feedback type="invalid"> Please choose a Age.</Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
         </div>
        </Fragment>
    )
}

export default Add;