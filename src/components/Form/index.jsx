export default function Form() {
    function handleChange(event) {
        console.log(event)
    }
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}
