import './App.css';
import Homepage from "./pages/Homepage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Projectspage from "./pages/Projectspage";
import Issuespage from "./pages/Issuespage";
import Userspage from "./pages/Userspage";
import Reportspage from "./pages/Reportspage";
import Dashboardpage from "./pages/Dashboardpage";
import UserDetailPage from "./pages/UserDetailPage";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/Projects" exact component={Projectspage}/>
                <Route path="/Issues" exact component={Issuespage}/>
                <Route path="/Users" exact component={Userspage}/>
                <Route path="/Reports" exact component={Reportspage}/>
                <Route path="/DashBoard" exact component={Dashboardpage}/>
                <Route path="/Users/UserDetails" exact component={UserDetailPage}/>

            </Switch>

        </Router>
    </div>
  );
}

export default App;
