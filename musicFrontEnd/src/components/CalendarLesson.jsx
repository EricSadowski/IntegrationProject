import React, {useState} from 'react'
import { Calendar } from 'react-big-calendar';
import { dateFnsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css"
import { startOfWeek, getDay, parse, format  } from 'date-fns';
import DatePicker from 'react-datepicker';


const locales = {
    "en-US": import("date-fns/locale/en-US").then((module) => module.default)

}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2024,3,23),
        end: new Date(2024,3,23)
    },
    {
        title: "Vaction",
        start: new Date(2024,3,24),
        end: new Date(2024,3,24)
    },
    {
        title: "Lil Meeting",
        start: new Date(2024,3,25),
        end: new Date(2024,3,25)
    }
]

const CalendarLesson = () => {
  return (
    <div >
     <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{height:500, margin:"50px"}}/>

    </div>
  )
}

export default CalendarLesson