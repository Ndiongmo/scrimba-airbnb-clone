import star from '../../assets/images/star.png'

function Card({ img, rating, reviewCount, country, title, price, openSpots }) {
    let badgeText
    if (openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (country === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className="Card-items">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={img} className="Card-image" alt="Katie" />
            <div className="card--stats">
                <img src={star} alt="star" />
                <span>{rating}</span>
                <span style={{ color: 'gray' }}>
                    ({reviewCount}) - {country}
                </span>
            </div>
            <p>{title}</p>
            <p>
                <b>From ${price}</b> / person
            </p>
        </div>
    )
}
export default Card
