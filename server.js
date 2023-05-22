// Required modules
const express = require('express');
const path = require('path');

const app = express();
// HTML Routes
const note = require('./routes/notes.js')

// Server to listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Home page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Notes page route
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.use("/api/notes", notes);

app.listen(PORT, () => console.log(`Server listening port ${PORT}`));