import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../../CSS/ExerciseTable.css"

function ExerciseRow({ exercise, onUpdate, onDelete }) {
  const handleDelete = () => {
    onDelete(exercise._id);
  };

  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>{exercise.weight}</td>
      <td>{exercise.unit}</td>
      <td>{exercise.date}</td>
      <td>
        <Link className='update-button' to={`/edit/${exercise._id}`}>
          <FaEdit />
        </Link>
        <button className="delete-button" onClick={handleDelete}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

export default ExerciseRow;
