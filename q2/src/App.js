import React, { useState, useEffect } from 'react';
//component to display current time
function CurrentTime() {
  //setting the current time in variable currentTime
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  //updates current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  //displays current time
  return <h3>The current time is {currentTime}</h3>;
}
//component to display current date
function CurrentDate() {
  const currentDate = new Date().toLocaleDateString();
  //displaying current date
  return <h3>Today's date is {currentDate}</h3>;
}
//component to display my name
function MyName() {
  return <h3>My name is Javaria Shabbir</h3>;
}

function App() {
  return (
    <div>
      <MyName />
      <CurrentDate />
      <CurrentTime />
    </div>
  );
}

export default App;
