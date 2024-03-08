import React from "react";
import Calendar from 'react-calendar';
import { ScrollableTaskListShortened } from "../taskList/taskList";
import "./calendar.css";


export function DateCalendar() {
    return (
        <div className="calendarContainer">
            <Calendar calendarType="iso8601"/>
            <ScrollableTaskListShortened/>
        </div>
    );
}

export default DateCalendar;