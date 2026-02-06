import Typography, { type TypographyProps } from '@mui/material/Typography'
import { useLanguage } from 'src/hooks/useLanguage'

const HalimumTitle = ({ children, ...props }: TypographyProps) => {
  const { isEnglish } = useLanguage()

  return (
    <Typography
      variant="h2"
      align="center"
      fontFamily="handWriting"
      mt={isEnglish ? 0 : -2}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default HalimumTitle
