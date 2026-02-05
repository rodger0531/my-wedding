import Typography, { type TypographyProps } from '@mui/material/Typography'
import { useLanguage } from 'src/hooks/useLanguage'

const HalimumTitle = ({ children, sx, ...props }: TypographyProps) => {
  const { isEnglish } = useLanguage()

  return (
    <Typography
      variant="h2"
      align="center"
      fontFamily="handWriting"
      mt={isEnglish ? 0 : -2}
      sx={{ ...(isEnglish ? {} : { fontSize: '5.25rem' }), ...sx }}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default HalimumTitle
