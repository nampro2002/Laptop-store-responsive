import React from 'react'
import {Box,Typography, Stack} from '@mui/material'
function NotFound() {
  return (
    <Box >
        <Stack bgcolor='#fff' width='70%' margin='0 auto' height='500px' alignItems='center' justifyContent='center' direction='column'>
            <Typography variant='h1' fontWeight='700' align='center'>NOT FOUND</Typography>
        </Stack>
    </Box>
  )
}

export default NotFound