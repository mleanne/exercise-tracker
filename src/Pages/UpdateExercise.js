import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ExerciseForm from '../Components/EditComps/ExerciseForm';
import { useNavigate } from 'react-router-dom';
function UpdateExercise() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exercise, setExercise] = useState(null);
  useEffect(() => {
    async function fetchExercise() {
      const response = await fetch(`http://localhost:8080/exercises/${id}`); // Use template literals
      const data = await response.json();
      setExercise(data);
    }
    fetchExercise();
  }, [id]);
  

  async function handleSubmit(updatedExercise) {
    const response = await fetch(`http://localhost:8080/exercises/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedExercise),
    });
    if (response.ok) {
     
      alert('Exercise updated successfully!');
      navigate('/');
    } else {
      alert('Failed to update exercise.');
      navigate('/');
    }
    
  }

  return (
    <div>
      {exercise ? (
        <ExerciseForm
          defaultValues={exercise}
          onSubmit={handleSubmit}
          submitText="Update Exercise"
        />
      ) : (
        <p>Loading exercise data...</p>
      )}
    </div>
  );
}

export default UpdateExercise;
    
