import '../styles/aboutUs.css'
import Navbar from './Navbar'
import WhatPhoto from '../images/Photo-about.jpg'
import Sofa from '../images/Sofa.jpg'
import Ada from '../images/Ada.png'
import Hamzat from '../images/Hamzat.png'
import Femi from '../images/Femi.png'
import Footer from './Footer'
import Copyright from './Copyright'

function AboutUs() {
  return (
    <div className='aboutUs'>
        <div className='about-navbar'>
            <Navbar />
        </div>
        <div className="about-hero">
            <div className="about-hero-words">
                <h3>About Us</h3>
                <p>Home / About Us</p>
            </div>
        </div>
        <div className="about-intro">
            <p>&quot;</p>
            <p>I like an interior that defies labelling. i don&apos;t</p>
            <p>really want someone to walk into a room and</p>
            <p>know that i did it</p>
            <p>-BUNNY WILLIAMS</p>
        </div>
        <div className="about-what-we-do">
            <div className='about-what-we-do-words'>
                <h3>What We Do</h3>
                <p>it is a long established fact that a reader will be</p>
                <p>distracted by the of readable content of a page</p>
                <p>when looking at its layouts the points of using</p>
                <p>that it has a more-or-less normal.</p>
                <p>Our Concept &#8594;</p>
            </div>
            <div className='about-what-we-do-image'>
                <img src={WhatPhoto} alt="What We Do Photo"/>
            </div>
        </div>
        <div className='the-end-result'>
            <div className='sofa-image'>
                <img src={Sofa} alt="Sofa" />
            </div>
            <div className='the-end-result-words'>
                <h3>The End Result</h3>
                <p>it is a long established fact that a reader will be</p>
                <p>distracted by the of readable content of a page</p>
                <p>when lookings at its layouts the point of using</p>
                <p>that it has a more-or-less normal.</p>
                <p>Our Portfolio &#8594;</p>
            </div>
        </div>
        <div className='meet-the-team'>
            <div className='meet-the-team-heading'>
                <h3>Meet The Team</h3>
            </div>
            <div className='meet-the-team-images'>
                <img src={Femi} alt="Femi" />
                <img src={Ada} alt="Ada" />
                <img src={Hamzat} alt="Hamzat" />
            </div>
        </div>
        <div>
            <form>
                <div className='talk-form'>
                    <div className='talk-form-heading'>
                        <h3>Creative project? Let&apos;s have</h3>
                        <h3>a productive talk.</h3>
                    </div>
                    <div className='name-and-email'>
                        <div>
                            <label className="form-label" htmlFor="name"></label>
                            <input className="form-input" type="text" id="name" name="name" placeholder="Name" />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="email"></label>
                            <input className="form-input" type="email" id="email" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="info"></label>
                        <textarea className="form-input" id="info" name="info" placeholder="Hello. I am interested in..."></textarea>
                    </div>
                    <div>
                        <input className="form-submit" type="submit" value="Send Now&#8594;" />
                    </div>
                </div>
            </form>
        </div>
        <div className='about-footer'>
            <Footer />
        </div>
        <div className='about-copyright'>
            <Copyright />
        </div>
    </div>
  )
}

export default AboutUs