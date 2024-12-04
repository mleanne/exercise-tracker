import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../CSS/create-exercise.css'
function CreateExercise() {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("lbs");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCreateExercise = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/exercises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          reps,
          weight,
          unit,
          date,
        }),
      });
      if (!response.ok) {
      
           alert("Failed to create exercise");
          navigate('/');
        
      }
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };

  return (
    <div className="create-exercise-page">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success" role="alert">
          Exercise created successfully!
        </div>
      )}
      <h2>Create New Exercise</h2>
      <form onSubmit={handleCreateExercise}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reps">Reps:</label>
          <input
            type="number"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-group form-control">
  <label>
    Unit:
    <select name="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
      <option value="lbs">lbs</option>
      <option value="kgs">kgs</option>
    </select>
  </label>
</div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Create Exercise</button>
      </form>
    </div>
  );
}

export default CreateExercise;
