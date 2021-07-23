import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Chats from "./pages/Chats/chatpage";
import Home from "./pages/Home/index";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/StartPage/Login/Login";
import StartPage from "./pages/StartPage/StartPage";
import ForgotPassword from "./pages/StartPage/ForgotPassword/ForgotPassword";


const App = () => (
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={StartPage} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <PrivateRoute exact path="/chats" component={Chats}></PrivateRoute>
            <Route exact path="/"><Home /></Route>
          </Switch>
        </AuthProvider>
      </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
