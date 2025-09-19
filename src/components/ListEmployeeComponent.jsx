import React, { useEffect, useState } from 'react'
import { listemployees, deleteEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([])

  const navigator = useNavigate()

  useEffect(() => {
    getAllEmployees()
  }, [])

  function getAllEmployees() {
    listemployees().then((response) => {
      setEmployees(response.data)
    }).catch(error => {
      console.error(error)
    })
  }

  function addNewEmployee() {
    navigator('/add-employee')
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`)
  }

  function removeEmployee(id) {
    console.log("Delete ID: " + id)

    deleteEmployee(id).then((response) => {
      getAllEmployees()
    }).catch(error => console.error(error))
  }

  return (
    <div className='container'>

      <h2 className='text-center'>List of Employees</h2>
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
      <table className='table table-bordered table-striped'>
        <thead className='text-center'>
          <tr>
            <th>ID</th>
            <th>First-Name</th>
            <th>Second-Name</th>
            <th>Email-ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {
            employees.map(employee =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.secondName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                  <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{ marginLeft: '10px' }}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  )
}

export default ListEmployeeComponent