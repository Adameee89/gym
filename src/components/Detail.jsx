import { Button, Stack, Typography } from '@mui/material';
import React from 'react'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

function Detail({ exerciseDetail }) {

  const { name, bodyPart, gifUrl, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    }
  ]
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant='h3' sx={{ fontSize: { lg: '64px', xs: '30px' } }} >
          {name}
        </Typography>
        <Typography variant='h6' sx={{ fontSize: { lg: '24px', xs: '18px' } }}>
          Exercises keep you strong. {name} {` `}
          is one of the best exercises to target your {target}. 
          It will help you improve your mood and gain energy.
        </Typography>

        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ backgroundColor: '#fff', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography variant="h5" textTransform="capitalize">{item.name}</Typography>
          </Stack>
        ))}
            
      </Stack>
    </Stack>
  )
}

export default Detail