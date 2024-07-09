import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Logo from '../assets/images/Logo-1.png'

function FooterComponent() {
  return (
    <Box mt="80px" bgcolor="#fff3f4" p="40px 0">
      <Stack gap="40px" alignItems="center">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography mt='20px'  variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} fontWeight="600" >
          Made with ❤️ by Adam

        </Typography>
      </Stack>
    </Box>
  )
}

export default FooterComponent