import hero from '../../assets/hero.png'
function Hero() {
    return (
        <div className="App-hero">
            <img src={hero} className="Hero-image" alt="Hero" />
            <h1 className="Hero-title">Online Experiences</h1>
            <p className="Hero-description">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </div>
    )
}
export default Hero
