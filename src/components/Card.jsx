import Avatar from "./Avatar";

function Card ({name, img, phone, email}) {
  //console.log("test")
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <Avatar img={{src:img.src, alt:img.alt}}/>
      </div>
      <div className="bottom">
        <p className="info">{phone}</p>
        <p className="info">{email}</p>
      </div>
      
    </div>
  )
}

export default Card;