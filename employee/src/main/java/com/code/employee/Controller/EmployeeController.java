package com.code.employee.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.code.employee.entity.Employee;
import com.code.employee.service.EmployeeServices;

import jakarta.persistence.EntityNotFoundException;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EmployeeController {
  @Autowired
	private EmployeeServices employeeServices;
	
	@PostMapping("/employee")
	public Employee postEmployee(@RequestBody Employee employee)
	{
		return employeeServices.postEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees()
	{
		return employeeServices.getAllEmployees();
	}
     
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<?> DeleteEmployee(@PathVariable Long id)
	{
		try
		{
			employeeServices.DeleteEmployee(id);
			
				return new ResponseEntity<>("Employee with Id "+id+" Deleted Successfully ",HttpStatus.OK);
			
		}
		catch(EntityNotFoundException e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping("/employees/{id}")
	public ResponseEntity<?> getEmployeebyId(@PathVariable Long id)
	{
		Employee employee= employeeServices.getEmployeebyId(id);
		if(employee==null)return ResponseEntity.notFound().build();
		return ResponseEntity.ok(employee);
	}
	
	@PatchMapping("/employees/{id}")
	public ResponseEntity<?> UpdateEmployee(@PathVariable Long id , @RequestBody Employee employee)
	{
		Employee updatedEmployee= employeeServices.UpdateEmployee(id,employee);
		if(employee==null)return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		return ResponseEntity.ok(updatedEmployee);
		
	}
}
	
	
