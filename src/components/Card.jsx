function Card ({name, img, phone, email}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img.src} alt={img.alt} />
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  )
}

export default Card;