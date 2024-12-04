import ExerciseTable from "./ExerciseTable";
import axios from "axios";
import data from '../../TestData.json';
import { useEffect, useState } from "react";
function ExerciseTableContainer() {
    const [exercises, setExercises] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8080/exercises")
        .then((res) => res.json())
        .then((data) => setExercises(data));
    }, []);
    const handleDelete = (id) => {
      fetch(`http://localhost:8080/exercises/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setExercises((prevExercises) =>
              prevExercises.filter((exercise) => exercise._id !== id)
            );
          } else {
            throw new Error('Failed to delete exercise');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    
    return (
      <ExerciseTable exercises={exercises} onDelete={handleDelete} />
    );
  }
  
  export default ExerciseTableContainer;