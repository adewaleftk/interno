import '../styles/info.css'
import Photo from '../images/Photo-1.jpg'

function Info() {
  return (
    <div className="info">
        <div className="infos">
            <div className="info-header">
                <p>We Create The Art</p>
                <p>Of Stylish Living</p>
                <p>Stylishly</p>
            </div>
            <div className="info-sub-header">
                <p>It is a long established fact that a reader will be</p>
                <p>distracted by the of readable content of a page</p>
                <p>when looking at its layouts the points of using</p>
                <p>that it has a more-or-less normal.</p>
            </div>
            <div className="call">          
                <div className="phone">&#128222;</div>
                <div className="call-info">
                    <p>012345678</p>
                    <p>Call Us Anytime</p>
                </div>
            </div>
            <div className="get">
                <p>Get Free Estimate &#8594;</p>
            </div>
        </div>
        <div className="info-image">
            <img src={Photo} alt="Info Image" height="653px" />
        </div>
    </div>
  )
}

export default Info