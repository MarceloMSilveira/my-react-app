import Card from './Card'

function App() {
  return (
    <>
      <h1>My contacts</h1>
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