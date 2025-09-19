import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee, deleteEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

export const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')

    const { id } = useParams()

    const [errors, setErrors] = useState({
        firstName: '',
        secondName: '',
        email: ''
    })

    const navigator = useNavigate()

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                const employee = response.data
                setFirstName(employee.firstName)
                setSecondName(employee.secondName)
                setEmail(employee.email)
            }).catch(error => console.error(error))
        }
    }, [id])

    function saveOrUpdateEmployee(e) {
        e.preventDefault()

        if (validateForm()) {
            const employee = { firstName, secondName, email }
            console.log(employee)

            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error => console.error(error))
            }
            else {
                createEmployee(employee).then((response) => {
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error => console.error(error))
            }

        }
    }


    function validateForm() {
        let valid = true;
        let errorsCopy = { ...errors };

        if (firstName.trim()) {
            errorsCopy.firstName = ''
        }
        else {
            errorsCopy.firstName = 'First Name is required'
            valid = false
        }

        if (secondName.trim()) {
            errorsCopy.secondName = ''
        }
        else {
            errorsCopy.secondName = 'Second Name is required'
            valid = false
        }

        if (email.trim()) {
            errorsCopy.email = ''
        }
        else {
            errorsCopy.email = 'Email is required'
            valid = false
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {

        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        }
        return <h2 className='text-center'>Add Employee</h2>
    }

    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {pageTitle()}
                    <div className="card-body">
                        <form>

                            <div className="form-group mb-2">
                                <div className="form-label">First Name</div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    placeholder='Enter First-Name'
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <div className="form-label">Second Name</div>
                                <input
                                    type="text"
                                    name="SecondName"
                                    value={secondName}
                                    placeholder='Enter Second-Name'
                                    onChange={(e) => setSecondName(e.target.value)}
                                    className={`form-control ${errors.secondName ? 'is-invalid' : ''}`}
                                />
                                {errors.secondName && <div className='invalid-feedback'>{errors.secondName}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <div className="form-label">Email</div>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    placeholder='Enter email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
