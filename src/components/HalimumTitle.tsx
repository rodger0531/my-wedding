import Typography, { type TypographyProps } from '@mui/material/Typography'
import { useLanguage } from 'src/hooks/useLanguage'

const HalimumTitle = ({ children, sx, ...props }: TypographyProps) => {
  const { isEnglish } = useLanguage()

  return (
    <Typography
      variant="h2"
      align="center"
      {...props}
      // Array form so a caller's `sx` (object, array or callback) merges over
      // these defaults instead of replacing them.
      sx={[
        {
          fontFamily: 'handWriting',
          mt: isEnglish ? 0 : -2,
          fontSize: {
            xs: isEnglish ? '1.75rem' : '3rem',
            sm: isEnglish ? '3rem' : '5rem',
          },
          fontWeight: isEnglish ? 'bold' : 'normal',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Typography>
  )
}

export default HalimumTitle
