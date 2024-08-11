import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './PostUser.css';
import { useNavigate } from "react-router-dom";
const PostUser=()=>
{

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
     const navigate= useNavigate();
     const handleSubmit=async(e)=>
     {
     e.preventDefault();
     console.log(formdata);
     try{
        const response= await fetch("http://localhost:8088/api/employee",{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(formdata)
        });
        const data=await response.json();
        console.log("Employee Created",data);
        navigate("/");
     }catch(error){
        console.log("Error occured: "+error
        .message);
     }
     }
  return(
  <>
    <div className="center-form">
        <h1>Post New Employee</h1>
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
            Post Employee
         </Button>

        </Form>




    </div>
  
  
  </>


  );
}
export default PostUser;