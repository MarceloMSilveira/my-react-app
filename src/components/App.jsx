import Card from './Card'
import contacts from '../contact';

function App() {
  //console.log(contacts[0].name)
  return (
    <>
      <h1 className="heading">My contacts</h1>
       
      <Card 
        name = {contacts[0].name}
        img = {{
          src:contacts[0].imgURL,
          alt:"avatar_img"
        }}
        phone = {contacts[0].phone}
        email = {contacts[0].email}
      />

      <Card 
        name = {contacts[1].name}
        img = {{
          src:contacts[1].imgURL,
          alt:"avatar_img"
        }}
        phone = {contacts[1].phone}
        email = {contacts[1].email}
      />

      <Card 
        name = {contacts[2].name}
        img = {{
          src:contacts[2].imgURL,
          alt:"avatar_img"
        }}
        phone = {contacts[2].phone}
        email = {contacts[2].email}
      />

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