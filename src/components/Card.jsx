import Avatar from "./Avatar";
import Detail from "./Detail";

function Card ({name, img, phone, email}) {
  //console.log("test")
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <Avatar img={{src:img.src, alt:img.alt}}/>
      </div>
      <div className="bottom">
        <Detail userInfo={phone}/>
        <Detail userInfo={email}/>
      </div>
      
    </div>
  )
}

export default Card;