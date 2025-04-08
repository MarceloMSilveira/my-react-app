
export default function Item({id,itemContent,funcToDelete}) {
  return (
    <li onClick={()=>funcToDelete(id)}>
      {itemContent}
    </li>)
}