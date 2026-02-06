import Button, { type ButtonProps } from '@mui/material/Button'
import { useLanguage } from 'src/hooks/useLanguage'

const StyledButton = ({ children, href, sx, ...props }: ButtonProps) => {
  const { isEnglish } = useLanguage()

  return (
    <Button
      variant="contained"
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      sx={{
        minWidth: '250px',
        lineHeight: '2.5rem',
        borderRadius: '2rem',
        height: '50px',
        px: 5,
        pt: isEnglish ? '10px' : '5px',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default StyledButton
