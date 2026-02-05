import Box from '@mui/material/Box'
import React from 'react'

const StyledImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <Box
      component="img"
      draggable={false}
      style={{ userSelect: 'none', pointerEvents: 'none' }}
      {...props}
    />
  )
}

export default StyledImage
