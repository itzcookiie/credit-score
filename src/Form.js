import React, { useState } from 'react'
import Cards from './Cards'

const Form = () => {

    const [userData, setUserData] = useState({
        name: '',
        dob: '',
        employmentStatus: '',
        houseNum: null,
        annualIncome: null,
        postcode: '',
        completedForm: false
    })

    const addUserInput = ({ target }) => {
        const { name, value } = target
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = event => {
        const formFields = Object.keys(userData)
        const completedFields = formFields.filter(field => {
            if(field === 'employmentStatus') {
                const selectField = document.querySelector(`select[name="${field}"]`)
                if(selectField.value) {
                    return field
                }
            } else {
                const inputField = document.querySelector(`input[name="${field}"]`)
                if(inputField === null) {
                    return;
                } else if(inputField.value) {
                    return field
                }
            }
        })

        if(completedFields.length === 6) {
            event.preventDefault()
            setUserData({
                ...userData,
                completedForm: true
            })
        }
    }

    return (
        <div>
            <h2>Form</h2>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input onInput={addUserInput} type="text" name="name" id="name" required></input>
                </div>
                <div>
                    <label htmlFor="dob">Date of birth: </label>
                    <input required onInput={addUserInput} type="date" name="dob" id="dob"></input>
                </div>
                <div>
                    <label htmlFor="employmentStatus">Employment status: </label>
                    <select required onInput={addUserInput} name="employmentStatus" id="employmentStatus">
                        <option value="" defaultValue hidden>Please select</option>
                        <option value="Student">Student</option>
                        <option value="Full-Time">Full Time</option>
                        <option value="Part-Time">Part Time</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="houseNum">House number: </label>
                    <input required onInput={addUserInput} type="number" name="houseNum" id="houseNum"></input>
                </div>
                <div>
                    <label htmlFor="annualIncome">Annual income: </label>
                    <input required onInput={addUserInput} type="number" name="annualIncome" id="income"></input>
                </div>
                <div>
                    <label htmlFor="postcode">Postcode: </label>
                    <input required onInput={addUserInput} type="text" name="postcode" id="postcode"></input>
                </div>
                <input onClick={handleSubmit} type="submit"></input>
            </form>
            {userData.completedForm ? <Cards data={userData}/> : 'Complete form to see available cards'}
        </div>
    )
}

export default Form