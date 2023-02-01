import Header from '../Header'
import React from 'react'

function Formulaire() {
    const [firstName, setFirstName] = React.useState('')
    console.log(firstName)
    function handleChange(event) {
        setFirstName(event.target.value)
    }
    return (
        <div className="App">
            <Header />
            <form style={{ marginTop: '30px' }}>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}
export default Formulaire
