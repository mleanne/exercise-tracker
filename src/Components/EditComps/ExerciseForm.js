import { useState } from 'react';
import '../../CSS/edit-exercise.css';

function ExerciseForm({ defaultValues, onSubmit, submitText }) {
  const [values, setValues] = useState(defaultValues);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(values);
  }

  return (
    <form className="exercise-form" onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
        />
      </label>
      <label>
        Unit:
        <select name="unit" value={values.unit} onChange={handleChange}>
          <option value="lbs">lbs</option>
          <option value="kgs">kgs</option>
        </select>
      </label>
      <label>
        Weight:
        <input
          type="number"
          name="weight"
          value={values.weight}
          onChange={handleChange}
        />
      </label>
      <label>
        Reps:
        <input
          type="number"
          name="reps"
          value={values.reps}
          onChange={handleChange}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <button type="submit">{submitText}</button>
    </form>
  );
}

export default ExerciseForm;
