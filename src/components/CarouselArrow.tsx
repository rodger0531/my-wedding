import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Box, { type BoxProps } from '@mui/material/Box'
import type { SxProps, Theme } from '@mui/material/styles'

const BUTTON_STYLES: SxProps<Theme> = {
  backgroundColor: 'transparent',
  touchAction: 'manipulation',
  border: 0,
  width: '3.6rem',
  height: '3.6rem',
  zIndex: 1,
  color: ({ palette }: Theme) => ({
    xs: palette.grey[600],
    sm: palette.grey[200],
  }),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: { xs: 'none', sm: 'pointer' },
  pointerEvents: { xs: 'none', sm: 'auto' },
  visibility: { xs: 'hidden', sm: 'visible' },
}

export const PrevButton = ({ children, sx, ...restProps }: BoxProps) => {
  return (
    <Box
      component="button"
      type="button"
      sx={{ ...BUTTON_STYLES, ...sx }}
      {...restProps}
    >
      <ChevronLeftIcon fontSize="large" />
      {children}
    </Box>
  )
}

export const NextButton = ({ children, sx, ...restProps }: BoxProps) => {
  return (
    <Box
      component="button"
      type="button"
      sx={{ ...BUTTON_STYLES, ...sx }}
      {...restProps}
    >
      <ChevronRightIcon fontSize="large" />
      {children}
    </Box>
  )
}
