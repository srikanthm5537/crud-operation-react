import React, { Fragment } from 'react';
import Employee from './Employee';
import {Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';


function Home(){

    let navigate = useNavigate();

    // view the person details
    const handleView = (id, name, age) =>{
      localStorage.setItem('Name', name);
      localStorage.setItem('Age', age);
      localStorage.setItem('Id', id);

    }

     // edit or update the person details
    const handleEdit = (id, name, age) =>{
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id', id);
  
      }

       // delete the person details
    const handleDelete = (id) =>{
       let index = Employee.map(function(e){
          return e.id;
       }).indexOf(id);  // delete unique person id details using indexof(id)

       Employee.splice(index,1);  // remove the person details row or  id using splice method

       navigate('/'); // after delete single row navigate to home page or '/'
    }
    return(
        <Fragment>
            <div style={{margin:"10em"}}>
                <h1>Home page</h1>
                 <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>S No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length > 0
                            ?
                            Employee.map((item, index) =>{
                                return(
                                    <tr>
                                        <td>{ index+1 }</td>
                                        <td>{ item.Name }</td>
                                        <td>{ item.Age }</td>
                                        <td>
                                        <Link to={`/view/${item.id}`}><Button className='btn-success ' size="sm" onClick={() =>{handleView(item.id,item.Name,item.Age)}}>View</Button></Link>
                                        <Link to={`/edit/${item.id}`}><Button className='btn-info m-1' size="sm" onClick={() =>{handleEdit(item.id,item.Name,item.Age)}}>Edit</Button></Link>
                                        <Button className='btn-danger' size="sm" onClick={() =>{ handleDelete(item.id)}}>Delete</Button>
                                        </td>
                                        
                                    </tr>
                                )
                            })
                            :
                            "No Data Available"
                        }
                    </tbody>

                 </Table>
                 <div>
                    <Link to="/create" className='d-grid gap-2'><Button className='btn-primary'>Create</Button></Link>
                 </div>
            </div>
        </Fragment>
    )
}

export default Home;