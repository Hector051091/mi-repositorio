import Operaciones from "../logic/operaciones";
import Display from "./Display";
import PanelDeBotones from "./PanelDeBotones";
import { Component } from "react";
import "./App.css";

class App extends Component {
  
  state = {
    total: null,
    siguiente: null,
    operador:null,
  }
  
  handleClick = nombreDeBoton => this.setState(Operaciones(this.state, nombreDeBoton))

  render() {
  return (
    <div className="component-app">
    <Display value={this.state.siguiente || this.state.total || "0"}/>
    <PanelDeBotones clickHandle={this.handleClick}/>
    </div>
  )
}
}

export default App;
