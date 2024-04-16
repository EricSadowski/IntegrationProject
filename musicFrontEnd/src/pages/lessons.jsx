import React from 'react';
import Lesson from "../components/Lesson";
import CalendarLesson from '../components/CalendarLesson';
import '../styles/Lessons.css';

function Lessons() {
  // Change the title on the internet tab
  document.title = "Lessons";

  return (
    <>
      <div className='page-container'>
        <div className='lesson-and-calendar'>
          <div className='lesson-form'>
            <CalendarLesson />
            <br />
          </div>
          <div className='calendar'>
            {/* <Lesson /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lessons;