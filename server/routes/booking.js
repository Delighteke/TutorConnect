const Booking = require('./models/Booking');

// Create a Booking
app.post('/api/bookings', async (req, res) => {
  const { studentId, tutorId, date, subject } = req.body;
  try {
    const booking = new Booking({ studentId, tutorId, date, subject });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error creating booking' });
  }
});

// Fetch Bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('studentId tutorId', 'username');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
});
