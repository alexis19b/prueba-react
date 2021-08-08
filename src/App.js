import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InfoScreen from "./components/infoscreen/InfoScreen";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import "./App.css";
import Inicio from "./pages/inicio/Inicio";
import Pacientes from "./pages/pacientes/Pacientes";
import NavBar from "./components/navbar/NavBar";
import Medicos from "./pages/medicos/Medicos";
import Consultorios from "./pages/consultorios/Consultorios";
import Agenda from "./pages/agenda/Agenda";

function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <div className="container">
          <Sidebar />
          <div className="continerPages">
            <InfoScreen />
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Inicio />
              </Route>
              <Route path="/Pacientes">
                <Pacientes />
              </Route>
              <Route path="/Medicos">
                <Medicos />
              </Route>
              <Route path="/Consultorios">
                <Consultorios />
              </Route>
              <Route path="/Agenda">
                <Agenda />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
