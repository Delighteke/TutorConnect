// Fetch Tutor Profile
app.get('/api/tutors/:id', async (req, res) => {
    try {
      const tutor = await User.findById(req.params.id);
      if (!tutor) return res.status(404).json({ error: 'Tutor not found' });
      res.json(tutor);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching tutor profile' });
    }
  });
  
  // Update Tutor Profile
  app.put('/api/tutors/:id', async (req, res) => {
    try {
      const { username, role } = req.body;
      const tutor = await User.findByIdAndUpdate(req.params.id, { username, role }, { new: true });
      if (!tutor) return res.status(404).json({ error: 'Tutor not found' });
      res.json(tutor);
    } catch (error) {
      res.status(500).json({ error: 'Error updating tutor profile' });
    }
  });
  