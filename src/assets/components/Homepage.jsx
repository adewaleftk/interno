import Navbar from './Navbar' ;
import Hero from './Hero'
import Header from './Header'
import Info from './Info'
import WhatPeopleThink from './WhatPeopleThink'
import FollowProjects from './FollowProjects'
import YearsOfExperience from './YearsOfExperience'
import Articles from './Articles'
import WannaJoin from './WannaJoin'
import Footer from './Footer'
import Copyright from './Copyright'


function Homepage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Header />
        <Info />
        <WhatPeopleThink />
        <FollowProjects />
        <YearsOfExperience />
        <Articles />
        <WannaJoin />
        <Footer />
        <Copyright />
    </div>
  )
}

export default Homepage