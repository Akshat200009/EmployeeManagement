package com.code.employee.entity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import jakarta.persistence.*;

@Entity
@Data
@AllArgsConstructor
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Long Id;
	@Column
	private String name;
	@Column
	private String email;
	@Column
	private String phone;
	@Column
	private String Department;
	
	public Employee()
	{
		System.out.println("Default Constructor Called");
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getDepartment() {
		return Department;
	}

	public void setDepartment(String department) {
		Department = department;
	}

	@Override
	public String toString() {
		return "Employee [Id=" + Id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", Department="
				+ Department + "]";
	}
	
	

}
