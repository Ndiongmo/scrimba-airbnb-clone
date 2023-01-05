import Header from '../Header'
import styled from 'styled-components'
import { journalElt } from '../../datas/journalData'

import JournalItem from './JournalItem'

const JournalMain = styled.div`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 30px;
    gap: 30px;
    width: 90%;
    align-self: center;
    font-family: 'Inter';
`

function Journal() {
    const journalElem = journalElt.map((jItem, index) => {
        return (
            <JournalItem
                key={`${index}`}
                title={jItem.title}
                location={jItem.location}
                googleMapsUrl={jItem.googleMapsUrl}
                startDate={jItem.startDate}
                endDate={jItem.endDate}
                description={jItem.description}
                imageUrl={jItem.imageUrl}
            />
        )
    })
    return (
        <div className="App">
            <Header />
            <JournalMain>{console.log(journalElem)}</JournalMain>
        </div>
    )
}
export default Journal
