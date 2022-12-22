import '../../App.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Card from '../../components/Card'

function Home() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Card />
            {/* <header className="App-header"> 
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    )
}

export default Home
