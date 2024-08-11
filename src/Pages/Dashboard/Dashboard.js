import { useEffect, useState} from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Dashboard=()=>
{
    const [employees,setEmployees]= useState([]);
    const navigate= useNavigate()
    useEffect(()=>
    {  
      const fetchEmployee =async()=>
      {
        try{
            const response = await fetch('http://localhost:8088/api/employees');
            const data = await response.json();
            setEmployees(data);
        }
        catch(error)
        {
         console.log("Error Occurred ",error.message);
      }
    }
    fetchEmployee();
    },[]);

    const handleUpdate= (employeeId)=>
    {
        navigate(`/employees/${employeeId}`);
    }

    const handleDelete= async(employeeId)=>
    {
      try{
            const response = await fetch(`http://localhost:8088/api/employees/${employeeId}`,
                {
                    method:"DELETE",
                }
            );
            if(response.ok)
            {
                setEmployees((prevEmployees)=>
                 prevEmployees.filter((employee)=>employee.id!==employeeId)
                )
            }
            console.log(`Employee with id ${employeeId} Deleted Sucessfully`);
      }catch(error)
      {
          console.log("Error Occurred ",error.message);
      }
    }

    return(
<>
     <Container className="mt-5">
        <Row>
         <Col>
         <h1 className="text-center">Employees
         </h1>
         <Table striped border hover responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                 {employees.map((employee)=>
                 (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.department}</td>
                        <td>
                            <Button variant="outline-secondary"onClick={()=>handleUpdate(employee.id)}>Update</Button>
                            <Button variant="outline-danger"onClick={()=>handleDelete(employee.id)}>Delete</Button>
                        </td>
                       

                    </tr>

                 ))}

            </tbody>
         </Table>
         </Col>

        </Row>


     </Container>
</>
    );
 
}
export default Dashboard;