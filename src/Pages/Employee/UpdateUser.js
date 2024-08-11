import './UpdateUser.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
const UpdateUser=()=>
{
   const {id} = useParams();
   const navigate =useNavigate();
    const [formdata,setformdata]=useState({
        name:"",
        phone:"",
        email:"",
        department:""
       })
  
       const handleInputChange=(event)=>
       {
          const {name,value}= event.target;
          setformdata({
          ...formdata,
          [name]:value,
          })
       }

       useEffect(()=>
    {
        const fetchEmployee= async()=>
        {
          try{
            const response = await fetch(`http://localhost:8088/api/employees/${id}`);
            const data= await response.json();
            setformdata(data);
          }
          catch(error)
          {
            console.log("Error Ocurred",error.message);
          }
        }
        fetchEmployee();

    },[id]);

    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        try{
            const response = await fetch(`http://localhost:8088/api/employees/${id}`, {
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formdata),
                
        });
        const data= await response.json();
        console.log("User Updated : ",data);

           navigate(`/`);
    }catch(error)
    {
        console.log("Error Ocurred",error.message);
    }
}
       return(
        <>
          <div className="center-form">
              <h1>Edit Employee</h1>
              <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
               <Form.Control
                 type="text"
                 name="name" 
                 placeholder="Enter your name"
                 value={formdata.name}
                 onChange={handleInputChange}
               />
               <Form.Control
                 type="text"
                 name="email" 
                 placeholder="Enter your Email"
                 value={formdata.email}
                 onChange={handleInputChange}
               />
               <Form.Control
                 type="text"
                 name="phone" 
                 placeholder="Enter your Phone Number"
                 value={formdata.phone}
                 onChange={handleInputChange}
               />
               <Form.Control
                 type="text"
                 name="department" 
                 placeholder="Enter your Department"
                 value={formdata.department}
                 onChange={handleInputChange}
               />
      
      
              </Form.Group>
               <Button variant="primary" type="submit" className="w-100">
                  Update Employee
               </Button>
      
              </Form>
      
      
      
      
          </div>
        
        
        </>
      
      
        );
}
export default UpdateUser;