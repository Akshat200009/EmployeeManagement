package com.code.employee.Repository;

import org.springframework.stereotype.Repository;

import com.code.employee.entity.Employee;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface EmployeeRepository extends JpaRepository< Employee , Long> {

}
