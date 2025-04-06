export default function Input({type}) {
  if (type==="text") {
    return <input type="text" placeholder="Username" />
  } elseif (type==="password") {
    return <input type="password" placeholder="Password" />
  }
}