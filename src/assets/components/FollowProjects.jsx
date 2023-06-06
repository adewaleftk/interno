import '../styles/followProjects.css'
import Kitchen from'../images/Photo-wash.png'
import Mirror from '../images/Photo-mirror.png'
import Table from '../images/Photo-table.png'
import Room from '../images/Photo-sitting_room.png'

function FollowProjects() {
  return (
    <div className="follow-projects">
        <div className="follow-our-projects">
        <div className="follow-projects-heading">
            <h3>Follow Our Projects</h3>
            <p>it is a long established fact that a reader will be distracted by the of readable</p>
            <p>content of page lookings at its layouts points.</p>
        </div>
        <div className="follow-projects-wrap">
            <div className="follow-projects-info">
                <img src={Kitchen} alt="Modern Kitchen" />
                <p>Modern Kitchen</p>
                <p>Decor / Architecture</p>
                <span>&gt;</span>
            </div>
            <div className="follow-projects-info">
                <img src={Mirror} alt="Kitchen Mirror" />
                <p>Modern Kitchen</p>
                <p>Decor / Architecture</p>
                <span>&gt;</span>
            </div>
            <div className="follow-projects-info">
                <img src={Table} alt="Table" />
                <p>Modern Kitchen</p>
                <p>Decor / Architecture</p>
                <span>&gt;</span>
            </div>
            <div className="follow-projects-info">
                <img src={Room} alt="Sitting Room" />
                <p>Modern Kitchen</p>
                <p>Decor / Architecture</p>
                <span>&gt;</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FollowProjects