import Box, { type BoxProps } from '@mui/material/Box'

const StyledImage = ({ sx, ...props }: BoxProps<'img'>) => {
  return (
    <Box
      height="100%"
      draggable={false}
      sx={{
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    >
      <Box
        component="img"
        sx={{
          objectFit: 'contain',
          width: '100%',
          height: '100%',
          ...sx,
        }}
        {...props}
      />
    </Box>
  )
}

export default StyledImage
