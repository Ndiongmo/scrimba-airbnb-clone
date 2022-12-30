import star from '../../assets/star.png'

function Card({ img, rating, reviewCount, country, title, price }) {
    return (
        <div className="Card-items">
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
