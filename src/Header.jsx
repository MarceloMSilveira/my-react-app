function setHeader(time) {
  console.log(time)
  let msg = '';
  let color = '';
  if (time < 12) {
    msg = "Good morning";
    color = "red";
  } else if (time >= 12 && time <= 18) {
    msg = "Good afternoon";
    color = "green";
  } else if (time > 18) {
    msg = "Good evening";
    color = "blue";
  } else {
    msg = "Invalid time";
  }  
  return {msg: msg,color: color}
}

function Header() {
  const time = new Date(2025,4,1,13).getHours();
  const result = setHeader(time);
  let msg = result.msg;
  let msgColor = {color:`${result.color}`};
  console.log(msgColor)
  
  return(
    <h1 style={msgColor}>{msg}</h1>
  )

}

export default Header;
