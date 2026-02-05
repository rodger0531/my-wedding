import Box, { type BoxProps } from '@mui/material/Box'

const StyledImage = (props: BoxProps<'img'>) => {
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
