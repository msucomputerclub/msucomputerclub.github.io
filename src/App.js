import Calendar from "./Components/Calendar";
import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import About from "./Components/About";
import Meetings from "./Components/Meetings";
import Eboard from "./Components/E-Board";
import Socials from "./Components/Socials";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div id="home">
        <Home></Home>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="meetings">
        <Meetings></Meetings>
      </div>
      <div id="calendar" className="calendar-container">
        <Calendar></Calendar>
      </div>
      <div id="e-board">
        <Eboard></Eboard>
      </div>
      <div id="socials">
        <Socials id="socials"></Socials>
      </div>
    </div>
  );
}

export default App;