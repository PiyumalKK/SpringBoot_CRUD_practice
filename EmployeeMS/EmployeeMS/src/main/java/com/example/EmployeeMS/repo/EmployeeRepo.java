package com.example.EmployeeMS.repo;

import com.example.EmployeeMS.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee,Integer>
{

}
