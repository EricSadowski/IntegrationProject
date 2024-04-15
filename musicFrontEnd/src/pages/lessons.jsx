import React from 'react';
import Lesson from "../components/Lesson";
import CalendarLesson from '../components/CalendarLesson';

function Home() {
  // Change the title on the internet tab
  document.title = "Home";

  return (
<>

      <Lesson />
      <CalendarLesson/>
      
      </>
  );
}

export default Home;