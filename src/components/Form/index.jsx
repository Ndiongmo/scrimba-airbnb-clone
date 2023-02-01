import Header from '../Header'
import React from 'react'

function Formulaire() {
    // const [firstName, setFirstName] = React.useState('')
    // const [lastName, setLastName] = React.useState('')

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
    })
    console.log(formData)
    // console.log(firstName, lastName)
    // function handleFirstName(event) {
    //     setFirstName(event.target.value)
    // }
    // function handleLastName(event) {
    //     setLastName(event.target.value)
    // }
    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            }
        })
    }
    return (
        <div className="App">
            <Header />
            <form style={{ marginTop: '30px' }}>
                <input
                    type="text"
                    placeholder="First Name"
                    // onChange={handleFirstName}
                    onChange={handleChange}
                    name="firstName"
                    style={{ marginRight: '15px' }}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    // onChange={handleLastName}
                    onChange={handleChange}
                    name="lastName"
                />
            </form>
        </div>
    )
}
export default Formulaire
