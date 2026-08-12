import Box, { type BoxProps } from '@mui/material/Box'

const StyledImage = ({ sx, ...props }: BoxProps<'img'>) => {
  return (
    <Box
      component="img"
      draggable={false}
      // Decode off the main thread so a large photo landing mid-animation
      // cannot block a frame. Overridable per image via props.
      decoding="async"
      sx={{
        userSelect: 'none',
        pointerEvents: 'none',
        objectFit: 'contain',
        width: '100%',
        height: '100%',
        ...sx,
      }}
      {...props}
    />
  )
}

export default StyledImage
