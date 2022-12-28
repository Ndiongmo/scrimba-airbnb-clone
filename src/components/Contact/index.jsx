import picture from '../../assets/mr-whiskerson.png'
import tel from '../../assets/phone-icon.png'
import mail from '../../assets/mail-icon.png'

function Contact() {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={picture} alt="Profil" />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src={tel} alt="Phone" />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src={mail} alt="Mail" />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
        </div>
    )
}
export default Contact
