import '../styles/footer.css'
import FooterLogo from '../images/Logo.png'

function Footer() {
  return (
    <div className="footer">
        <div>
            <div className="logo">
                <img src={FooterLogo} />
                <h3>Interno</h3>
            </div>
            <p>it is a long established fact that a reader</p>
            <p>will be distracted lookings.</p>
            <p>Social media icons</p>
        </div>
        <div>
            <h3>Pages</h3>
            <a href="/about">About Us</a>
            <p>Our Projects</p>
            <p>Our Team</p>
            <p>Contact Us</p>
            <a href="/services">Services</a>
        </div>
        <div>
            <h3>Services</h3>
            <p>Kitchen</p>
            <p>Living Area</p>
            <p>Bathroom</p>
            <p>Dining Hall</p>
            <p>Bedroom</p>
        </div>
        <div>
            <h3>Contact</h3>
            <p>55 Ikire Ave.</p>
            <p>Akure, Ondo 34021</p>
            <p>contact@interno.com</p>
            <p>(123) 456 - 7890</p>
        </div>
    </div>
  )
}

export default Footer