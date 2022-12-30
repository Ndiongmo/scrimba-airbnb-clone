import '../../App.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Card from '../../components/Card'
import Contact from '../../components/Contact'
import Joke from '../../components/Joke'

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
            <Joke punchline="It's hard to explain puns to kleptomaniacs because they always take things literally" />
            <Joke
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it"
            />
            <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomeware"
            />
            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy"
            />
            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
            />
            <Joke
                setup="What's the best thing about Switzerland ?"
                punchline="I don't know, but the flag is a big plus!"
            />
        </div>
    )
}

export default Home
