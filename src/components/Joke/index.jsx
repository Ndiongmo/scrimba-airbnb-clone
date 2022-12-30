function Joke(props) {
    return (
        <div>
            {props.setup && <h1>Setup :{props.setup}</h1>}
            <p>{props.punchline}</p>
            <hr />
        </div>
    )
}
export default Joke
