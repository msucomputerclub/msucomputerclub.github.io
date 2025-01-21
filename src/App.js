import Calendar from "./Components/Calendar";
import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      
      <div className="calendar-container">
        <Calendar></Calendar>
      </div>
    </div>
  );
}

export default App;