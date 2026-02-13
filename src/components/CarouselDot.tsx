import Box, { type BoxProps } from '@mui/material/Box'

export const DotButton = (props: BoxProps & { selected?: boolean }) => {
  const { children, selected, sx, ...restProps } = props

  return (
    <Box
      component="button"
      type="button"
      sx={{
        position: 'relative',
        touchAction: 'manipulation',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        cursor: { xs: 'none', sm: 'pointer' },
        border: 0,
        padding: 0,
        margin: 0,
        width: '1.5rem',
        height: '1.5rem',
        backgroundColor: 'transparent',
        '&:before': ({ palette }) => ({
          position: 'absolute',
          content: '""',
          width: '0.8rem',
          height: '0.8rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: {
            xs: selected ? palette.primary.main : palette.grey[600],
            sm: selected ? palette.primary.main : palette.grey[200],
          },
        }),
        ...sx,
      }}
      {...restProps}
    >
      {children}
    </Box>
  )
}
