package com.code.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.employee.Repository.EmployeeRepository;
import com.code.employee.entity.Employee;
import java.util.Optional;

import jakarta.persistence.EntityNotFoundException;


@Service
public class EmployeeServices {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	 public Employee postEmployee(Employee employee) {
	 return employeeRepository.save(employee);
	 }
	 
	 public List<Employee> getAllEmployees()
	 {
		 return employeeRepository.findAll();
	 }
	 
	 public void DeleteEmployee(Long id)
	 {
		 if(!employeeRepository.existsById(id))
		 {
		     throw new EntityNotFoundException("Employee with id " +id+" not Found");
		 }
		 employeeRepository.deleteById(id);
				 
	 }
	 public Employee getEmployeebyId(Long id)
	 {
		return employeeRepository.findById(id).orElse(null);
	 }
	 
	 public Employee UpdateEmployee(Long id , Employee employee)
		{
			Optional<Employee> optionalemployee=employeeRepository.findById(id);
			if(optionalemployee.isPresent())
			{
				Employee existingemployee=optionalemployee.get();
				existingemployee.setEmail(employee.getEmail());
				existingemployee.setName(employee.getName());
				existingemployee.setPhone(employee.getPhone());
				existingemployee.setDepartment(employee.getDepartment());
				
				return employeeRepository.save(existingemployee);
				
		}
			return null;
	}
	
}
