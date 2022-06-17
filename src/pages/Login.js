import { useContext } from "react";
import {useHistory, useLocation} from "react-router-dom"
import { UserContext } from "../user-context";

function Login() {
  const [, setUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const onLogin = () => {
    setUser("SomeUserName")
    const { from } = location.state || { from: { pathname: "/" } };
    history.push(from);
  }

  return (
    <>
      <h1>Login page content</h1>
      <h1>location: {JSON.stringify(location)}</h1>
      <button onClick={onLogin}>Login</button>
    </>
  ) 

}

export default Login;
