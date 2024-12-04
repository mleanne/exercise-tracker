import React, { useState, useEffect } from "react";
import ExerciseRow from "./ExerciseRow";
import "../../CSS/ExerciseTable.css"
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
function ExerciseTable({ exercises, onUpdate, onDelete }) {
  return (
    <table className="exercise-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Unit</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise) => (
          <ExerciseRow
            key={exercise._id}
            exercise={exercise}
            onUpdate={onUpdate}
            onDelete={() => onDelete(exercise._id)} 
            />         
        ))}
      </tbody>
    </table>
  );
}

export default ExerciseTable;
