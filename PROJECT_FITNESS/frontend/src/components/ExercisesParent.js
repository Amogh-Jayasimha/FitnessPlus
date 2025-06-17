import React from 'react'
import SearchExercises from './SearchExercises';
import Exercises from './Exercises';
import { useState } from 'react';
import { Box } from '@mui/material';

const ExercisesParent = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
  </Box>
  )
}

export default ExercisesParent