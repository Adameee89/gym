import { Box } from '@mui/material'
import React, { useState } from 'react'

import HeroBannerComponent from '../components/HeroBannerComponent'
import ExercisesComponent from '../components/ExercisesComponent'
import SearchExercisesComponent from '../components/SearchExercisesComponent'

function HomePage() {

  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <HeroBannerComponent />
      <SearchExercisesComponent 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart} 
      setExercises={setExercises} 
      />
      <ExercisesComponent 
      bodyPart={bodyPart} 
      exercises={exercises}
      setExercises={setExercises}  />
    </Box>
  )
}

export default HomePage