import Typography, { type TypographyProps } from '@mui/material/Typography'
import { Fonts } from 'src/constants/fonts'

const OurName = ({ sx, ...props }: TypographyProps) => {
  return (
    <Typography
      align="center"
      sx={{
        fontFamily: Fonts.EnglishHandwriting,
        fontSize: { xs: '4rem', sm: '6rem' },
        ...sx,
      }}
      {...props}
    >
      Rodger & Claire
    </Typography>
  )
}

export default OurName
