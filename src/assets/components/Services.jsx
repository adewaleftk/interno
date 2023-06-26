import '../styles/services.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Copyright from './Copyright'

function Services() {
  return (
    <div className='services'>
      <div className='services-navbar'>
        <Navbar />
      </div>
      <div className="services-hero">
            <div className="services-hero-words">
                <h3>Services</h3>
                <p>Home / Services</p>
            </div>
        </div>
        <div className='services-info-1'>
          <div>
            <h3>Project Plan</h3>
            <p>There are many variations of the</p>
            <p>passages of lorem ipsum from</p>
            <p>available, majority</p>
            <p>Read More <>&#8594;</></p>
          </div>
          <div>
            <h3>Interior Work</h3>
              <p>There are many variations of the</p>
              <p>passages of lorem ipsum from</p>
              <p>available, majority</p>
              <p>Read More <>&#8594;</></p>
          </div>
          <div>
            <h3>Retail Design</h3>
              <p>There are many variations of the</p>
              <p>passages of lorem ipsum from</p>
              <p>available, majority</p>
              <p>Read More <>&#8594;</></p>
          </div>
        </div>
        <div className='services-info-2'>
          <div>
            <h3>2d/3d Art Work</h3>
              <p>There are many variations of the</p>
              <p>passages of lorem ipsum from</p>
              <p>available, majority</p>
              <p>Read More <>&#8594;</></p>
          </div>
          <div>
            <h3>Interior Work</h3>
              <p>There are many variations of the</p>
              <p>passages of lorem ipsum from</p>
              <p>available, majority</p>
              <p>Read More <>&#8594;</></p>
          </div>
          <div>
            <h3>Decoration Work</h3>
              <p>There are many variations of the</p>
              <p>passages of lorem ipsum from</p>
              <p>available, majority</p>
              <p>Read More <>&#8594;</></p>
          </div>
        </div>
      <div className='services-footer'>
        <Footer />
      </div>
      <div className='services-copyright'>
        <Copyright />
      </div>
    </div>
  )
}

export default Services