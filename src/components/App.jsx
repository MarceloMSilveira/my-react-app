import Card from './Card'
import contacts from '../contact';

function App() {
  return (
    <>
      <h1 className="heading">My contacts</h1>
      <Card 
        name = "Beyonce"
        img = {{
          src:"https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
          alt:"avatar_img"
        }}
        phone = "+123 456 789"
        email = "b@beyonce.com"
      />

      <Card 
        name = "Chuck Norris"
        img = {{
          src:"https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
          alt:"avatar_img"
        }}
        phone = "+918 372 574"
        email = "gmail@chucknorris.com"
      />

      <Card 
        name = "Jack Bauer"
        img = {{
          src:"https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
          alt:"avatar_img"
        }}
        phone = "+987 654 321"
        email = "jack@nowhere.com"
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