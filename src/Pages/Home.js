import React, { useState, useEffect } from 'react';
import ExerciseTableContainer from '../Components/ExerciseTableComps/ExerciseTableContainer';

function Home() {
  const [exercises, setExercises] = useState([]);


  const handleUpdate = (id) => {
    // TODO: implement update functionality
  };

  const handleDelete = (id) => {
    // TODO: implement delete functionality
  };

  return (
<ExerciseTableContainer />
  );
}

export default Home;
