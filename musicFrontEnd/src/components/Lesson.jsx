import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";

const Lesson = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState();
  const [lessons, setLessons]=useState([])

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const start = date + "T12:00:00"
    const lesson = {name, start}
    console.log(lesson)
    fetch("http://localhost:8081/lesson/add",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(lesson)
    }).then(()=>{
        console.log("New lesson added")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8081/lesson/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setLessons(result);
    }
    )
  }, [])

  return (
    <div>
      <h1>Add Lesson</h1>
      <form>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Lesson Name" /><br/>
        <input type="date" value={date} onChange={handleDateChange} />
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
      <h1>Lessons</h1>

        <div>
            {lessons.map(lesson=>(
                <div key={lesson}>
                    Id: {lesson.id} <br/>
                    Name: {lesson.name} <br/>
                    Date: {lesson.start} <br/>

                </div>
            ))}
        </div>

    </div>
  );
};

export default Lesson;