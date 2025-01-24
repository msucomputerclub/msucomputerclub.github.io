import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./index.scss";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Pizza Social',
    start: new Date(2025, 0, 30, 16, 0),
    end: new Date(2025, 0, 30, 17, 0),
    png: process.env.PUBLIC_URL + '/Images/Back.png', 
  },
  {
    title: 'Good Bear Speakers',
    start: new Date(2025, 1, 4, 15, 0),
    end: new Date(2025, 1, 4, 17, 0),
    png: process.env.PUBLIC_URL + '/Images/goodbear-flyer.png', 
  },
  {
    title: 'ARM Workshop 1',
    start: new Date(2025, 1, 6, 17, 30),
    end: new Date(2025, 1, 4, 19, 30),
    png: process.env.PUBLIC_URL + '/Images/arm-flyer.png', 
  }
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
