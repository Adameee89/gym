import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function ExerciseCardComponent({exercise}) {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
        <img 
        src={exercise.gifUrl} 
        alt={exercise.name} 
        loading='lazy' />
        <Stack direction='row'>
            <Button  sx={{ ml: '25px', color: '#fff', background: '#f72d2d', 
                fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', fontWeight: 'bold' }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '25px', color: '#fff', fontWeight: 'bold', background: '#f7b11e', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography 
        ml='25px' 
        color='#000' 
        fontWeight='bold' 
        mt='11px' 
        pb='10px' 
        textTransform='capitalize' 
        fontSize='22px'>
            {exercise.name}
            </Typography>
    
    </Link>
  )
}

export default ExerciseCardComponent