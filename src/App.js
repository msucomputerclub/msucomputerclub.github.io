import Calendar from "./Components/Calendar";
import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import About from "./Components/About";
import Meetings from "./Components/Meetings";
import Eboard from "./Components/E-Board";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Meetings></Meetings>
      <div className="calendar-container">
        <Calendar></Calendar>
      </div>
      <Eboard></Eboard>
    </div>
  );
}

export default App;