import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../user-context";

function Settings() {
    const history = useHistory();
    const [, setUser] = useContext(UserContext);
  
    const onLogout = () => {
      setUser("");
      history.push('/')
    }
  
    return (
      <>
        <h1>Settings page content</h1>
        <button onClick={onLogout}>Logout</button>
      </>
    );
  }

export default Settings;