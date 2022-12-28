import tel from '../../assets/phone-icon.png'
import mail from '../../assets/mail-icon.png'

function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} alt="Profil" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={tel} alt="Phone" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail} alt="Mail" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}
export default Contact
