
import React, { useState, useEffect } from 'react';
import './Cube.css';

export default function Playground() {
    const [attendance, setAttendance] = useState(false);
    const [entered, setEntered] = useState(false);
  
    const handleClickToEnter = () => {
      setEntered(true);
    };
  
    const handleMarkAttendance = () => {
      setAttendance(true);
    };
  
    useEffect(() => {
      if (entered) {
        window.location.href = 'https://picsum.photos/200/300?grayscale';
      }
    }, [entered]);
  
    return (
      <div className="cube-container">
        <div className="cube">
          {!entered && (
            <button onClick={handleClickToEnter}>Click to Enter</button>
          )}
          {entered && !attendance && (
            <button onClick={handleMarkAttendance}>Mark Attendance</button>
          )}
          {attendance && <p>Attendance Marked!</p>}
        </div>
      </div>
    );
  };



