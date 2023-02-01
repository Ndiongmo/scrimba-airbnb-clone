import Header from '../Header'
import React from 'react'

function Formulaire() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    // console.log(firstName, lastName)
    function handleFirstName(event) {
        setFirstName(event.target.value)
    }
    function handleLastName(event) {
        setLastName(event.target.value)
    }
    return (
        <div className="App">
            <Header />
            <form style={{ marginTop: '30px' }}>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleFirstName}
                    style={{ marginRight: '15px' }}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleLastName}
                />
            </form>
        </div>
    )
}
export default Formulaire
