import profil from '../../assets/katie-zaferes.png'
import star from '../../assets/star.png'

function Card() {
    return (
        <div className="Card">
            <div className="Card-items">
                <img src={profil} className="Card-image" alt="Katie" />
                <div className="card--stats">
                    <img src={star} alt="star" />
                    <span>5.0</span>
                    <span style={{ color: 'gray' }}>(6) - USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p>
                    <b>From $136</b> / person
                </p>
            </div>
            <div className="Card-items">
                <img src={profil} className="Card-image" alt="Katie" />
                <div className="card--stats">
                    <img src={star} alt="star" />
                    <span>5.0</span>
                    <span style={{ color: 'gray' }}>(30) - USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p>
                    <b>From $136</b> / person
                </p>
            </div>
            <div className="Card-items">
                <img src={profil} className="Card-image" alt="Katie" />
                <div className="card--stats">
                    <img src={star} alt="star" />
                    <span> 4.8</span>
                    <span style={{ color: 'gray' }}>(2) - USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p>
                    <b>From $136</b> / person
                </p>
            </div>
        </div>
    )
}
export default Card
