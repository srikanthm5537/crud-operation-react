import React, { useState, Fragment } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
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
      // e.stopPropagation();
       
     }else{
        const ids = uuid();  // npm i react-uuid , A UUID (Universal Unique Identifier) is a 128-bit number used to uniquely identify some object or entity on the Internet.
        let uniqueId = ids.slice(0,8);   // create 8 digit id like 03f4456f , 0 means start 0 to 8 digit id, if put 1 its start 1 to 8 and cout is 7 id
   
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