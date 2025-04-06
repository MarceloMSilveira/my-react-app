import Input from "./Input"

export default function LoginForm() {
  return(
    <form className="form">
      <Input type="text" />
      <Input type="password" />
      <button type="submit">Login</button>
    </form>
  )}