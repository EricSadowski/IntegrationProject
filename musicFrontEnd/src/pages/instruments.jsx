import React from 'react';


function Home() {
  // Change the title on the internet tab
  document.title = "Home";

  return (
<>
<h1 className='h1-not-home'>not functional</h1>
<div className='register-form'>
      <Lesson />
      </div>
      
      </>
  );
}

export default Home;