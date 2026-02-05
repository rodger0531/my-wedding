import Box, { type BoxProps } from '@mui/material/Box'
import DividerImage from 'src/assets/divider.svg'
import StyledImage from 'src/components/StyledImage'

const Divider = (props: BoxProps) => {
  return (
    <Box {...props}>
      <StyledImage src={DividerImage} alt="Divider" width="100%" />
    </Box>
  )
}

export default Divider
