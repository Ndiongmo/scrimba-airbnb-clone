import '../../App.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Card from '../../components/Card'
import Contact from '../../components/Contact'
import Joke from '../../components/Joke'

import { jokes } from '../../datas/jokesData'
import { contactList } from '../../datas/contactData'
import { cardList } from '../../datas/cardData'

function Home() {
    const jokeElem = jokes.map((jokeItem, index) => {
        return (
            <Joke
                key={`${index}`}
                setup={jokeItem.setup}
                punchline={jokeItem.punchline}
            />
        )
    })

    const contactElements = contactList.map((contactItem, index) => {
        return (
            <Contact
                key={`${contactItem.name}-${index}`}
                img={contactItem.img}
                name={contactItem.name}
                phone={contactItem.phone}
                email={contactItem.email}
            />
        )
    })

    const cardElemts = cardList.map((cardItem, index) => {
        return (
            <Card
                key={`${index}-${cardItem.id}`}
                img={cardItem.coverImg}
                rating={cardItem.stats.rating}
                reviewCount={cardItem.stats.reviewCount}
                country={cardItem.location}
                title={cardItem.title}
                price={cardItem.price}
                openSpots={cardItem.openSpots}
            />
        )
    })

    return (
        <div className="App">
            <Header />
            <Hero />
            <div className="Card">{cardElemts}</div>

            <div className="contacts">{contactElements}</div>
            {jokeElem}
            {/* <Joke punchline="It's hard to explain puns to kleptomaniacs because they always take things literally" />
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
            /> */}
        </div>
    )
}

export default Home
