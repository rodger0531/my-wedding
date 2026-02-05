import DividerImage from '@/assets/divider.svg'
import Box, { type BoxProps } from '@mui/material/Box'

const Divider = (props: BoxProps) => {
  return (
    <Box {...props}>
      <img src={DividerImage} alt="Divider" width="100%" />
    </Box>
  )
}

export default Divider
