import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function ExerciseVideos({ exerciseVideos, name }) {

  if (!exerciseVideos.length) return 'Loading...';
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography variant="h3" mb='33px' sx={{ fontSize: { lg: '44px', xs: '25px' } }}>
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize', fontWeight: 'bold'  }}>{name}</span> exercise videos
      </Typography>

      <Stack 
      sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} 
      justifyContent="flex-start" 
      flexWrap="wrap" 
      alignItems="center">

        {exerciseVideos?.slice(0, 4).map((item, index) => (
          <a 
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`} 
          key={index} 
          className="exercise-video"
          target="_blank"
          rel="noreferrer"
          
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '25px', xs: '15px' } }} fontWeight={600} color="#000" variant='h5'>
                {item.video.title}
              </Typography>
              <Typography sx={{ fontSize: { lg: '20px', xs: '15px' } }} color="#000" variant='h6' mt='10px'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos