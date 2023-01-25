import React from 'react'

function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown() {
        setIsShown((prevShown) => !prevShown)
    }
    return (
        <div>
            {props.setup && <h1>Setup :{props.setup}</h1>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>
                {isShown ? 'Hide' : 'Show'} Punchline
            </button>
            <hr />
        </div>
    )
}
export default Joke
