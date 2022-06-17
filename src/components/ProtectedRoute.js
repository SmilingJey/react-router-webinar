import {UserContext} from "../user-context";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { useLocation , Route} from "react-router-dom";


const ProtectedRoute = (props) => {
    const isAuthChecked = true; //ожидаем проверки авторизации
    const [user] = useContext(UserContext); //получаем данные авторизации
    const location = useLocation();

    if (!isAuthChecked) return null; //или прелоадер

    if (!user) {
        return (
            <Redirect
              to={{
                  pathname: "/login",
                  state: {from: location}
              }} />
        )
    }

    return <Route {...props} /> 
}

export default ProtectedRoute;