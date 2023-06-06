import '../styles/whatPeopleThink.css'
import Natasha from '../images/Natasha.jpg'
import Raymond from '../images/Raymond.jpg'
import Benny from '../images/Benny.jpg'

function WhatPeopleThink() {
  return (
    <div className="whatPeopleThink">
        <div className="heading">
            <p>What the People Thinks</p>
            <p>About Us</p>
        </div>
        <div className="full-info">
            <div className="what">
                <div className="image-info">
                    <div>
                    <img src={Natasha} alt="Natasha" /></div>
                    <div className="what-name">
                        <p>Natasha Mith</p>
                        <p>Sydney, USA</p>
                    </div>
                </div>
                <div>
                    <p>Lorem Ipsum is a simply dummy</p>
                    <p>text of the typesetting industry.</p>
                    <p>Ipsum has been</p>
                </div>
            </div>
            <div className="what">
                <div className="image-info">
                    <div>
                    <img src={Raymond} alt="Raymond" /></div>
                    <div className="what-name">
                        <p>Raymond Galario</p>
                        <p>Sydney, Australia</p>
                    </div>
                </div>
                <div>
                    <p>Lorem Ipsum is a simply dummy</p>
                    <p>text of the typesetting industry.</p>
                    <p>Ipsum has been</p>
                </div>
            </div>
            <div className="what">
            <div className="image-info">
                <div>
                    <img src={Benny} alt="Benny Roll"/>
                </div>
                <div className="what-name">
                    <p>Benny Roll</p>
                    <p>Sydney, New York</p>
                </div>
                </div>
                <div>
                    <p>Lorem Ipsum is a simply dummy</p>
                    <p>text of the typesetting industry.</p>
                    <p>Ipsum has been</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatPeopleThink