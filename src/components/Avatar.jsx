export default function Avatar({img}) {
  return(
    <img className="circle-img" src={img.src} alt={img.alt} />
  )
}