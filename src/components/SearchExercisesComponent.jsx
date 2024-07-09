import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


function SearchExercisesComponent({setExercises, bodyPart, setBodyPart}) {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])


    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData
            ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData()
        
    },  [])

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData
            ('https://exercisedb.p.rapidapi.com/exercises?limit=1327&offset=0', exerciseOptions)

            const searchedExercises = exercisesData.filter(
            (exercise) => exercise.name.toLowerCase().includes(search)
            || exercise.target.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search)
            || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('')
            setExercises(searchedExercises)
        }
    }


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
            Awsome Exercises You<br/> Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
            sx={{ 
                input: { 
                    fontWeight: '700', 
                    border: 'none', 
                    borderRadius: '4px' 
                }, 
            width: { 
                lg: '800px', 
                xs: '350px' 
            }, 
                backgroundColor: '#fff', 
                borderRadius: '40px'
            }}
            />

            <Button className="search-btn" 
            sx={{ 
                bgcolor: '#FF2625', 
                color: '#fff', 
                textTransform: 'none', 
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
            width: { 
                lg: '175px', 
                xs: '80px' 
                },
                fontSize: { 
                lg: '20px', 
                xs: '14px' 
                },  
                height: '56px', 
                position: 'absolute', 
                right: '0' 
                }}
                onClick={handleSearch}
                >
                Search
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
        </Box>
    </Stack>
  )
}

export default SearchExercisesComponent