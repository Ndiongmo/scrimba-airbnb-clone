import styled from 'styled-components'
import { Link } from 'react-router-dom'

const JmItem = styled.div`
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    gap: 30px;
`

const JmImg = styled.div`
    display: flex;
`

const JmDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const JmDetailLocation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 15px;
`

// const StyledLink = styled(Link)`
//     color: 'gray';
//     textdecorationline: 'underline';
// `
const StyledAhref = styled.a`
    color: 'gray';
    textdecorationline: 'underline';
`

function JournalItem(props) {
    let url = props.googleMapsUrl
    return (
        <JmItem>
            <JmImg>
                <img
                    style={{
                        width: '125px',
                        height: '168px',
                        borderRadius: '5px',
                    }}
                    src={props.imageUrl}
                    alt={props.title}
                />
            </JmImg>

            <JmDetail>
                <JmDetailLocation>
                    <img
                        src="/Fill219.png"
                        alt="star"
                        style={{ width: '7px', height: '9.55px' }}
                    />
                    <span
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '10.24px',
                            lineHeight: '12px',
                            letterSpacing: '0.17em',
                        }}
                    >
                        {props.location}
                    </span>
                    <span
                        style={{
                            color: 'gray',
                            textDecorationLine: 'underline',
                        }}
                    >
                        {/* <StyledLink
                            to={{ pathname: `${props.googleMapsUrl}` }}
                            target="_blank"
                        >
                            View on Google Maps
                        </StyledLink> */}
                        <StyledAhref
                            href={props.googleMapsUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View on Google Maps
                        </StyledAhref>
                    </span>
                </JmDetailLocation>
                <h1 style={{ fontSize: '25px' }}>{props.title}</h1>
                <span
                    style={{
                        fontSize: '10.24px',
                        fontWeight: 700,
                        lineHeight: '12px',
                    }}
                >
                    {props.startDate} - {props.endDate}
                </span>
                <p
                    style={{
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '150%',
                    }}
                >
                    {props.description}
                </p>
            </JmDetail>
        </JmItem>
    )
}
export default JournalItem
