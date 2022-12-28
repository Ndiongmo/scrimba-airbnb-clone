import '../../App.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Card from '../../components/Card'
import Contact from '../../components/Contact'

import Whiskerson from '../../assets/mr-whiskerson.png'
import Fluffykins from '../../assets/fluffykins.png'
import Felix from '../../assets/felix.png'
import Pumpkin from '../../assets/pumpkin.png'

function Home() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Card />
            <div className="contacts">
                <Contact
                    img={Whiskerson}
                    name="Mr Whiskerson"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow"
                />
                <Contact
                    img={Fluffykins}
                    name="Fluffykins"
                    phone="(212) 555-2345"
                    email="fluff@me.com"
                />
                <Contact
                    img={Felix}
                    name="Felix"
                    phone="(212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Contact
                    img={Pumpkin}
                    name="Pumpkin"
                    phone="(0800) CAT KING"
                    email="pumpkin@scrimba.com"
                />
            </div>
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
