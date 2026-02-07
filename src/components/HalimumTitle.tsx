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
      sx={{
        fontSize: {
          xs: isEnglish ? '1.75rem' : '2.5rem',
          sm: isEnglish ? '3rem' : '5rem',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default HalimumTitle
