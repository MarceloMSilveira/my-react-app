import Card from './Card'
import contacts from '../contact';
import Avatar from './Avatar'

function renderCard(contact) {
  return(
    <Card 
        key = {contact.id}
        name = {contact.name}
        img = {{
          src:contact.imgURL,
          alt:"avatar_img"
        }}
        phone = {contact.phone}
        email = {contact.email}
      />
  )
}

function App() {
  return (
    <>
      <h1 className="heading">My contacts</h1>
      
      {/* Show my avatar */}
      <Avatar 
        img={{src:"/images/eu.jpg",
          alt:"avatar_img"}} 
      />

      {contacts.map(renderCard)}

      <p>Copyright © MS1 {new Date().getFullYear()}</p>
    </>
  )
}

export default App;

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.