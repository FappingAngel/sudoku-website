import DateCalendar from "../../components/calendar/calendar";
import NavBar from "../../components/navbar/navbar";
import ScrollableTaskList from "../../components/taskList/taskList";
import './Home.css'


export default function HomeScreen(){
return (
    <div className="App">
      <span><NavBar /></span>
      <div className="tasks">
        <ScrollableTaskList />
      </div>
      <div className="calendar">
        <DateCalendar/>
      </div>
    </div>

  );
};