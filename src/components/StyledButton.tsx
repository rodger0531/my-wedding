import Button, { type ButtonProps } from '@mui/material/Button'
import { Fonts } from 'src/constants/fonts'
import { useLanguage } from 'src/hooks/useLanguage'

const StyledButton = ({ children, href, sx, ...props }: ButtonProps) => {
  const { isEnglish } = useLanguage()

  return (
    <Button
      variant="contained"
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      sx={{
        lineHeight: '2.5rem',
        borderRadius: '2rem',
        height: { xs: '40px', sm: '50px' },
        px: 4,
        pt: isEnglish ? '10px' : '5px',
        fontFamily: isEnglish ? Fonts.Dongle : Fonts.GenSenRounded,
        fontSize: isEnglish
          ? { xs: '1.6rem', sm: '2rem' }
          : { xs: '1rem', sm: '1.25rem' },
        textTransform: 'none',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default StyledButton
