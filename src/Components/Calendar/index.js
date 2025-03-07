import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./index.scss";

const localizer = momentLocalizer(moment);

const generateRecurringEvents = (startDate, recurrenceRule, totalOccurrences) => {
  const events = [];
  let currentDate = moment(startDate);

  for (let i = 0; i < totalOccurrences; i++) {
    events.push({
      title: `General Body Meeting ${i + 1}`,
      start: currentDate.toDate(),
      end: currentDate.add(1, 'hour').toDate(), // Adjust the duration as needed
      png: process.env.PUBLIC_URL + '/Images/gbm-flyer.png', // Replace with actual image URL
    });

    // Update currentDate based on recurrence rule
    if (recurrenceRule === 'monthly') {
      currentDate.subtract(1,'hour');
      currentDate.add(1, 'month');
    } else if (recurrenceRule === 'weekly') {
      currentDate.subtract(1,'hour')
      currentDate.add(1, 'week');
    } else if (recurrenceRule === 'daily') {
      currentDate.subtract(1,'hour')
      currentDate.add(1, 'day');
    }
  }

  return events;
};

const events = [
  {
    title: "Pizza Social",
    start: new Date(2025, 1, 6, 16, 0),
    end: new Date(2025, 1, 6, 17, 0),
    png: process.env.PUBLIC_URL + "/Images/Back.png",
  },
  {
    title: "Good Bear Speakers",
    start: new Date(2025, 1, 4, 15, 0),
    end: new Date(2025, 1, 4, 17, 0),
    png: process.env.PUBLIC_URL + "/Images/goodbear-flyer.png",
  },
  {
    title: "Intro to React: Coding Your Personal Website",
    start: new Date(2025, 1, 27, 15, 0),
    end: new Date(2025, 1, 27, 17, 30),
    png:
      process.env.PUBLIC_URL + "/Images/Intro-to-React-Crafting-Your-Personal-Website.png",
  },
  {
    title: "Intro to React: Coding Your Personal Website",
    start: new Date(2025, 2, 6, 15, 0),
    end: new Date(2025, 2, 6, 17, 30),
    png:
      process.env.PUBLIC_URL + "/Images/Intro-to-React-Crafting-Your-Personal-Website.png",
  },
  {
    title: "ARM Workshop 1",
    start: new Date(2025, 1, 6, 17, 30),
    end: new Date(2025, 1, 6, 19, 0),
    png: process.env.PUBLIC_URL + "/Images/arm-flyer.png",
  },
  {
    title: "ARM Workshop 2",
    start: new Date(2025, 1, 20, 17, 30),
    end: new Date(2025, 1, 20, 19, 0),
    png: process.env.PUBLIC_URL + "/Images/arm-flyer.png",
  },
  {
    title: "ARM Workshop 3",
    start: new Date(2025, 2, 6, 17, 30),
    end: new Date(2025, 2, 6, 19, 0),
    png: process.env.PUBLIC_URL + "/Images/arm-flyer.png",
  },
  {
    title: "ARM Workshop 4",
    start: new Date(2025, 2, 20, 17, 30),
    end: new Date(2025, 2, 20, 19, 0),
    png: process.env.PUBLIC_URL + "/Images/arm-flyer.png",
  },
  {
    title: "ARM Workshop 5",
    start: new Date(2025, 3, 3, 17, 30),
    end: new Date(2025, 3, 3, 19, 0),
    png: process.env.PUBLIC_URL + "/Images/arm-flyer.png",
  },
  {
    title: "ARM Workshop 6",
    start: new Date(2025, 3, 17, 17, 30),
    end: new Date(2025, 3, 17, 19, 30),
    png: process.env.PUBLIC_URL + "/Images/arm-flyer.png",
  },
  ...generateRecurringEvents(new Date(2025, 1, 6, 16, 0), "weekly", 12),
];

const MyCalendar = () => {
  const [open, setOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null); 

  const [resize, setResize] = useState(window.innerWidth < 900);
  useEffect(() => {
      const handleResize = () => {
          setResize(window.innerWidth < 900); // Update state based on window size
      };

      window.addEventListener("resize", handleResize); // Add resize event listener

      return () => {
          window.removeEventListener("resize", handleResize); // Clean up listener on unmount
      };
  }, []);


  const clickHandler = (event) => {
    if (event.png) {
      setSelectedImage(event.png); 
      setOpen(true); 
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: resize? '50vh':'70vh', width: resize? '90vw':'70vw', fontSize: resize? "1rem":"1.5rem", color:"#ffffff" }}
        onSelectEvent={clickHandler}
      />

      {/* Modal for displaying the image */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <img
            src={selectedImage}
            alt="Event"
            style={{ maxWidth: resize? '100vw':'100%', maxHeight: '100%' }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default MyCalendar;
