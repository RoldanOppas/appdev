import React, { useState, useEffect } from 'react';
import eventsData from '../data/events.json'; 
import '../css/Calendar.css'; 

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const renderEvents = (date) => {
    const dateStr = date.toISOString().split('T')[0]; 
    const dayEvents = events.filter(event => event.date === dateStr);
    
    return dayEvents.map(event => (
      <div
        key={event.title}
        className={`event ${event.type}`}
        data-description={event.description}  
      >
        <strong>{event.title}</strong>    
      </div>
    ));
  };


  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setCurrentDate(selectedDate);
    setSelectedDate(selectedDate);
  };

  // Handle day click
  const handleDayClick = (date) => {
    setSelectedDate(date);
    setCurrentDate(date);
  };

  // Render the calendar grid
  const renderCalendar = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();

    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let day = 1; day <= totalDays; day++) {
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = dateStr === selectedDate.toISOString().split('T')[0] ? 'selected' : '';
      days.push(
        <div key={dateStr} className={`calendar-day ${isSelected}`} onClick={() => handleDayClick(new Date(dateStr))}>
          <div className="date">{day}</div>
          <div className="events">{renderEvents(new Date(dateStr))}</div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div><h2 className="calendar_h2">School Calendar</h2></div>
      <div className="calendar-nav">
        <input
          type="date"
          value={currentDate.toISOString().split('T')[0]} 
          onChange={handleDateChange}
        />
        <span className="month-year">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </span>
      </div>
      <div className="calendar-header">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="calendar-grid">
        {renderCalendar()}
      </div>
      <div className="calendar-legend">
        <div className="legend-item">
          <span className="legend-color holiday"></span>Holiday
        </div>
        <div className="legend-item">
          <span className="legend-color activity"></span>Activity
        </div>
        <div className="legend-item">
          <span className="legend-color meeting"></span>Meeting
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
