import image1 from '../assets/kitchen-trailer.jpg'

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact__header">
                <h1>Get In Touch</h1>
                <h2>We'd love to hear from you.</h2>
                <div className="contact__divider--header">
                    <div></div>
                </div>
            </div>
            <div className="contact__details">
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <h3>Our Address</h3>
                    <p>281 Plot 63 Lavender Rd.
                       <br />Annlin, Pretoria, 0110
                       <br />Gauteng, South Africa</p>
                    <h3>Contact Details</h3>
                    <p>Phone: +27 66 534 5139<br />Email: info@teddytrailers.co.za</p>
                    <h3>Business Hours</h3>
                    <p>Mon-Sat 8:00am - 17:00pm</p>
                </div>
            </div>
            <div className="contact__divider--footer">
                <div></div>
            </div>
        </div>
    )
}