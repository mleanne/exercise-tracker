const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
app.use(express.json());
app.use(cors());


// Example data to store exercises
let exercises = [
  {
    _id: 1,
    name: 'Bench Press',
    reps: 10,
    weight: 100,
    unit: 'kg',
    date: '2022-03-17'
  },
  {
    _id: 2,
    name: 'Squats',
    reps: 8,
    weight: 120,
    unit: 'kg',
    date: '2022-03-16'
  }
];

// Endpoint for creating exercises
app.post('/exercises', (req, res) => {
  const exercise = req.body;
  const newId = exercises.length + 1;
  exercise._id = newId;
  exercises.push(exercise);
  res.status(201).send(exercise);
});




app.get('/exercises', (req, res) => {
  console.log('Fetching all exercises...');
  console.log('Exercises:', exercises);
  res.send(exercises);
});

// Endpoint for deleting an exercise by id
app.delete('/exercises/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const exerciseIndex = exercises.findIndex(ex => ex._id === id);
  if (exerciseIndex === -1) {
    res.status(404).send();
  } else {
    exercises.splice(exerciseIndex, 1);
    res.sendStatus(204);
  }
});

// Endpoint for reading a single exercise by id
app.get('/exercises/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const exercise = exercises.find(ex => ex._id === id);
  if (!exercise) {
    res.status(404).send();
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Add this header
    res.send(exercise);
  }
});

// Endpoint for updating an exercise by id
app.put('/exercises/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const exerciseIndex = exercises.findIndex(ex => ex._id === id);
  if (exerciseIndex === -1) {
    res.status(404).send();
  } else {
    exercises[exerciseIndex] = {
      ...exercises[exerciseIndex],
      ...req.body
    };
    res.send(exercises[exerciseIndex]);
       res.status(201).send();
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



      


// const express = require('express');
// const app = express();
// const port = 8080;
// const cors = require('cors');
// const mongoose = require('mongoose');

// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/exercises', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.error(error));

// // Define the exercise schema
// const exerciseSchema = new mongoose.Schema({
//   name: String,
//   reps: Number,
//   weight: Number,
//   unit: String,
//   date: Date
// });

// // Define the Exercise model
// const Exercise = mongoose.model('Exercise', exerciseSchema);

// // Endpoint for creating exercises
// app.post('/exercises', (req, res) => {
//   const exercise = new Exercise(req.body);
//   exercise.save()
//     .then(result => res.status(201).send(result))
//     .catch(error => res.status(500).send(error));
// });

// // Endpoint for getting all exercises
// app.get('/exercises', (req, res) => {
//   Exercise.find()
//     .then(result => res.send(result))
//     .catch(error => res.status(500).send(error));
// });

// // Endpoint for deleting an exercise by id
// app.delete('/exercises/:id', (req, res) => {
//   const id = req.params.id;
//   Exercise.findByIdAndDelete(id)
//     .then(result => {
//       if (!result) {
//         res.status(404).send();
//       } else {
//         res.sendStatus(204);
//       }
//     })
//     .catch(error => res.status(500).send(error));
// });

// // Endpoint for getting a single exercise by id
// app.get('/exercises/:id', (req, res) => {
//   const id = req.params.id;
//   Exercise.findById(id)
//     .then(result => {
//       if (!result) {
//         res.status(404).send();
//       } else {
//         res.send(result);
//       }
//     })
//     .catch(error => res.status(500).send(error));
// });

// // Endpoint for updating an exercise by id
// app.put('/exercises/:id', (req, res) => {
//   const id = req.params.id;
//   Exercise.findByIdAndUpdate(id, req.body, { new: true })
//     .then(result => {
//       if (!result) {
//         res.status(404).send();
//       } else {
//         res.send(result);
//       }
//     })
//     .catch(error => res.status(500).send(error));
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
